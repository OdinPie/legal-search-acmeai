from pydantic import BaseModel
from typing import Literal,Optional,List

class Case(BaseModel):
    id:int
    title: tr
    summary: str
    text: str
    category: str
    keywords: List[str]
    year: int

class searchRequest(BaseModel):
    query:str
    mode: Optional[Literal["title","full"]] = None # will search in the full by default
    tags: Optional[List[str]] = None

class searchResponse(BaseModel):
    query:str
    response:List[int]
