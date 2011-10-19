var app = require("express").createServer();
app.get("/", function(req, res) {
    res.send("Here is another response");
});
app.listen(3000);