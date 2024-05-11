/* eslint-disable no-console */
import mongoose from 'mongoose';

import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import config from './app/config';

import comment from './model/comment';
// import donor from './model/donor';
import Supply from './model/supplySchema';

import volunter from './model/volunter';
import testimonial from './testimonial';
const app: Application = express();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
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
app.post('/community', async (req, res) => {
  console.log(req.body);
  const newComment = new comment(req.body);
  //   if (!content) {
  //     return res.status(400).send("Please provide a comment");
  //   }
  try {
    await newComment.save();
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving comment');
  }
});
app.post('/dashboard/create-testimonial', async (req, res) => {
  console.log(req.body);
  const newTestimonial = new testimonial(req.body);
  //   if (!content) {
  //     return res.status(400).send("Please provide a comment");
  //   }
  try {
    await newTestimonial.save();
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving comment');
  }
});
app.post('/volunteer', async (req, res) => {
  console.log(req.body);
  const newVolunter = new volunter(req.body);
  //   if (!content) {
  //     return res.status(400).send("Please provide a comment");
  //   }
  try {
    await newVolunter.save();
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving comment');
  }
});

// create supply

app.post('/dashboard/create-supply', async (req, res) => {
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
    const newSupply = new Supply({
      category,
      title,
      amount: parseInt(amount), // Ensure amount is a number
      description,
      // ...(imagePath && { image: imagePath }), // Include image path if uploaded
    });
    await newSupply.save();
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating supply post');
  }
});

// all Get routes
app.get('/dashboard/supplies', async (req, res) => {
  try {
    const supplies = await Supply.find();
    res.json(supplies); // Replace with your logic for table rendering on frontend
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving supply posts');
  }
});
// leader board
app.get('/leaderboard', async (req, res) => {
  try {
    const supplies = await Supply.find();
    res.json(supplies); // Replace with your logic for table rendering on frontend
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving supply posts');
  }
});
// get comment
app.get('/community', async (req, res) => {
  try {
    const supplies = await comment.find();
    res.json(supplies); // Replace with your logic for table rendering on frontend
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving supply posts');
  }
});
// get testimonial
app.get('/community', async (req, res) => {
  try {
    const supplies = await testimonial.find();
    res.json(supplies); // Replace with your logic for table rendering on frontend
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving supply posts');
  }
});
// get Volunteer
app.get('/volunteer', async (req, res) => {
  try {
    const supplies = await volunter.find();
    res.json(supplies); // Replace with your logic for table rendering on frontend
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving supply posts');
  }
});

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

export default app;
