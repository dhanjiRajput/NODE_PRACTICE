const {Router}=require('express');
const { handleGenerateNewShortUrl, redirectToLongUrl, getVisitHistory, getHomePage} = require('../Controllers/url_controller');

const urlRouter=Router();

urlRouter.get("/", getHomePage);
urlRouter.post("/",handleGenerateNewShortUrl);
urlRouter.get("/:shortId",redirectToLongUrl);
urlRouter.get("/analytics/:shortId",getVisitHistory);

module.exports=urlRouter;