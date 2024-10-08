import mongoose from "mongoose";

const conversationSchema = mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'User',
        },
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        },
    ],
},{timestamps: true});

const Conversation = mongoose.model("Conversations", conversationSchema)

export default Conversation;