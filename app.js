const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes');
require('./models/user')
const PORT = 3000;

const app = express();

app.use(express.json())
app.use(require('./routes/api/auth'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/photo_app_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})
