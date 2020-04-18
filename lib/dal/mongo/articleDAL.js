const Article = require('mongoose').model('Article');

exports.upsert = (name, author, content) => {
    return Article.findOneAndUpdate(
      { name: name}, 
      { name: name, author: author, content: content },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
    .exec()
};

exports.get = (name) => {
    return Article.find({ name: name})
    .exec()
};

exports.getMostRecent = (num=1) => {   
    return Article.find({})
    .sort('-date')
    .limit(num)
    .exec()
};

exports.delete = (_id) => {   
    return Article.deleteOne({ _id: _id})
    .exec()
};