const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    topics: [{
        type: Schema.Types.ObjectId,
        ref: 'Topic'
    }]
});

const Category = model('Category', categorySchema);

module.exports = Category;