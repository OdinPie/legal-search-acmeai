from fastapi import APIRouter
from core.searching_logic import searchFor
from models.schemas import searchRequest, searchResponse

router = APIRouter()

@router.post('/search',sea)

