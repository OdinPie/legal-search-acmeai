from fastapi import FastAPI
from 
app = FastAPI()

@app.get("/")
def root():
    return {"message": "Legal Website is running !!"}
