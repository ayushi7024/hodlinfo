import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cryptolist.css';

const CryptoList = () => {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        const fetchCryptoData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cryptos'); // Full URL with backend port
                setCryptos(response.data); // Set data to state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCryptoData();
    }, []);

    return (
        <div className="crypto-list">
            <h2>Top 10 Cryptocurrencies</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Price</th>
                        <th>Buy Price</th>
                        <th>Sell Price</th>
                        <th>Volume</th>
                        <th>Base Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptos.map((crypto, index) => (
                        <tr key={index}>
                            <td>{crypto.symbol}</td>
                            <td>{crypto.lastPrice}</td>
                            <td>{crypto.bidPrice}</td>
                            <td>{crypto.askPrice}</td>
                            <td>{crypto.volume}</td>
                            <td>{crypto.baseAsset}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoList;
