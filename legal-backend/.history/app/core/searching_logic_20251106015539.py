import json

def loadDocs ():
    with open ('app/data/docs.json','r') as file:
        data = json.load(file)
        return data

def searchFor(query:str, mode=None, tags=None) :
    
    data = loadDocs()
    matches = []

    
    for case in data:
        
        title = case["title"]
        if mode == 'title':
            if query.lower() in case.title.lower():
                matches.append(case.id)
        else:
            if query.lower() in case.title.lower() or query.lower() in case.text.lower():
                matches.append(case.id)

    if not matches:
        return ("No match found!")
    return ", ".join(matches)