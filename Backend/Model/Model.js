import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    symbol: String,
    lastPrice: String,
    bidPrice: String,
    askPrice: String,
    volume: String,
    baseAsset:String
});

const apiData= mongoose.model('ApiData',postSchema);

export default apiData;