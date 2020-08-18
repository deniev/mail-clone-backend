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
    getByUser(user) {
        const conditions = [
            { user },
            { system: false },
        ];

        return this.find().or(conditions).select(this.selectedFields());
    },

    getByType(type) {
        return this.findOne({ type });
    },

    selectedFields() {
        return { name: 1 }
    }
}

export default model("Folder", schema);