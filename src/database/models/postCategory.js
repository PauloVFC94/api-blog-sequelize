const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  });

  PostCategory.associate = (models) => {
   models.BlogPost.belongsToMany(models.Category, {
    as: 'Categories',
    throught: PostCategory,
    foreignKey: 'postId',
    otherKey: 'categoryId'
   });

   models.Category.belongsToMany(models.BlogPost, {
    as: 'BlogPosts',
    throught: PostCategory,
    foreignKey: 'categoryId',
    otherKey: 'postId'
   });
  }

  return PostCategory;
}

module.exports = PostCategory;