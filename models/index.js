import { userModel } from './user.model.js';
import { cityModel } from './city.model.js';
import { estateModel } from './estate.model.js';
import { estate_typeModel } from './estate_type.model.js';
import { imageModel } from './image.model.js';
import { estateImageRelModel } from './estate_image_rel.model.js';
import { energyLabelModel } from './energy_label.model.js';
import { reviewModel } from './review.model.js';
import { staffModel } from './staff.model.js';
import { favoriteModel } from './favorite.model.js';

estateModel.belongsTo(cityModel, { 
    foreignKey: 'city_id' 
})
cityModel.hasMany(estateModel, { 
    foreignKey: 'city_id' 
})

estateModel.belongsTo(energyLabelModel, { 
    foreignKey: 'energy_label_id' 
})
energyLabelModel.hasMany(estateModel, { 
    foreignKey: 'energy_label_id' 
})

estateModel.belongsTo(estate_typeModel, { 
    foreignKey: 'type_id' 
})
estate_typeModel.hasMany(estateModel, { 
    foreignKey: 'type_id' 
})

reviewModel.belongsTo(estateModel, { 
    foreignKey: 'estate_id' 
})
estateModel.hasMany(reviewModel, { 
    foreignKey: 'estate_id' 
})

reviewModel.belongsTo(userModel, { 
    foreignKey: 'user_id' 
})
userModel.hasMany(reviewModel, { 
    foreignKey: 'user_id' 
})

estateModel.belongsToMany(favoriteModel, { 
    through: favoriteModel, 
    foreignKey: 'estate_id' 
})

userModel.belongsToMany(favoriteModel, { 
    through: favoriteModel, 
    foreignKey: 'user_id' 
})

estateModel.belongsToMany(imageModel, { 
    through: estateImageRelModel,
    as: 'images'
})

export { 
    userModel,
    energyLabelModel,
    estateModel,
    estate_typeModel,
    imageModel,
    estateImageRelModel,
    reviewModel,
    staffModel,
    favoriteModel,
    cityModel
}