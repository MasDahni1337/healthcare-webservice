require("env2")(".env");
const axios = require('axios');
const qs = require('qs');
class GenerateTokenModel {
    constructor() {
        this.client_id = process.env.SS_CLIENT_ID;
        this.client_secret = process.env.SS_CLIENT_SECRET
        this.host = process.env.BANYU_ENV == 'dev' ? process.env.SS_SANBDOX_HOST : process.env.SS_PROD_HOST
        this.accessToken = null;
        this.tokenExpiry = null;
    }
    async tokenBearer(){
        if (this.accessToken && this.tokenExpiry && new Date() < this.tokenExpiry) {
            return this.accessToken;
        }
        const dataBody = qs.stringify({
            client_id: this.client_id,
            client_secret: this.client_secret,
        });
        let enp = `${this.host}/oauth2/v1/accesstoken?grant_type=client_credentials`
        try {
            const response = await axios.post(enp, dataBody, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            const { access_token, expires_in } = response.data;
            this.accessToken = access_token;
            this.tokenExpiry = new Date(Date.now() + expires_in * 1000);
            return this.accessToken;
        } catch (error) {
            console.error("Error fetching token:", error.message);
            return null;
        }
    }
}

module.exports = GenerateTokenModel;