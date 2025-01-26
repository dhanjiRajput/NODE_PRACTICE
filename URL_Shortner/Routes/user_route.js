const {Router}=require("express");
const { getSignupPage, userSignup, getLoginPage, userLogin } = require("../Controllers/user_controller");

const userRouter=Router();

userRouter.get("/signup",getSignupPage);
userRouter.get("/login",getLoginPage);
userRouter.post("/signup",userSignup);
userRouter.post("/login",userLogin);

module.exports =userRouter;