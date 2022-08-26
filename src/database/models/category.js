const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  });

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, {as: 'postCategory', foreignKey: 'categoryId'})
  }

  return Category;
}

module.exports = Category; 