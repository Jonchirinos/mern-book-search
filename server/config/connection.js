const mongoose = require("mongoose");
// connect mongoose to googlebooks database
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
