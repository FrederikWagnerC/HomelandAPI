import dbConfig from "../config/dbConfig.js";
import { DataTypes, Model } from "sequelize";

export class estateModel extends Model {}

estateModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    payout: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    gross: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    net: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    cost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    num_rooms: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    num_floor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    floor_space: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    ground_space: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    basement_space: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    year_construction: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    year_built: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    floorplan: {
        type: DataTypes.STRING,
        allowNull: false
    },

    num_clicks: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: cityModel,
            key: 'id'
        }
    },

    type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: typeModel,
            key: 'id'
        }
    },

    energy_label_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: energyLabelModel,
            key: 'id'
        }
    },

}, {
    sequelize: dbConfig,
    modelName: 'estate',
    underscored: false,
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,

})