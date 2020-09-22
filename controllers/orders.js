const fs = require("fs");

const getHandler = (req, res, next) => {    
    res.render("order/order");
}
const postHandler = (req, res, next) => {
    console.log(req.body);
    fs.writeFile("./data/note.txt", JSON.stringify(req.body), (err) => {
        if (err) {
            console.log(err);
        }
    })
    res.redirect("/extract");
}

module.exports = {
    getHandler, postHandler
}