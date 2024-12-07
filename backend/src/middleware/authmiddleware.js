import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;


const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            console.error('Error de verificación del JWT:', err);
            return res.status(403).json({ error: 'Token inválido' });
        }

        req.user = user;
        req.token = token;
        req.userId = user.userId;

        console.log('Usuario autenticado:', req.user);
        next();
    });
};

export default authenticateToken;
