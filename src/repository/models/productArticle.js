import {DataTypes} from 'sequelize';
import {sequelize} from '../config.cjs';
import Product from '#repository/models/product';
import ArticleInventory from '#repository/models/articleInventory';

const ProductArticle = sequelize.define('PRODUCT_ARTICLE', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  amount_of: {
    type: DataTypes.INTEGER,
  },
}, {timestamps: false});

// Setup a One-to-Many relationship between User and Grant
Product.hasMany(ProductArticle, {onDelete: 'CASCADE', hooks: true});
ProductArticle.belongsTo(Product);

// Also setup a One-to-Many relationship between Profile and Grant
ArticleInventory.hasMany(ProductArticle);
ProductArticle.belongsTo(ArticleInventory);
export default ProductArticle;
