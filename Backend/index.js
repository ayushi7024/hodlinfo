// index.js
import express from 'express';
import fetch from 'node-fetch';
import mongoose from 'mongoose';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import Routes from './router.js'; // Import the router file

import apiData from './Model/Model.js'; // Ensure this path points to your data model

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Use the Routes (from router.js) for handling '/api/cryptos' endpoint
app.use('/', Routes);

const CONNECTION_URL = process.env.MONGO_URI || 'mongodb+srv://shuklaayushi7400:3JxjWkqzVpCqltPm@cluster0.8w6uf.mongodb.net/hodlinfo';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.log(err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Optional: A simple route to check the server
app.get("/", (req, res) => {
    res.send("<h3>This is backend<h3>");
});

// Function to fetch data from WazirX API and save it to MongoDB
const getApiData = async () => {
    const data = await fetch('https://api.wazirx.com/sapi/v1/tickers/24hr');
    const response = await data.json();
    
    for (let i = 0; i < 10; i++) {
        const apiDataPost = new apiData({
            symbol: response[i].symbol,
            lastPrice: response[i].lastPrice,
            bidPrice: response[i].bidPrice,
            askPrice: response[i].askPrice,
            volume: response[i].volume,
            baseAsset: response[i].baseAsset
        });

        const nameToSearch = response[i].symbol;
        const apiDataFind = await apiData.findOne({ symbol: nameToSearch });

        if (apiDataFind) {
            await apiData.findOneAndUpdate(
                { symbol: nameToSearch },
                {
                    lastPrice: response[i].lastPrice,
                    bidPrice: response[i].bidPrice,
                    askPrice: response[i].askPrice,
                    volume: response[i].volume,
                    baseAsset: response[i].baseAsset
                },
                { new: true }
            );
        } else {
            await apiDataPost.save();
        }
    }
};

// Call `getApiData` every 15 seconds to keep data up-to-date
setInterval(getApiData, 15000);
