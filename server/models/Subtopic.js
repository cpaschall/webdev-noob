const { Schema, model } = require('mongoose');

const subtopicSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    info: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
    // subtopics: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Subtopic'
    // }]
});

const Subtopic = model('Subtopic', subtopicSchema);

module.exports = Subtopic;