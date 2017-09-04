//models/pr.js
const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

const PRSchema = new Schema({
  gh_id     : Number,
  url       : String,
  state     : String,
  title     : String,
  author    : Schema.Types.Mixed,
  body      : String,
  created_at: Date,
  updated_at: Date,
  closed_at : Date,
  merged_at : Date,
  marged    : Boolean,
  commits   : Number,
  links     : []
});

module.exports = mongoose.model('PR', PRSchema);
