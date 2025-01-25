const {Router}=require('express');
const { handleGenerateNewShortUrl, redirectToLongUrl, getVisitHistory } = require('../Controllers/url_controller');

const urlRouter=Router();

urlRouter.post("/",handleGenerateNewShortUrl);
urlRouter.get("/:shortId",redirectToLongUrl);
urlRouter.get("/analytics/:shortId",getVisitHistory);

module.exports=urlRouter;