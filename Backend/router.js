// router.js
import express from 'express';
import apiData from './Model/Model.js'; // Import your Mongoose model

const router = express.Router();

// Add a route to get the stored cryptocurrency data
router.get('/api/cryptos', async (req, res) => {
    try {
        // Fetch top 10 records from MongoDB
        const cryptos = await apiData.find().limit(10);
        res.json(cryptos); // Send data to the frontend as JSON
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving crypto data' });
    }
});

export default router;
