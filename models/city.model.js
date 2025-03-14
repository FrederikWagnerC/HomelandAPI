import dbConfig from "../config/dbConfig.js";
import { DataTypes, Model } from "sequelize";

export class cityModel extends Model {}

cityModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    zipcode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize: dbConfig,
    modelName: 'city',
    underscored: false,
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,

})