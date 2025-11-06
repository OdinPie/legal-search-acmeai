# ⚖️ Legally — Full-Stack App (FastAPI + React/Vite + Nginx + Docker)

A production-ready containerized setup for the **Legally** platform: FastAPI backend (Python 3.13) and React/Vite frontend served by **Nginx**, orchestrated with **Docker Compose**. This guide is **step-by-step** from zero to running locally and deploying on a server. Copy/paste friendly.

---

## ✅ What You’ll Build
- **Backend:** FastAPI served by Uvicorn
- **Frontend:** React + Vite built and served by Nginx
- **Reverse Proxy:** Nginx proxies `/api/*` → FastAPI (so **no CORS** in the browser)
- **Compose:** One command to build & run both
- **Dev Mode:** Optional hot-reload for backend (and Vite dev, if desired)
- **Deploy:** Simple VPS/cloud steps + auto-restart on reboot

---

## 📦 Prerequisites
- Docker & Docker Compose plugin installed
- Ports **80** (frontend) and **8000** (backend) are available
- A project layout similar to this:

```
repo-root/
├─ docker-compose.yml
├─ backend/
│  ├─ Dockerfile
│  ├─ requirements.txt
│  └─ app/
│     ├─ main.py
│     └─ api/
│        └─ routes_query.py
└─ frontend/
   ├─ Dockerfile
   ├─ package.json
   ├─ nginx.conf
   └─ src/
```

> Your actual FastAPI modules and React components can vary. Adjust paths if your tree differs.

---

## 🧭 Step-by-Step: Local Run

1) **Clone** or open your project. Ensure all files above exist in the correct places.  
2) **Install Node deps** (optional but recommended before Docker, so you catch npm errors early):
   ```bash
   cd frontend
   npm ci
   cd ..
   ```
3) **Build & start** the stack:
   ```bash
   docker compose up -d --build
   ```
4) **Verify**:
   - Frontend: http://localhost  
   - Backend docs: http://localhost:8000/docs  
5) **Use the app:** Your frontend code should call the backend via relative paths, e.g. `fetch('/api/search')`. Nginx proxies it to the API.

**Stopping:**
```bash
docker compose down
```

---

## 🔁 After You Edit Code (Redeploy Locally)

- Rebuild **both**:
  ```bash
  docker compose up -d --build
  ```
- Or rebuild **one** service:
  ```bash
  docker compose up -d --build api
  docker compose up -d --build web
  ```
- Check logs if something is off:
  ```bash
  docker compose logs -f api
  docker compose logs -f web
  ```

**Cleaning up** dangling images/cache (optional):
```bash
docker system prune -f
```

---

## 🧱 Files You Need (Copy/Paste)

### `backend/Dockerfile`
```dockerfile
FROM python:3.13-slim
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
RUN adduser --disabled-password --gecos "" app && chown -R app:app /app
USER app
EXPOSE 8000
CMD ["uvicorn","app.main:app","--host","0.0.0.0","--port","8000","--proxy-headers"]
```

### `backend/app/main.py` (CORS + router)
```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes_query import router

app = FastAPI()

# Allow localhost origins (with or without a port), handy for dev
app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=r"^http://(localhost|127\.0\.0\.1)(:\d+)?$",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Legal Website is running !!"}
```

> If you proxy `/api` through Nginx (recommended), you usually won’t hit CORS at all. The CORS above is still fine to keep for flexibility.

### `frontend/Dockerfile`
```dockerfile
# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

### `frontend/nginx.conf`
```nginx
server {
  listen 80;
  server_name _;

  root /usr/share/nginx/html;
  index index.html;

  # SPA: serve index.html for all client-side routes
  location / {
    try_files $uri $uri/ /index.html;
  }

  # Proxy /api to the backend container named "api" on port 8000
  location /api/ {
    proxy_pass http://api:8000/;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

> In your React code, always call the API **relatively**, e.g. `fetch('/api/search')`.

### `backend/.dockerignore`
```
__pycache__/
*.pyc
*.pyo
*.pyd
env/
venv/
.git
.gitignore
.mypy_cache/
.pytest_cache/
dist/
.build/
```

### `frontend/.dockerignore`
```
node_modules
dist
.git
.gitignore
.vite
```

### `docker-compose.yml`
```yaml
services:
  api:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: api
    ports:
      - "8000:8000"
    restart: unless-stopped
    healthcheck:
      # python:3.13-slim lacks curl/wget by default; use Python stdlib
      test: ["CMD-SHELL", "python - << 'PY'\nimport urllib.request; urllib.request.urlopen('http://localhost:8000/docs').read(); print('ok')\nPY"]
      interval: 10s
      timeout: 5s
      retries: 5

  web:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: web
    ports:
      - "80:80"
    depends_on:
      - api
    restart: unless-stopped
```

> If ports 80/8000 are taken, change the left side: e.g. `- "8080:80"` for the web, `- "8001:8000"` for the API.

---



## 🧪 Dev Mode (Hot Reload)

If you want local hot reload for FastAPI (and optionally Vite):

Create `docker-compose.dev.yml`:
```yaml
services:
  api:
    command: uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
    volumes:
      - ./backend:/app

  # Option: run Vite dev with HMR instead of Nginx
  # web:
  #   build:
  #     context: ./frontend
  #   command: sh -lc "npm ci && npm run dev -- --host"
  #   ports:
  #     - "5173:5173"
  #   volumes:
  #     - ./frontend:/app
```
Run dev:
```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

Back to prod-like:
```bash
docker compose down
docker compose up -d --build
```

---


## 🧰 Troubleshooting (Common Issues)

- **CORS errors** in browser:  
  Use the Nginx proxy and call `/api/...` from the frontend (recommended), or ensure FastAPI CORS is permissive for `http://localhost` and `http://127.0.0.1` with/without ports.

- **`services.api.environment must be a mapping`**:  
  Remove the empty `environment:` block or define variables as a proper map/list.

- **`COPY ./nginx.conf ... not found`**:  
  Ensure `frontend/nginx.conf` exists and matches the `COPY` path in the Dockerfile, and it’s not ignored by `.dockerignore`.

- **Port already in use**:  
  Change the host port mapping in `docker-compose.yml` (e.g., `- "8080:80"`).

- **Containers running but app not updating**:  
  Rebuild with `docker compose up -d --build`. If still stale, try `docker compose down` then build again.

- **Healthcheck failing**:  
  Check `docker compose logs -f api`. Ensure the app binds `0.0.0.0:8000` and there are no import errors.

- **Frontend cannot reach backend inside Docker**:  
  Make sure you call `/api/...` (not `http://localhost:8000/...`) when using the Nginx proxy, or if calling directly, enable CORS accordingly.

---

## 🪄 Commands Cheat Sheet

```bash
# Build & run (prod-like)
docker compose up -d --build

# Stop and remove
docker compose down

# Rebuild only backend
docker compose up -d --build api

# Rebuild only frontend
docker compose up -d --build web

# Logs
docker compose logs -f api
docker compose logs -f web

# List containers
docker compose ps

# Clean dangling images/cache (careful)
docker system prune -f
```

---

## ✅ Summary
- **Frontend:** http://localhost (served by Nginx)  
- **Backend:** http://localhost:8000/docs (FastAPI)  
- **Calls:** use `/api/*` from the frontend; Nginx proxies to FastAPI → **no CORS**  
- **Update after edits:** `docker compose up -d --build`  
- **Auto-restart on reboot:** `restart: unless-stopped` keeps services running

