import { Schema, model } from "mongoose";

const schema = new Schema({
    subject: String
});

schema.statics = {
    getByUser(user) {}
};


export default model("Message", schema);