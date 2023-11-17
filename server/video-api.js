var express=require("express");
var cors=require("cors");
var mongoClient=require("mongodb").MongoClient;
var constr="mongodb://127.0.0.1:27017";

var app=express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.get("/admin",(req,res)=>{
    mongoClient.connect(constr).then((clientObj)=>{
        var database=clientObj.db("reactbd");
        database.collection("admin").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        })
    })
})

app.get("/users",(req,res)=>{
    mongoClient.connect(constr).then((clientObj)=>{
        var database=clientObj.db("reactbd");
        database.collection("users").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        })
    })
})


app.get("/newpassrequest",(req,res)=>{
    mongoClient.connect(constr).then((clientObj)=>{
        var database=clientObj.db("reactbd");
        database.collection("userpassrequest").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        })
    })
})

app.post("/registeruser",(req,res)=>{
    var user={
        UserId:parseInt(req.body.UserId),
        UserName:req.body.UserName,
        Password:req.body.Password,
        Email:req.body.Email,
        Mobile:req.body.Mobile
    };
    mongoClient.connect(constr).then(clientObj=>{
        var database=clientObj.db("reactbd");
        database.collection("users").insertOne(user).then(()=>{
            console.log(`user inserted successfully`);
            res.redirect("/users");
            res.end();
        })
    })
});

app.post("/userpassrequest",(req,res)=>{
    var passrequest = {
        name:req.body.name,
        DateOofBirth:req.body.DateOfBirth,
        Age:req.body.Age,
        Mobile_number:req.body.Mobile_number,
        gender:req.body.gender,
        aadhar_no:req.body.aadhar_no,
        email:req.body.email,
        city:req.body.city,    
    };
    mongoClient.connect(constr).then(clientObj=>{
        var database=clientObj.db("reactbd");
        database.collection("userpassrequest").insertOne(passrequest).then(()=>{
            console.log("form submitted successfully");
            res.end();
        })
    })
});


app.listen(5000);
console.log(`server started: port 5000`);



// app.get("/videos",(req,res)=>{
//     mongoClient.connect(constr).then((clientObj)=>{
//         var database=clientObj.db("reactbd");
//         database.collection("videos").find({}).toArray().then(documents=>{
//             res.send(documents);
//             res.end();
//         })
//     })
// })

// app.get("/videos/:id", (req, res)=>{
//     var id = parseInt(req.params.id);
//     mongoClient.connect(constr).then((clientObj)=>{
//        var database = clientObj.db("reactbd");
//        database.collection("videos").find({VideoId:id}).toArray().then(documents=>{
//            res.send(documents);
//            res.end();
//        })
//    })
// });


// app.post("/addcategory",(req,res)=>{
//     var category={
//         CategoryId:parseInt(req.body.CategoryId),
//         CategoryName:req.body.CategoryName
//     };
//     mongoClient.connect(constr).then(clientObj=>{
//         var database=clientObj.db("reactbd");
//         database.collection("categories").insertOne(category).then(()=>{
//             console.log(`category inserted successfully`);
//             res.end();
//         })
//     })
// });

// app.get("/categories",(req,res)=>{
//     mongoClient.connect(constr).then((clientObj)=>{
//         var database=clientObj.db("reactbd");
//         database.collection("categories").find({}).toArray().then(documents=>{
//             res.send(documents);
//             res.end();
//         })
//     })
// })
