var notes = require("../db/db.json");
var guid = require('uuid/v4'); // I dont understand the "now deprecated error msg here
var util = require('util');
var fs = require('fs');
const writeFile = util.promisify(fs.writeFileSync);

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(notes);
    });

    app.post("/api/notes", function (req, res) {            
        notes.push(req.body);
        req.body.id = guid();
        writeFile(__dirname + "/../db/db.json", JSON.stringify(notes));
        res.json(notes);
    });

    app.delete("/api/notes/:id", function (req, res) {
        let id = req.params.id;
        notes = notes.filter((obj) => obj.id !== id);
        writeFile(__dirname + "/../db/db.json", JSON.stringify(notes));
        res.json(notes);
      });
};
