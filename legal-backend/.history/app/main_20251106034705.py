from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes_query import router
app = FastAPI()

app.include_router(router,prefix="/api")

origins = [
    "http://localhost:5173/",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origin=origins,
    allow_credentials=True,
    allow_methods = ["GET","POST"],
    allow_headers = ["*"],
)

@app.get("/")
def root():
    return {"message": "Legal Website is running !!"}
