import dbConfig from "../config/dbConfig.js";
import { DataTypes, Model } from "sequelize";

export class estate_typeModel extends Model {}

estate_typeModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize: dbConfig,
    modelName: 'estate_type',
    underscored: false,
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,

})