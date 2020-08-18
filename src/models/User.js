import { Schema, model } from "mongoose";

const schema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    folders: [{
        type: Schema.ObjectId,
        ref: "Folder"
    }]
});

schema.statics = {
    hasPermissions() {

    }
};

export default model("User", schema);