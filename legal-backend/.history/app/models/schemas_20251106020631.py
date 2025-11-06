from pydantic import BaseModel
from typing import Literal,Optional

class searchRequest(BaseModel):
    query:str
    mode: Optional[Literal["title","full"]] = None # will search in the full by default
    tags: 

class searchResponse(BaseModel):
    query:str
    response:str
