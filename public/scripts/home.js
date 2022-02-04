// //''''''''''''''''''''''''''''''''''''''''''
// <form action="/uploadProfilePicture" enctype="multipart/form-data" method="POST">
//
//       <input type="file" name="mypic" required/> <br>
//       <button type="submit">submit button </button>
//   </form>


// // var uploads = multer({ dest: "Upload_folder_name" })
// // If you do not want to use diskStorage then uncomment it
//
// const multer = require("multer");
// const path = require("path");
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//
//         // Uploads is the Upload_folder_name
//         cb(null, "./public/images")
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + "-" + Date.now()+".jpg")
//     }
// })
//
// // Define the maximum size for uploading
// // picture i.e. 1 MB. it is optional
// const maxSize = 1 * 1000 * 1000;
//
// var upload = multer({
//     storage: storage,
//     limits: { fileSize: maxSize },
//     fileFilter: function (req, file, cb){
//
//         // Set the filetypes, it is optional
//         var filetypes = /jpeg|jpg|png|webp/;
//         var mimetype = filetypes.test(file.mimetype);
//
//         var extname = filetypes.test(path.extname(
//             file.originalname).toLowerCase());
//
//         if (mimetype && extname) {
//             return cb(null, true);
//         }
//
//         cb("Error: File uploads only supports the "
//             + "following filetypes - " + filetypes);
//     }
//
// // mypic is the name of file attribute
// }).single("mypic");
//
// app.get("/",function(req,res){
//     res.render("Signup");
// })
//
// app.post("/uploadProfilePicture",function (req, res, next) {
//
//     // Error MiddleWare for multer file uploads, so if any
//     // error occurs, the image would not be uploaded!
//     upload(req,res,function(err) {
//
//         if(err) {
//
//             // ERROR occured (here it can be occured due
//             // to uploading image of size greater than
//             // 1MB or uploading different file type)
//             res.send(err)
//         }
//         else {
//
//             // SUCCESS, image successfully uploaded
//             res.redirect('/')
//         }
//     })
// })
//
