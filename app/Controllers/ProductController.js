const BaseController = require("./BaseController.js");
class ProductController extends BaseController {

    price = async (req, res) => {
        const {
            page,
            limit,
            kfa_code,
            region_code
        } = req.query;
        let isToken = await this.token.tokenBearer();
        let enp = '/kfa/farmalkes-price-jkn';
        const params = new URLSearchParams();
        if (page) params.append("page", page);
        if (limit) params.append("limit", limit);
        if (kfa_code) params.append("kfa_code", kfa_code);
        if (region_code) params.append("region_code", region_code);
        const fullEnp = params.toString().length == 0 ? enp : `${enp}?${params.toString()}`;
        let checkData = await this.dove.get(fullEnp, isToken);
        if (checkData.status == 200) {
            return res.status(200).json(checkData)
        } else {
            return res.status(checkData.status).json(checkData)
        }

    }

    detail = async (req, res) => {
        const {
            identifier,
            code,
            template_code
        } = req.query;
        let isToken = await this.token.tokenBearer();
        let enp = '/kfa-v2/products';
        const params = new URLSearchParams();
        if (identifier) params.append("identifier", identifier);
        if (code) params.append("code", code);
        if (template_code) params.append("tag_code", template_code);
        const fullEnp = params.toString().length == 0 ? enp : `${enp}?${params.toString()}`;
        let checkData = await this.dove.get(fullEnp, isToken);
        if (checkData.status == 200) {
            return res.status(200).json(checkData)
        } else {
            return res.status(checkData.status).json(checkData)
        }
    }

    list = async (req, res) => {
        const {
            page,
            size,
            product_type,
            from_date,
            to_date,
            farmalkes_type,
            keyword,
            template_code,
            packaging_code
        } = req.query;
        let isToken = await this.token.tokenBearer();
        let enp = '/kfa-v2/products/all';
        const params = new URLSearchParams();
        if (page) params.append("page", page);
        if (size) params.append("size", size);
        if (product_type) params.append("product_type", product_type);
        if (from_date) params.append("from_date", from_date);
        if (to_date) params.append("to_date", to_date);
        if (farmalkes_type) params.append("farmalkes_type", farmalkes_type);
        if (keyword) params.append("keyword", keyword);
        if (template_code) params.append("template_code", template_code);
        if (packaging_code) params.append("packaging_code", packaging_code);
        const fullEnp = params.toString().length == 0 ? enp : `${enp}?${params.toString()}`;
        let checkData = await this.dove.get(fullEnp, isToken);
        if (checkData.status == 200) {
            return res.status(200).json(checkData)
        } else {
            return res.status(checkData.status).json(checkData)
        }
    }
}

module.exports = ProductController;