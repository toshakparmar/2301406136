// Add Dependencies
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize App from Express.
const app = express();

// Use Dependencies.
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());  

// DotEnv Get Key..
require('dotenv').config();

const authToken = "";

const authUrl = "http://20.244.56.144/test/auth";

const authData = {

    "companyName": "CodeSmachers",
    "clientID": "0b130ad9-0302-496c-86a6-3aefac49d071",
    "clientSecret": "yjIrNEiKCmvniHID",
    "ownerName": "Toshak Parmar",
    "ownerEmail": "toshakparmar2000@gmail.com",
    "rollNo": "2301406136"

}


app.post('auth', async (req,res) => {
    try{
        const authRes = await axios.post(authUrl, authData, {
            headers: {
                'Content-Type': 'application/json'
            }     
        });
        res.json(authRes.data);
        console.log('Auth Token: ' + authRes.data.token);
        authToken = authRes.data.token;
    }catch(error){
        res.status(500).send('Error fetching data');
    }
});

app.get('/', async (req, res) => {

    // Change the values here..
    const no_products = 10;
    const min_price = 1;
    const max_price = 10000;
    const product_category = "Phone";

    try{
    const response = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/${product_category}/products?top=${no_products}&minPrice=${min_price}&maxPrice=${max_price}`, {
        headers:{
            'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxMDQxNjk3LCJpYXQiOjE3MjEwNDEzOTcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjBiMTMwYWQ5LTAzMDItNDk2Yy04NmE2LTNhZWZhYzQ5ZDA3MSIsInN1YiI6InRvc2hha3Bhcm1hcjIwMDBAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQ29kZVNtYWNoZXJzIiwiY2xpZW50SUQiOiIwYjEzMGFkOS0wMzAyLTQ5NmMtODZhNi0zYWVmYWM0OWQwNzEiLCJjbGllbnRTZWNyZXQiOiJ5aklyTkVpS0Ntdm5pSElEIiwib3duZXJOYW1lIjoiVG9zaGFrIFBhcm1hciIsIm93bmVyRW1haWwiOiJ0b3NoYWtwYXJtYXIyMDAwQGdtYWlsLmNvbSIsInJvbGxObyI6IjIzMDE0MDYxMzYifQ.ZXkR87iE8EdI0u9Rp-O-HNc9y4zTJIqdwNHSOkC7CBw',

            // 'Authorization': 'Bearer ' + authToken,
        }
    });
        res.json(response.data);
    }
    catch(error){   
        res.status(500).send(['Error fetching data', error]);
    }
});

app.listen(process.env.PORT_NO, () => {
    console.log('Server started on port 3000');
})