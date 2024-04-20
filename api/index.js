const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;
const fs = require('fs');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(
    PORT,
    () => console.log("Node is running!")
)

app.get("/dictionaries", (req, res) => {
   res.json(JSON.parse(fs.readFileSync("../i18n/public/locales/vi/translation.json", "utf8")));
});

app.post("/update-dictionaries", (req, res) => {
    const {key, val} = req.body;
    const dictionaries = JSON.parse(fs.readFileSync("../i18n/public/locales/vi/translation.json", "utf8"));
    if(key) {
        dictionaries.content[key] = val;
    }
    console.log("a", key, val);
    fs.writeFileSync("../i18n/public/locales/vi/translation.json", JSON.stringify( dictionaries), {
        encoding: "utf8"
      });

 })