const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const ReviewSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    productId: { type: String, required: true },
    rating: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: null },
    updatedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

ReviewSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Review", ReviewSchema);
