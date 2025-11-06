from fastapi import APIRouter,HTTPException
from app.core.searching_logic import searchFor,loadDocs
from app.models.schemas import searchRequest, searchResponse

router = APIRouter()

@router.post('/search',response_model=searchResponse)
def searchDocs(request = searchRequest):
    result = searchFor(request.query,request.mode, tags)
    return {"query":request.query,"response":result}

@router.get('/docs')
def getAllDocs():
    data = loadDocs()
    return {"Documents :" : data}

@router.get('/docs/{id}')
def getDocById(id:int):
    data = loadDocs()
    for doc in data:
        if id == doc.get("id"):
            return doc
        
    raise HTTPException(status_code=404,detail="Document not found!!") 
            



