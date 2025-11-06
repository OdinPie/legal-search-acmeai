from fastapi import FastAPI
from api.routes_query import router
app = FastAPI()

app.include_router(router,pre)

@app.get("/")
def root():
    return {"message": "Legal Website is running !!"}
