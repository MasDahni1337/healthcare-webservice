const BaseController = require("./BaseController.js");
class TestController extends BaseController{

    checkToken = async (req, res) => {
        let checkToken = await this.token.tokenBearer();
        return res.send(checkToken);
    }
}

module.exports = TestController;