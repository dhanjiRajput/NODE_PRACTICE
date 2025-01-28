const {Router}=require('express');
const { handleGenerateNewShortUrl, redirectToLongUrl, getVisitHistory, getHomePage } = require('../Controllers/url_controller');
const { isLogin } = require('../Middleware/isLogin');

const urlRouter=Router();

urlRouter.get("/",isLogin, getHomePage);
urlRouter.post("/",handleGenerateNewShortUrl);
urlRouter.get("/:shortId",redirectToLongUrl);
urlRouter.get("/analytics/:shortId",getVisitHistory);

module.exports=urlRouter;