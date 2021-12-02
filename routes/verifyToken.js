const jwt = require("jsonwebtoken");

// this is a middleware to control is token exist or not
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader) {
        // format the token to make it valid
        const token = authHeader.split(" ")[1];

        // verify the token
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                res.status(403).json("Token is not valid !");
            }
            req.user = user;
            // next is redirecting to the route if everything is ok
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated !");
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not alowed to do that !");
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not alowed to do that !");
        }
    });
};

module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
};
