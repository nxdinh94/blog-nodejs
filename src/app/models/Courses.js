const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

const Course = new Schema({
  
  name: {type: String, require:true},
  description: {type: String, maxLength: 255},
  image: {type: String, default: ''},
  videoId: {type: String,require:true },
  level: {type: String, default: ''},
  slug: {type: String, slug: 'name', unique:true}
  }, {
  timestamps: true
});

//import plugin soft-delete
Course.plugin(mongooseDelete, { 
  overrideMethods: 'all' ,
  deletedAt:true
});
//import plugin slug
mongoose.plugin(slug);

// module.exports = mongoose.model('Course', Course);
module.exports = mongoose.model('Course',Course , 'courses');//courses: Collection name