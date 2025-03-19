import dbConfig from "../config/dbConfig.js";
import { DataTypes, Model } from "sequelize";
import { cityModel } from "./city.model.js";
import { estate_typeModel } from "./estate_type.model.js";
import { energyLabelModel } from "./energy_label.model.js";

export class estateModel extends Model {}

estateModel.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},		
	address: {
		type: DataTypes.STRING,
		allowNull: false
	},
	price: {
		type: DataTypes.DOUBLE,
		allowNull: false,
		defaultValue: 0.00
	},
	payout: {
		type: DataTypes.DOUBLE,
		allowNull: false,
		defaultValue: 0.00
	},
	gross: {
		type: DataTypes.DOUBLE,
		allowNull: false,
		defaultValue: 0.00
	},
	net: {
		type: DataTypes.DOUBLE,
		allowNull: false,
		defaultValue: 0.00
	},
	cost: {
		type: DataTypes.DOUBLE,
		allowNull: false,
		defaultValue: 0.00
	},
	num_rooms: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0
	},
	num_floors: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0
	},
	floor_space: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0
	},
	ground_space: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0
	},
	basement_space: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0
	},
	year_construction: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0
	},
	year_rebuilt: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0
	},
	description: {
		type: DataTypes.TEXT,
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
			model: estate_typeModel,
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
	}
},
    {
    sequelize: dbConfig,
    modelName: 'estate',
    underscored: true,
    timestamps: true,

})