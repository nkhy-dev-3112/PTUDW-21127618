const controller = {}

controller.show = (req, res) => {
    let { emotions } = require("../data")
    res.render("task1", { emotions })
}

module.exports = controller;