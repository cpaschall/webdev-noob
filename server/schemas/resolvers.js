const { Category, Topic } = require('../models');

const resolvers = {
    Query: {
        categories: async () => {
            return Category.find()
        },

        topics: async () => {
            return Topic.find()
        },
        // subtopics: async () => {
        //     return Topic.find().populate("subtopics")
        // }
    },
    Mutation: {
        createCategory: async (parent, { name }) => {
            return Category.creaate({ name });
        },
        addTopic: async (parent, { categoryId, name }) => {
            return Category.findOneAndUpdate(
                { _id: categoryId },
                { 
                    $addToSet: { topics: { name }},
                },
            );
        },
        addSubtopic: async (parent, { topicId, name, info, image, link }) => {
            return Topic.findOneAndUpdate(
                { _id: topicId },
                {
                    $addToSet: { subtopics: { name, info, image, link }},
                },
            );
        },
    },
};

module.exports = resolvers;