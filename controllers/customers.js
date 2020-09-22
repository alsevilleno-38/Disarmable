const fields = [
    {
        id: "name",
        description: "Name"
    },
    {
        id: "age",
        description: "Age"
    },
    {
        id: "contactNumber",
        description: "Contact Number"
    }
];

const getCustomers = (req, res, next) => {
    res.render("customer/index", {fields: fields});    
}

module.exports = {
    getCustomers
}