from fastapi import APIRouter
from core.searching_logic import searchFor
from models.schemas import searchRequest, searchResponse

router = APIRouter()

@router.post('/search',response_model=searchResponse)
def searchDocs(request = searchRequest):
    result = searchFor(request.query,request.mode)
    return {""}

