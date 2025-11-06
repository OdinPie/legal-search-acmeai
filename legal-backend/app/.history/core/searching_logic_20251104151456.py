import json

def searchFor(query:str) ->str:
    with open ('../data/docs.json','r') as file:
        data = json.load(file)
        print()