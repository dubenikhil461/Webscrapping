import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    text: { type: String },
    author: { type: String },
    tags: { type: [String], default: [] },
  },
  { timestamps: true },
);

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
