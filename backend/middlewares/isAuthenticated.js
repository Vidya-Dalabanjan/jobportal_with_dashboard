import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({
        message: "user not Authenticated",
        SUCCESS: false,
      });
    }
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        SUCCESS: false,
      });
    }
    req.id = decode.userId;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
      SUCCESS: false,
    });
  }
};
export default isAuthenticated;
