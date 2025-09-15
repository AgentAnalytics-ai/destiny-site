from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import httpx
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Destiny Church API", version="1.0.0")
templates = Jinja2Templates(directory="templates")

# Planning Center API credentials
PC_APPLICATION_ID = os.getenv("PC_APPLICATION_ID")
PC_SECRET = os.getenv("PC_SECRET")
PC_ORGANIZATION_ID = os.getenv("PC_ORGANIZATION_ID")

async def get_pc_data(endpoint: str):
    """Fetch data from Planning Center API"""
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"https://api.planningcenteronline.com/services/v2/{endpoint}",
                auth=(PC_APPLICATION_ID, PC_SECRET)
            )
            return response.json()
    except Exception as e:
        print(f"Error fetching PC data: {e}")
        return {"data": []}

@app.get("/give", response_class=HTMLResponse)
async def giving_page(request: Request):
    """Custom branded giving page with real PC data"""
    try:
        # Get real giving funds from Planning Center
        funds_data = await get_pc_data("funds")
    except:
        funds_data = {"data": []}
    
    return templates.TemplateResponse("giving.html", {
        "request": request,
        "title": "Give Online - Destiny Church",
        "funds": funds_data.get("data", [])
    })

@app.get("/groups", response_class=HTMLResponse)
async def groups_page(request: Request):
    """Custom branded groups page with real PC data"""
    try:
        # Get real groups from Planning Center
        groups_data = await get_pc_data("groups")
    except:
        groups_data = {"data": []}
    
    return templates.TemplateResponse("groups.html", {
        "request": request,
        "title": "Small Groups - Destiny Church",
        "groups": groups_data.get("data", [])
    })

@app.get("/events", response_class=HTMLResponse)
async def events_page(request: Request):
    """Custom branded events page with real PC data"""
    try:
        # Get real events from Planning Center
        events_data = await get_pc_data("events")
    except:
        events_data = {"data": []}
    
    return templates.TemplateResponse("events.html", {
        "request": request,
        "title": "Events - Destiny Church",
        "events": events_data.get("data", [])
    })

# API endpoints for data
@app.get("/api/funds")
async def get_funds():
    """API endpoint for giving funds"""
    try:
        funds_data = await get_pc_data("funds")
        return funds_data
    except Exception as e:
        return {"error": str(e)}

@app.get("/api/groups")
async def get_groups():
    """API endpoint for groups data"""
    try:
        groups_data = await get_pc_data("groups")
        return groups_data
    except Exception as e:
        return {"error": str(e)}

@app.get("/api/events")
async def get_events():
    """API endpoint for events data"""
    try:
        events_data = await get_pc_data("events")
        return events_data
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
