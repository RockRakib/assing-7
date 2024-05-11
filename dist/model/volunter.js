"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const opportunitySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true, // Convert email to lowercase for consistency
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
    },
});
exports.default = (0, mongoose_1.model)('Opportunity', opportunitySchema);
