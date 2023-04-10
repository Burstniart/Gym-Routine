// Data Structure
const { Schema, model } = require('mongoose');

// Structure Definition
const FitDataSchema = new Schema({
    split: { type: String, required: false },
    routine: {
    exercise: { type: String, required: false },
    sets:     { type: String, required: false },
    reps:     { type: String, required: false },
    muscle:   { group:
		{ type: String, required: false },
                target:
		{ type: String, required: false }
              },
    restTime: { type: String, required: false },
	
    },
    creationDate: {type: Date, default: Date.now}
});

module.exports = model('FitData', FitDataSchema);
