import dbConfig from "../config/dbConfig.js";
import { DataTypes, Model } from "sequelize";

export class favoriteModel extends Model {}

favoriteModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: userModel,
            key: 'id'
        }
    },

    estate_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: estateModel,
            key: 'id'
        }
    }

}, {
    sequelize: dbConfig,
    modelName: 'favorite',
    underscored: false,
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,

})