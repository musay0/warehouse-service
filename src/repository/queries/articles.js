import ArticleInventory from '#repository/models/articleInventory';

/**
 * @param {Array} articles and their stock
 */
export async function updateStock(articles) {
  for (const article of articles) {
    await ArticleInventory.update({
      stock: article.stock,
    }, {
      where: {
        art_id: article.art_id,
      },
    });
  }
}
