import { Schema, model } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "inbox",
        enum: ["inbox", "sent", "spam", "drafts", "trash"]
    },
    system: {
        type: Boolean,
        default: false
    }
});

export default model("Folder", schema);