require("env2")(".env");
const axios = require('axios');

class DoveModel {
    constructor() {
        this.host = process.env.BANYU_ENV === 'dev' ? process.env.SS_SANBDOX_HOST : process.env.SS_PROD_HOST;
    }

    async get(urlenp, token) {
        try {
            const response = await axios.get(this.host + urlenp, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            let result = {
                status: 200,
                message: "Success",
                data: response.data
            }
            return result;
        } catch (error) {
            console.log("check error", error);
            if (error.response) {
                return {
                    status: error.response.status,
                    message: error.response.data.message,
                    data: error.response.data.data,
                };
            } else {
                return {
                    status: 500,
                    message: "Internal Server Error",
                    data: null,
                };
            }
        }
    }

    async post(urlenp, token, data) {
        try {
            const response = await axios.post(this.host + urlenp, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            let result = {
                status: 200,
                message: "Success",
                data: response.data
            }
            return result;
        } catch (error) {
            if (error.response) {
                return {
                    status: error.response.status,
                    message: error.response.data.message,
                    data: error.response.data.data,
                };
            } else {
                return {
                    status: 500,
                    message: "Internal Server Error",
                    data: null,
                };
            }
        }
    }
}

module.exports = DoveModel;
