const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  });

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, {as: 'postCategory', foreignKey: 'categoryId'})
  }

  return Category;
}

module.exports = Category;