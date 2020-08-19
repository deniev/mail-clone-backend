import { Schema, model } from "mongoose";

const schema = new Schema({
    subject: String,
    folder: {
        type: Schema.ObjectId,
        ref: "Folder"
    },
    receiver: {
        type: Schema.ObjectId,
        ref: "User"
    },
    sender: {
        type: Schema.ObjectId,
        ref: "User"
    }
});

schema.statics = {
    delete(id) {

    },

    getByUser(user) {},

    checkPermissions(user, ) {

    }
};


export default model("Message", schema);