const Model = require("../Config/Model.js")
/**
 * Represents a model for the "users" table.
 * @extends Model
 */
class UsersModel extends Model{
    constructor(configName = 'default'){
        super(configName);
        this.setTable('users');
        this.setPrimaryKey('id');
        this.setAllowedFields([
            'id',
            'username',
            'email',
            'role_id',
            'password'
        ]);
        this.setTimestamps(true);
        this.setSoftDelete(true);
    }

}

module.exports = UsersModel;