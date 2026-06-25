import jwt from "jsonwebtoken";
import { usuario } from "../data/users.js";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "2h";

export function login(req, res) {
  const { username, password } = req.body;

  
  if (!username || !password) {
    return res.status(400).json({
      error: "Debe enviar username y password",
    });
  }

  
  if (username !== usuario.username || password !== usuario.password) {
    return res.status(401).json({
      error: "Usuario o contraseña incorrectos",
    });
  }

  
  const token = jwt.sign(
    { id: usuario.id, username: usuario.username },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  return res.status(200).json({
    token,
    user: {
      id: usuario.id,
      username: usuario.username,
    },
  });
}