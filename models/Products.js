import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    id: {
      type: [Number],
      required: true,
      maxlength: 60,
    },
    name: {
      type: String,
      required: true,
      maxlength: 300,
    },
    brand: {
      type: String,
      required: true,
      maxlength: 300,
    },
    displayPrices: {
      type: [Number],
      required: true,
    },
    displayPricesText: {
      type: String,
      required: true,
      maxlength: 300,
    },
    imageURLs: {
      type: String,
      required: true,
      maxlength: 300,
    },
    hoverImageURLs: {
      type: String,
      required: true,
      maxlength: 300,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
