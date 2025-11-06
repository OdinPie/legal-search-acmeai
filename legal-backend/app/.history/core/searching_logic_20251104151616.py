import json

def searchFor(query:str, mode:str) ->str:
    with open ('../data/docs.json','r') as file:
        data = json.load(file)
        for case in data:
            if
