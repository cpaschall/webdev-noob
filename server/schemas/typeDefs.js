const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category {
        _id: ID
        name: String
        topics: [Topic]
    }

    type Topic {
        _id: ID
        name: String
        subtopics: [Subtopic]
    }

    type Subtopic {
        _id: ID
        name: String
        info: String
        image: String
        link: String
    }

    type Query {
        categories: [Category]
        topics: [Topic]
        subtopics: [Subtopic]
        category(_id: String): Category
        topic(_id: String): Topic
        subtopic(_id: String): Subtopic
    }

    type Mutation {
        createCategory(name: String):Category
        addTopic(categoryId: ID, name: String): Category
        addSubtopic(topicId: ID, name: String, info: String, image: String, link: String): Topic
    }
`

// updateCategory():Category
// updateTopic(): Topic
// updateSubtopic(): Topic
// removeCategory():Category
// removeTopic(): Topic
// removeSubtopic(): Topic

module.exports = typeDefs;