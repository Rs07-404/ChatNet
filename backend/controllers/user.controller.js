import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";


export const getContacts = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const conversations = await Conversation.find({
            participants: loggedInUserId
        }).populate('participants', '-password');
        const userSet = new Set();

        conversations.forEach(Conversation => {
            Conversation.participants.forEach(participant => {
                if(participant._id.toString() !== loggedInUserId.toString()){
                    userSet.add(participant._id.toString());
                }
            })
        });

        const userIds = Array.from(userSet);
        const filteredUsers = await User.find({_id: { $in: userIds }}).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getusers controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}