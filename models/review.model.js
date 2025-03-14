import dbConfig from "../config/dbConfig.js";
import { DataTypes, Model } from "sequelize";

export class brandModel extends Model {}

brandModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },

    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },

    num_stars: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 

    date: {
        type: DataTypes.DATE,
        allowNull: false
    }, 

    estate_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: estateModel,
            key: 'id'
        }
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: userModel,
            key: 'id'
        }
    },

    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        
    }

}, {
    sequelize: dbConfig,
    modelName: 'brand',
    underscored: false,
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,

})