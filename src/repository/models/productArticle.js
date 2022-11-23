import {DataTypes} from 'sequelize';
import {sequelize} from '#repository/config';
import Product from '#repository/models/product';
import ArticleInventory from '#repository/models/articleInventory';

const ProductArticle = sequelize.define('PRODUCT_ARTICLE', {
  amount_of: DataTypes.INTEGER,
}, {timestamps: false});

Product.belongsToMany(ArticleInventory, {through: ProductArticle});
ArticleInventory.belongsToMany(Product, {through: ProductArticle});

export default ProductArticle;
