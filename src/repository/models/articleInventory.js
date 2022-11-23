import {DataTypes} from 'sequelize';
import {sequelize} from '../config.cjs';

const ArticleInventory = sequelize.define('ARTICLE_INVENTORY', {
  'art_id': {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  'name': {
    type: DataTypes.STRING,
  },
  'stock': {
    type: DataTypes.INTEGER,
  },
}, {timestamps: false});

export default ArticleInventory;
