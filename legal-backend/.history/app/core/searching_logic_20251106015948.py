import json

def loadDocs ():
    with open ('app/data/docs.json','r') as file:
        data = json.load(file)
        return data

def searchFor(query:str, mode=None, tags=None) :
    
    data = loadDocs()
    matches = []

    
    for case in data:
        
        title = case["title"].lower()
        text = case["text"].lower()
        keywords = [k.lower() for k in case["keywords"]]
        if mode == 'title':
            found = query.lower() in title
        else:
            found = query.lower() in title or query.lower() in text
        
        

    
    return ", ".join(matches)