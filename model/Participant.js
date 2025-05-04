import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
    participantName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['confirmed', 'declined', 'unsure'],
        default: 'confirmed',
        required: true
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    }
}, { timestamps: true });

participantSchema.index({ eventId: 1 })

const Participant = mongoose.model('Participant', participantSchema);

export default Participant;
