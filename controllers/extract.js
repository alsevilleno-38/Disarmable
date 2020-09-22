const fs = require("fs");

const users = [
    {
        id: 140,
        name: "anonymous",
        age: 60,
        title: "developer"
    },
    {
        id: 458,
        name: "bethesda",
        age: 85,
        title: "game studio"
    },
    {
        id: 734,
        name: "card game",
        age: 104,
        title: "probability"
    },
    {
        id: 982,
        name: "dororium",
        age: 145,
        title: "computer"
    }
]

const handler = (req, res, next) => {
    fs.readFile("./data/note.txt", (err, data) => {
            if (err) {
                console.log(err);
                res.render("error/error");
            }
            else {
                res.render("extract/extract", {msg: JSON.parse(data).name});
            }
        })
};

const generator = (req, res, next) => {
    fs.writeFile("./data/collections.txt", JSON.stringify(users, null, 4), (err) => {
        if (err) {
            console.log(err);
        }
    })
    res.render("extract/success");
};

module.exports = {
    handler, generator
}