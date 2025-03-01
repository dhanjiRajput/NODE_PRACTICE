const {Router}=require("express");
const userRoutes=Router();
const userController=require("../Controllers/user_controller");

userRoutes.get("/signup",userController.signupPage);
userRoutes.get("/login",userController.loginPage);
userRoutes.post("/signup",userController.signup);
userRoutes.post("/login",userController.login);
userRoutes.get("/logout",userController.logout);

module.exports=userRoutes;