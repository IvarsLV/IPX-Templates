from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models import Client
from app.database import get_db
from pydantic import BaseModel

router = APIRouter()

# Схема для Pydantic
class ClientCreate(BaseModel):
    name: str
    email: str

# Получение списка клиентов
@router.get("/clients/")
async def get_clients(db: Session = Depends(get_db)):
    return db.query(Client).all()

# Добавление клиента
@router.post("/clients/")
async def create_client(client: ClientCreate, db: Session = Depends(get_db)):
    new_client = Client(name=client.name, email=client.email)
    db.add(new_client)
    db.commit()
    db.refresh(new_client)
    return new_client

# Получение клиента по ID
@router.get("/clients/{client_id}")
async def get_client(client_id: int, db: Session = Depends(get_db)):
    client = db.query(Client).filter(Client.id == client_id).first()
    if not client:
        raise HTTPException(status_code=404, detail="Client not found")
    return client

# Удаление клиента
@router.delete("/clients/{client_id}")
async def delete_client(client_id: int, db: Session = Depends(get_db)):
    client = db.query(Client).filter(Client.id == client_id).first()
    if not client:
        raise HTTPException(status_code=404, detail="Client not found")
    db.delete(client)
    db.commit()
    return {"message": "Client deleted"}