from fastapi import APIRouter,HTTPException
from app.core.searching_logic import searchFor,loadDocs
from app.models.schemas import searchRequest, searchResponse

router = APIRouter()

@router.post('/search',response_model=searchResponse)
def searchDocs(request = searchRequest):
    result = searchFor(request.query,request.mode)
    return {"query":request.query,"response":result}

@router.get('/docs')
def getAllDocs():
    data = loadDocs()
    return {"Documents :" : data}

@router.get('/docs/{id}')
def getDocById(id:str):
    data = loadDocs()
    for doc in data:
        if id == doc.get("id):
            return doc
        
        return FileNotFoundError
            



