from pydantic import BaseModel
from typing import Literal,Optional

class searchRequest(BaseModel):
    query:str
    mode: Optional[Literal["title","full"]] = "title" # will search in the title by default

class searchResponse(BaseModel):
    query:str
    response:str
