const {Model, DataTypes} = require('sequelize');
const sequelize = require('./config/connection');

class Comment extends Model {};

Comment.init({
    id: {
        type: DataTypes.INT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    post_id:{
        type: DataTypes.INTEGER,
        references:{
            model:'post',
            key: 'post_id',
        }

    },
    creator_id:{
        type: DataTypes.INTEGER,
        references:{
            model:'user',
            key: 'user_id',
        }
    },
    created_date:{
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',

});

module.exports = Comment;