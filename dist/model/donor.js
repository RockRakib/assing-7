"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const donorSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    username: { type: String, unique: true },
    donationAmount: { type: Number, required: true },
});
exports.default = (0, mongoose_1.model)('Donor', donorSchema);
