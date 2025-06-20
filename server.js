require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

//app.get('/', (req, res) => {
//    res.send('Personalized Loan Assistant Backend Running');
//});

app.get('/api/loan', (req, res) => {
    const loans = [ {
        id: 1,
        name: 'Personal Loan',
        amount: 5000,
        interestRate: 5.5,
        term: 36
    },
    {
        id: 2,
        name: 'Home Loan',
        amount: 200000,
        interestRate: 3.5,
        term: 180
    },
    {
        id: 3,
        name: 'Car Loan',
        amount: 25000,
        interestRate: 4.5,
        term: 60
    }];
    res.json(loans);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
