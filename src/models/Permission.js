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
        this.aggregate([
            { $match: { message, user } },
            {
                $lookup: {
                    from: "Message",
                    localField: "message",
                    foreignField: "_id",
                    as: "message"
                }
            }
        ]).exec((err, data) => {
            if (err) {
                return Promise.reject(false);
            }

            return Promise.resolve(!!data);
        })
    }
};

export default model("Permission", schema);