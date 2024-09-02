const axios = require('axios');

exports.getDashboardData = async (req, res) => {
    try {
        const response = await axios.get(`https://finnhub.io/api/v1/market/summary`, {
            params: {
                token: process.env.FINHUB_API_KEY
            }
        });

        res.status(200).json({ marketData: response.data });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching dashboard data' });
    }
};
