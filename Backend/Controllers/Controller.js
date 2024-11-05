import apiData from  '../Model/Model.js';

const getData = async (req, res) => {
    try {
        const dataFromDB = await apiData.find({});
        res.status(200).json(dataFromDB);
        // console.log((dataFromDB));
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export default getData;