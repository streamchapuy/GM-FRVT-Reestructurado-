import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY || "default_key";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401).json({error: 'Token no proporcionado'});

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403).json({error: 'Token inválido'});
    
    req.user = user;
    next();
  });
};
export default authenticateToken;
