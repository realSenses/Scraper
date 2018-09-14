console.log('running note.js');
// Require mongoose
var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create the Note Schema Object
var NoteSchema = new Schema({
    body: {
        type: String
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    }
});

// Create the Note model using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;
