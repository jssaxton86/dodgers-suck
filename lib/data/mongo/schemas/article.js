const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
    name: { type: String, index: true },
    author: { type: String },
    content: { type: String },
    date: { type: Date, index: true, default: new Date() }
});

const ArticleModel = mongoose.model('Article', articleSchema);

exports = module.exports = ArticleModel;