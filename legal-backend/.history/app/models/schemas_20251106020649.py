from pydantic import BaseModel
from typing import Literal,Optional,List

class searchRequest(BaseModel):
    query:str
    mode: Optional[Literal["title","full"]] = None # will search in the full by default
    tags: Optional[List[str]] = None

class searchResponse(BaseModel):
    query:str
    response:str
