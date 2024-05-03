const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid'); // Import UUID

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Model
const bookingSchema = new mongoose.Schema({
    userid: { type: String, required: true, default: () => uuidv4() }, // Default to UUID
    date: { type: Date, required: true },
    time: { type: String, required: true },
    destination: { type: String, required: true }
});
const Booking = mongoose.model('Booking', bookingSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/spacetravel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile('C:/Users/PARNA MISHRA/OneDrive/Documents/Desktop/space/back/book.html');
});

// POST endpoint to handle form submission
app.post('/book', (req, res) => {
    const newBooking = new Booking({
        date: req.body.date,
        time: req.body.time,
        destination: req.body.destination
    });

    newBooking.save()
    .then(() => res.send(`Booking successful! Your user ID is ${newBooking.userid}`))
    .catch(err => res.status(400).send('Error saving booking: ' + err));
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
