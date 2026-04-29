from fastapi import APIRouter
from services.llm_service import get_response
from utils.logger import log_query

router = APIRouter()

@router.post("/ask")
async def ask_question(data: dict):
    user_input = data.get("query")

    if not user_input:
        return {"error": "Query is required"}

    response = get_response(user_input)

    # ✅ log it
    log_query(user_input, response)

    return {"response": response}