const express = require("express");
const dbConnection = require("./config/database");
const app = express();
const PORT = 8080;
const cors = require("cors");
const studentRoutes = require("./routes/addmissionForm");
const accessoriesRoutes = require("./routes/accessories");
const authRoutes = require("./routes/auth");
const teacherRoutes = require("./routes/teachers");
const homeRoutes = require("./routes/home");

// middleware-
app.use(cors())
app.use(express.json())

// routes-
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/student", studentRoutes);
app.use("/api/v1/accessory", accessoriesRoutes);
app.use("/api/v1/teacher", teacherRoutes);
app.use("/api/v1/home", homeRoutes);

// server-
app.listen(PORT, async()=>{
    try
    {
        await dbConnection;
        console.log("Database connected successfully");
        console.log(`PORT is running on ${PORT}`);
    }
    catch(error)
    {
        console.log(`error: ${error}`);
        console.log("Database not connected");
    }
})