const mongoose = require("mongoose");
// connect mongoose to googlebooks database
mongoose.connect("mysql://zo934j50nnjdsmo5:q57dg0sv354ekrbi@ohunm00fjsjs1uzy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/zbzw0gjb30chw5rw", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
