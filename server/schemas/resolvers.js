const { Category } = require('../models/Category');

const resolvers = {
    Query: {
        categories: async () => {
            return Category.find()
        },

        topics: async () => {
            return Category.find().populate("topics")
        },
        // subtopics: async () => {
        //     return Topic.find().populate("subtopics")
        // }
    },
    Mutation: {
        createCategory: async (parent, { name }) => {
            return Category.creaate({ name });
        },
        addTopic: async (parent, { categoryId, topicName }) => {
            return Category.findOneAndUpdate(
                { _id: categoryId },
                { 
                    $addToSet: { topics: { topicName }},
                },
            );
        },
        addSubtopic: async (parent, { topicId, subtopicName, info, image, link }) => {
            return Category.findOneAndUpdate(
                { _id: topicId },
                {
                    $addToSet: { subtopics: { subtopicName, info, image, link }},
                },
            );
        },
    },
};

module.exports = resolvers;