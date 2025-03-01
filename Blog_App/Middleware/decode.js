const jwt = require("jsonwebtoken");
require("dotenv").config();


const decodeToken = async (req, res, next) => {

  const publicRoutes = ["/user/signup", "/user/login"];

  if (publicRoutes.includes(req.url)) {
    return next();
  }

  let {token} = req.cookies;
  
  if (token) {
    try {     
      
      let decode = await jwt.verify(token, process.env.key);
      req.user = decode;
      next();
    } catch (error) {
      return res.status(403).send({ message: error.message });
    }
  } else {
    res.redirect("http://localhost:8090/api/v1/user/login");
  }
};

module.exports = decodeToken;