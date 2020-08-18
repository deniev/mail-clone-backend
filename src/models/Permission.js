import { Schema, model } from "mongoose";

const schema = new Schema({
    message: {
        type: Schema.ObjectId,
        ref: "Message"
    },
    user: {
        type: Schema.ObjectId,
        ref: "User"
    }
});

export default model("Permission", schema);