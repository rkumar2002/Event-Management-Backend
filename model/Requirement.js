import mongoose from "mongoose";

const requirementSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    costing: {
        type: Number,
        required: true,
        default: 0
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    } 
});

requirementSchema.index({ eventId: 1 });

const Requirement = mongoose.model('Requirement', requirementSchema);

export default Requirement;