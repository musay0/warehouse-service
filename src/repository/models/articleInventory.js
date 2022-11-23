import {DataTypes} from 'sequelize';
import {sequelize} from '#repository/config';

const ArticleInventory = sequelize.define('ARTICLE_INVENTORY', {
  'art_id': DataTypes.STRING,
  'name': DataTypes.STRING,
  'stock': DataTypes.INTEGER,
}, {timestamps: false});

export default ArticleInventory;
