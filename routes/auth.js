// import-
const express = require("express");
const { signUp, signIn } = require("../controller/auth");
const authRoutes = express.Router();

// router-
authRoutes.post("/signup", signUp);
authRoutes.post("/signin", signIn);

// export-
module.exports = authRoutes;