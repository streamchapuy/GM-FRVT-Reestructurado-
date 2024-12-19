import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config.js';

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            console.error('Error de verificación del JWT:', err);
            return res.status(403).json({ error: 'Token inválido' });
        }

        req.user = user;
        req.token = token;
        req.userId = user.userId;
        next();
    });
};

export default auth;
