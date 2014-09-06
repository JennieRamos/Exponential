import math

def make_exponentiater(e):
    return lambda(x): math.pow (x,e)
	
cube = make_exponentiater(3)

def index(req, result):
    newresult = int(result)
	return cube(result)