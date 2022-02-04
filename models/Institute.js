const mongoose = require('mongoose')

const instituteSchema = new mongoose.Schema({
    instituteName: {
        type: String,
        required: [true, 'Please enter Institute Name!'],
        trim: true
    },
    instituteAdmin: {
        type: mongoose.Types.ObjectId,
        ref: 'FacultyMembers',
        required: [true, 'Please enter Institute Admin Name'],
        trim: true
    },
    instituteAdminDesignation: {
        type: String,
        required: [true, 'Please enter Institute Admin Designation'],
        trim: true
    },
    facultyMembers: [{
        type: mongoose.Types.ObjectId,
        ref: 'FacultyMembers'
    }]
}, {
    timestamps: true
})

export default mongoose.model('Institute', instituteSchema)
