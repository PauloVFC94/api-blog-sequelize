const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {as: 'blogPost', foreignKey: 'userId'})
  }

  return User;
}

module.exports = User; 