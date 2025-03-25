
import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    img: {
        type: String,
    },
    role: {
        type: [String],
        default: ['USER'],
        enum: ['ADMIN', 'USER']
    },
    address: {
        type: String,
    },
    age: {
        type: Date,
    },
    passport: {
        type: String,
    },
    phone: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
    },


});

userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret, options) {
        delete ret._id;
        delete ret.password;
    },
})



export const UserModel = mongoose.model('User', userSchema);
