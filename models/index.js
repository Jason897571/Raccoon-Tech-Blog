const User = require('./User');
const Post = require('./Post');
const Comment = require('/Comment');

// relationship between user and post
User.hasMany(Post, {foreignKey: 'user_id'});
Post.belongsTo(User, {foreignKey: 'user_id', onDelete: 'CASCADE'});


// relationship between user and comment
User.hasMany(Comment, {foreignKey: 'user_id'});
Comment.belongsTo(User, {foreignKey: 'user_id', onDelete: 'CASCADE'});


// relationship between post and commnet
Post.hasMany(Comment, {foreignKey: 'post_id'});
Comment.belongsTo(Post, {foreignKey: 'post_id', onDelete: 'CASCADE'});

module.exports = { User, Post, Comment };