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

schema.statics = {
    has({ message, user }) {
        return this.countDocuments({ message, user })
    }
};

export default model("Permission", schema);