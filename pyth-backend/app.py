from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
from xgboost import xgb
import joblib

app= FastAPI()

model=joblib.load('model.pkl')

class LoanApp(BaseModel):
    income: float
    age: int
    loan_amount: float
    credit_score: int
    loan_term: int
    employment_type: str
    monthly_debt: float
    
@app.post("/api/predict")
def predict(data: LoanApp):
    input_df=pd.DataFrame([data.model_dump()])
    prediction=model.predict(input_df)[0]
    return {"reccomendation":"approved" if prediction==1 else "denied"}
    