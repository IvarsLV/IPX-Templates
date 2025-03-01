from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router
from app.database import engine, Base

app = FastAPI(title="Clients API")

# Создаём таблицы в БД
Base.metadata.create_all(bind=engine)

# CORS (разрешаем запросы с фронтенда)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Hello from FastAPI"}