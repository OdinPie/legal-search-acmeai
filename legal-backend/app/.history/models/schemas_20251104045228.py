from pydantic import BaseModel
from typing import Li
class searchRequest(BaseModel):
    query:str
    mode: Literal
