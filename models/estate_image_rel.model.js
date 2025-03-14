import dbConfig from "../config/dbConfig.js";
import { DataTypes, Model } from "sequelize";

export class estate_image_relModel extends Model {}

estate_image_relModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    estate_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'estate',
            key: 'id'
        }
    },

    image_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'image',
            key: 'id'
        }
    },

    is_main: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }

}, {
    sequelize: dbConfig,
    modelName: 'estate_image_rel',
    underscored: false,
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,

})