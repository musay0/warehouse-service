import logger from '#commons/logger';
import {DataTypes} from 'sequelize';
import {sequelize} from '../config.cjs';

const Product = sequelize.define('PRODUCT', {
  p_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
}, {timestamps: false});

Product.afterDestroy((instance, options) => {
  logger.info('product is destroyed');
});


export default Product;
