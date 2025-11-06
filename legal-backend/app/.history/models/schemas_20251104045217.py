from pydantic import BaseModel

class searchRequest(BaseModel):
    query:str
    mode:
