from fastapi import FastAPI
from api.routes_query
app = FastAPI()

@app.get("/")
def root():
    return {"message": "Legal Website is running !!"}
