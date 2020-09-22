const fs = require("fs");
const path = require('path');

const handler = (req, res, next) => {
    res.render("index");
};
const display = (req, res, next) => {
    fs.readFile(path.resolve(__dirname, "../data/collections.txt"), "utf8", (err, data) => {
        data = JSON.parse(data);                        
        res.render("index/display", {items: data, title: "Title"});
    })
}
const details = (req, res, next) => {
    fs.readFile(path.resolve(__dirname, "../data/collections.txt"), "utf8", (err, data) => {
        data = JSON.parse(data);                        
        const item = data.find(item => item.id == req.params.id);        
        res.render("index/details", {item: item, title: "Title"});
    })
}

const detailsName = (req, res, next) => {
    fs.readFile(path.resolve(__dirname, "../data/collections.txt"), "utf8", (err, data) => {
        data = JSON.parse(data);                        
        const item = data.find(item => item.id == req.params.id);        
        res.render("index/name", {name: item.name, title: "Title", id: item.id});
    })
}
module.exports = {
    handler, 
    display,
    details,
    detailsName
}