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

schema.statics = {
    selectedFields() {
        return { name: 1, _id: 0 }
    }
}

export default model("Folder", schema);