import multer from "multer";

// multer documentation
// cb as callback
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function (req, file, cb) {

        // cb(null, file.fieldname + '-' + uniqueSuffix) // use these when user upload the file and we provided unique name to it
        cb(null, file.originalname) // user provided the file take it as original name
        // console.log(file)
    }
})

export const upload = multer({ storage })