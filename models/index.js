const User = require("./User");
const Post = require("./Post");
const Vote = require('./Vote');
const Comment = require('./Comment');


// create associations. This association creates 
//the reference for the id column in the User model 
//to link to the corresponding foreign key pair, which is the user_id in the Post model.
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
  });
  Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
  });
  ////////////////////With these two .belongsToMany() methods in place, we're
  // allowing both the User and Post models to query each other's information in the context of a vote. 
  User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id',
    onDelete: 'cascade'
  });
  
  Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id',
    onDelete: 'cascade'
  });
  ///////////////////////////////direct connection
  Vote.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
  });
  
  Vote.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
  });
  
  Post.hasMany(Vote, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
  });

  //////////////////////
  Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
  });
  
  Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
  });
  
  Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
  });  
  
  module.exports = { User, Post, Vote, Comment };
