'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
            Post.belongsTo(models.User, { foreignKey: 'authorId', as: 'author' });
        }
    }

    Post.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publishedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('draft', 'published', 'archived'),
            defaultValue: 'draft'
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        authorId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Post',
    });

    return Post;
};