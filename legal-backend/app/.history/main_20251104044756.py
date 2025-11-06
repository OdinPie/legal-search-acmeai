from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def root():
    return {"message": "Legal Website is running !!"}
