import json

def searchFor(query:str, mode:str) :
    with open ('../data/docs.json','r') as file:
        matches = []
        data = json.load(file)
        for case in data:
            if mode == 'title':
                if query.lower() in case.title.lower():
                    

