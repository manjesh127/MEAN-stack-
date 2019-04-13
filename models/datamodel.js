const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp')

const MeanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },

});
MeanSchema.plugin(timestamp, {
  createdAt: "created_at",
  updatedAt: "updated_at"
});

module.exports = mongoose.model("Mean", MeanSchema);
