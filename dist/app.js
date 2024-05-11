"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./app/config"));
const comment_1 = __importDefault(require("./model/comment"));
// import donor from './model/donor';
const supplySchema_1 = __importDefault(require("./model/supplySchema"));
const volunter_1 = __importDefault(require("./model/volunter"));
const testimonial_1 = __importDefault(require("./testimonial"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// app.post('/', async (req, res) => {
//   console.log(req.body);
//   const newLeaderBoard = new Leaderboard(req.body);
//   //   if (!content) {
//   //     return res.status(400).send("Please provide a comment");
//   //   }
//   try {
//     await newLeaderBoard.save();
//     res.json({ success: true });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error saving comment');
//   }
// });
app.post('/community', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const newComment = new comment_1.default(req.body);
    //   if (!content) {
    //     return res.status(400).send("Please provide a comment");
    //   }
    try {
        yield newComment.save();
        res.json({ success: true });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Error saving comment');
    }
}));
app.post('/dashboard/create-testimonial', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const newTestimonial = new testimonial_1.default(req.body);
    //   if (!content) {
    //     return res.status(400).send("Please provide a comment");
    //   }
    try {
        yield newTestimonial.save();
        res.json({ success: true });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Error saving comment');
    }
}));
app.post('/volunteer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const newVolunter = new volunter_1.default(req.body);
    //   if (!content) {
    //     return res.status(400).send("Please provide a comment");
    //   }
    try {
        yield newVolunter.save();
        res.json({ success: true });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Error saving comment');
    }
}));
// create supply
app.post('/dashboard/create-supply', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, title, amount, description } = req.body;
    // Validation (can be extended for all fields)
    if (!category || !title || !amount || !description) {
        return res.status(400).send('Please fill in all required fields');
    }
    // File upload handling (replace with your logic for image processing/storage)
    // let imagePath;
    // if (req.file) {
    //   imagePath = path.join(__dirname, 'uploads', `${uuidv4()}${path.extname(req.file.originalname)}`);
    //   await req.file.mv(imagePath); // Move uploaded file
    // }
    try {
        const newSupply = new supplySchema_1.default({
            category,
            title,
            amount: parseInt(amount),
            description,
            // ...(imagePath && { image: imagePath }), // Include image path if uploaded
        });
        yield newSupply.save();
        res.json({ success: true });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Error creating supply post');
    }
}));
// all Get routes
app.get('/dashboard/supplies', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const supplies = yield supplySchema_1.default.find();
        res.json(supplies); // Replace with your logic for table rendering on frontend
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving supply posts');
    }
}));
// leader board
app.get('/leaderboard', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const supplies = yield supplySchema_1.default.find();
        res.json(supplies); // Replace with your logic for table rendering on frontend
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving supply posts');
    }
}));
// get comment
app.get('/community', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const supplies = yield comment_1.default.find();
        res.json(supplies); // Replace with your logic for table rendering on frontend
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving supply posts');
    }
}));
// get testimonial
app.get('/community', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const supplies = yield testimonial_1.default.find();
        res.json(supplies); // Replace with your logic for table rendering on frontend
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving supply posts');
    }
}));
// get Volunteer
app.get('/volunteer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const supplies = yield volunter_1.default.find();
        res.json(supplies); // Replace with your logic for table rendering on frontend
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving supply posts');
    }
}));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(config_1.default.database_url);
            app.listen(config_1.default.port, () => {
                console.log(`Example app listening on port ${config_1.default.port}`);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
main();
exports.default = app;
