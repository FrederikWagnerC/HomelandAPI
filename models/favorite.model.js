import dbConfig from "../config/dbConfig.js";
import { DataTypes, Model } from "sequelize";
import { userModel } from "./user.model.js";
import { estateModel } from "./estate.model.js";


export class favoriteModel extends Model {}

favoriteModel.init({
    id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
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
    underscored: true,
    timestamps: true,

})