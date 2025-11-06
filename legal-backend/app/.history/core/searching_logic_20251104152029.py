import json

def searchFor(query:str, mode:str) :
    with open ('../data/docs.json','r') as file:
        matches = []
        data = json.load(file)
        for case in data:
            ifm ode == 'title':
                if 

