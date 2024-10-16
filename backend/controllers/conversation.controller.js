import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";

export const createConversation = async (req, res) => {
    try{
        const { username } = req.params;
        const senderId = req.user._id;
        const user = await User.findOne({ username }).select("-password");
        if(user){
            let conversation = await Conversation.findOne({
                participants: { $all: [senderId, user._id] }
            });
            if(!conversation){
                let newConversation = await Conversation.create({
                    participants: [senderId, user._id],
                })
                if(!newConversation){
                    throw new Error("Failed to create Conversation");
                }
                await newConversation.save();
                res.status(201).json({
                    _id: newConversation._id,
                    userId: user._id,
                })
            }else{
                res.status(400).json({ error: "Conversation already exists" })
            }
        }else{
            res.status(404).json({ error: "User not found" })
        }
    } catch(error){
        console.log("Error in create Conversation Controller: ",error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}