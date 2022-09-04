const { Schema, model } = require('mongoose');

const topicSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    subtopics: [
        {
        // type: Schema.Types.ObjectId,
        // ref: 'Subtopic'
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
            },
        },
    ],
});

const Topic = model('Topic', topicSchema);

module.exports = Topic;