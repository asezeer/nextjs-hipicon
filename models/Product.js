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
    deliveryDayText: {
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
      type: [
        {
          text: { type: String },
          text: { type: String },
          text: { type: String },
        },
      ],
    },
    productStoryText: {
      type: String,
      required: true,
    },
    stockCount: {
      type: [Number],
      required: true,
    },
    stockCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
