const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, postAffirmation, getQuote, deleteAffirmation, updateAffirmation } = require('./controller.js')

/// Routes
app.get("/api/compliment", getCompliment);
app.get(`/api/fortune`, getFortune)
app.get(`/api/quotes`, getQuote)
app.post(`/api/affirmation`, postAffirmation)
app.delete(`/api/affirmation/:id`, deleteAffirmation)
app.put(`/api/affirmation/:id`, updateAffirmation)




//Server Start
app.listen(4000, () => console.log("Server running on 4000"));
