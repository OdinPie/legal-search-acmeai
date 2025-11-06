from pydantic import BaseModel
from typing import Literal

class searchRequest(BaseModel):
    query:str
    mode: Optio = "title" # will search in the title by default

class searchResponse(BaseModel):
    query:str
    response:str
