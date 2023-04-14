import fastapi

server = fastapi()

@server.get("/")
def home():
    return {"Hello": "World"}