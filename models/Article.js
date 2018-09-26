console.log('running article.js');
// Require mongoose
var mongoose = require("mongoose");
var Note = require("./Note");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create the Article schema object
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  notes: [{
     type: Schema.Types.ObjectId,
     ref: "Note"
  }]
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;

