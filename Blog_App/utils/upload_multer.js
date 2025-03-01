const multer=require('multer');
const path=require('path');

const upload=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.resolve(`./uploads/`));
    },
    filename:function(req,file,cb){
        const fileName=`${Date.now()}-${file.originalname}`;
        cb(null,fileName);
    },
});

const uploadImage=multer({storage:upload});

module.exports=uploadImage;