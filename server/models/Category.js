const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    topics: [
        {
            topicName: {
                type: String,
                required: true,
                unique: true
            },
            subtopics: [
                {
                    subtopicName: {
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
        }
    ]
});

const Category = model('Category', categorySchema);

module.exports = Category;