
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken =async (req, res, next) => {
    let token = req.headers['authorization'];
     token=token
   

    if (token) {
        // Split the token string to get only the token part
        
        console.log("Split token:",token);
      
        jwt.verify(token, process.env.secertkey, function (err, decoded) {
            if (err) {
                return false;
            }
            // If the token is valid, proceed to the next middleware or route handler
         
        });
        next()
    } else {
        // If no token is provided
        return false;
    }
 //token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHRzIjpbeyJfaWQiOiI2NWExMDdiZmY2NzhkOGMyYjFjZjdmNDAiLCJmbmFtZSI6IkdvdmluIiwiZW1haWwiOiJnb3ZpbkBnbW9sLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEt6d2Rrd05UaGV4Q2Fad3ZNQklmVk9XSmxrUlY1NGhsMTFtN0xIUVBJNnluRzYzeWlRN2UyIiwiaW1hZ2VwYXRoIjoiXzE3MDUwNTIwOTUxMjUtMjc3ODE1ODY4X2ljZS1jdWJlLnBuZyIsIl9fdiI6MH1dLCJpYXQiOjE3MDU0ODQzMTIsImV4cCI6MTcwNTQ5MTUxMn0.DWblzgV8amCkqiVphBVx0QKNyWPm1PpMEzsSWeA1eZM";
 
};

module.exports = verifyToken;
