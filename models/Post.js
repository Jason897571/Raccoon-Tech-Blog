const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {};

Post.init({
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    contents:{
        type: DataTypes.STRING,
        allowNull: false

    },
    creator_id:{
        type: DataTypes.INTEGER,
        references:{
            model:'user',
            key: 'user_id',
        }
    },
    created_date:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
});

module.exports = Post;