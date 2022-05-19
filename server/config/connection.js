const mongoose = require("mongoose");
// connect mongoose to googlebooks database
mongoose.connect(process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
