const handler = (req, res, next) => {
    res.status(404).render("error/error") 
}

module.exports = {
    handler
}