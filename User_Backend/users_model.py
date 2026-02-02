# from  fast_api import FastAPI
from pydantic import BaseModel  

class User(BaseModel):
    fname:str
    lname:str
    email:str
    phone:str
    
    
    
    