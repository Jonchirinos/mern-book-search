const mongoose = require("mongoose");
// connect mongoose to googlebooks database
mongoose.connect("mongodb+srv://atlas:admin@cluster0.z4bd9.mongodb.net/googlebooks?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
