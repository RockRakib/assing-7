"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const testimonialSchema = new mongoose_1.Schema({
    donorName: { type: String, required: true },
    content: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)('testimonial', testimonialSchema);
