import {DataTypes} from 'sequelize';
import {sequelize} from '#repository/config';

const Product = sequelize.define('PRODUCT', {
  name: DataTypes.STRING,
}, {timestamps: false});

export default Product;
