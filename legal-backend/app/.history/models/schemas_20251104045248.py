from pydantic import BaseModel
from typing import Literal

class searchRequest(BaseModel):
    query:str
    mode: Literal["Title","Full"]
