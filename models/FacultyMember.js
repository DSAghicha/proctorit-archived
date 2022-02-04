const mongoose = require('mongoose')

const FacultyMemberScheme = new mongoose.Schema({
    memberName: {
        type: String,
        required: [true, 'Member Name Invalid!'],
        trim: true
    },
    memberOf: {
        type: mongoose.Types.ObjectId,
        required: [true, 'Member must be part of an Institute.']
    },
    memberEmail: {
        type: String,
        required: true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email invalid'],
        trim: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})