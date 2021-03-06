/*SON/2018-11-06 00:29 - DEVELOPMENT

This is the system's entry point.It creates
the database connection and port binding 
then initializes all the route files.

*/
//require('dotenv').config()
const mysql = require("mysql");
const express = require("express");
const app = express();
const path = require("path");
var fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/" });
var dbcredentials;
var cors = require("cors");
var port = 80;

app.use(cors());
dbcredentials = {
  host: "localhost",
  user: "mary",
  password: "31547207",
  database: "reunion",
  insecureAuth: true
};

app.use(express.static("uploads"));

var con;
app.use((req, res, next) => {
  con = mysql.createConnection(dbcredentials);
  con.on("error", err => {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.log(err);
    } else {
      //throw err;
    }
  });

  console.log("Connection established");
  next();
});



app.get("/display_image", (req, res) => {
  //res.sendFile(path.join(__dirname, "./uploads/df37ba09d301ed7e28a5ac7bdbd36a92"));
  var imageID = req.query.imageID;
  res.send('<img src="/' + imageID + '">');
});


app.post("/upload_images", upload.single("file"), function(req, res) {
  var file = __dirname + "/uploads/" + req.file.filename;
  fs.rename(req.file.path, file, function(err) {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(req.file.filename);
      console.log(req.file.filename);
    }
  });
});




/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Common Utilities*/


// great_grand_parents
app.use(require("./routes/great_grand_parents/GGGGGrParentsRoutes.js"));
app.use(require("./routes/great_grand_parents/GGGGrParentsRoutes.js"));
app.use(require("./routes/great_grand_parents/GGGrParentsRoutes.js"));
app.use(require("./routes/great_grand_parents/GGrParentsRoutes.js"));
app.use(require("./routes/great_grand_parents/GrParentsRoutes.js"));

// great_grand_parents_siblings
app.use(require("./routes/great_grand_parents_siblings/GGGGGrParentsSiblingsRoutes.js"));
app.use(require("./routes/great_grand_parents_siblings/GGGGrParentsSiblingsRoutes.js"));
app.use(require("./routes/great_grand_parents_siblings/GGGrParentsSiblingsRoutes.js"));
app.use(require("./routes/great_grand_parents_siblings/GGrParentsSiblingsRoutes.js"));
app.use(require("./routes/great_grand_parents_siblings/GrParentsSiblingsRoutes.js"));

// great_grand_parents_cousins
app.use(require("./routes/great_grand_parents_cousins/GGGGGrParentsCousinsRoutes.js"));
app.use(require("./routes/great_grand_parents_cousins/GGGGrParentsCousinsRoutes.js"));
app.use(require("./routes/great_grand_parents_cousins/GGGrParentsCousinsRoutes.js"));
app.use(require("./routes/great_grand_parents_cousins/GGrParentsCousinsRoutes.js"));
app.use(require("./routes/great_grand_parents_cousins/GrParentsCousinsRoutes.js"));

// parents
app.use(require("./routes/parents/ParentsRoutes.js"));
app.use(require("./routes/parents/ParentsSiblingsRoutes.js"));
app.use(require("./routes/parents/ParentsCousinsRoutes.js"));

// great_grand_children
app.use(require("./routes/great_grand_children/GGGGGrChildrenRoutes.js"));
app.use(require("./routes/great_grand_children/GGGGrChildrenRoutes.js"));
app.use(require("./routes/great_grand_children/GGGrChildrenRoutes.js"));
app.use(require("./routes/great_grand_children/GGrChildrenRoutes.js"));
app.use(require("./routes/great_grand_children/GrChildrenRoutes.js"));

// great_grand_children_cousins
app.use(require("./routes/great_grand_children_cousins/GGGGGrChildrenCousinsRoutes.js"));
app.use(require("./routes/great_grand_children_cousins/GGGGrChildrenCousinsRoutes.js"));
app.use(require("./routes/great_grand_children_cousins/GGGrChildrenCousinsRoutes.js"));
app.use(require("./routes/great_grand_children_cousins/GGrChildrenCousinsRoutes.js"));
app.use(require("./routes/great_grand_children_cousins/GrChildrenCousinsRoutes.js"));

// children
app.use(require("./routes/children/ChildrenRoutes.js"));
app.use(require("./routes/children/ChildrenCousinsRoutes.js"));

// siblings
app.use(require("./routes/siblings/SiblingsRoutes.js"));

// spouse
app.use(require("./routes/spouse/SpouseRoutes.js"));

// users
app.use(require("./routes/users/UsersRoutes.js"));

// gender
app.use(require("./routes/gender/GenderRoutes.js"));

// address
app.use(require("./routes/address/AddressRoutes.js"));

// cousins
app.use(require("./routes/cousins/CousinsRoutes.js"));

//contacts
app.use(require("./routes/contacts/ContactsRoutes.js"));

// funding
app.use(require("./routes/funding/ActualDeductionsRoutes.js"));
app.use(require("./routes/funding/ActualQuarterRoutes.js"));
app.use(require("./routes/funding/CashFlowRoutes.js"));
app.use(require("./routes/funding/CashFlowTypesRoutes.js"));
app.use(require("./routes/funding/ContributionReportUpdateRoutes.js"));
app.use(require("./routes/funding/DeductionTypeRoutes.js"));
app.use(require("./routes/funding/MonthsRoutes.js"));
app.use(require("./routes/funding/MonthsIterationsRoutes.js"));
app.use(require("./routes/funding/OrganizationalOverallAmountRoutes.js"));
app.use(require("./routes/funding/QuarterIterationRoutes.js"));
app.use(require("./routes/funding/UserContributionsRoutes.js"));
app.use(require("./routes/funding/UserContributionReportRoutes.js"));
app.use(require("./routes/funding/YearsRoutes.js"));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Common Utilities*/


app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});



const server = app.listen(5000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Service listening at port ${port}`);
});
