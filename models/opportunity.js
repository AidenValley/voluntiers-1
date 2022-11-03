const mongoose = require('mongoose');
const { Schema } = mongoose;

const opportunitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
    },
    location: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        
    },
    endTime: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    users: {
        type: Array,
        required: true
    },
    organizationId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Organization',
        required: true
    },
},
{ timestamps:true}
);


const Opportunity = mongoose.model('Event', opportunitySchema);

module.exports = Opportunity;