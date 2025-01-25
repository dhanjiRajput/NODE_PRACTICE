const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: { 
        type: String, 
        required: true, 
        Unique: true 
    },
    redirectURL: { 
        type: String, 
        required: true 
    },
    visitHistory: [{ timesstamp: { type: Number } }],
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
