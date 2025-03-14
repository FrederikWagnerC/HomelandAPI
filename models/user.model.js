import dbConfig from "../config/dbConfig.js";
import { DataTypes, Model } from "sequelize";

export class userModel extends Model {}

userModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    refresh_token: {
        type: DataTypes.STRING,
        allowNull: true
    },

    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },  

}, {
    sequelize: dbConfig,
    modelName: 'user',
    underscored: false,
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,

})