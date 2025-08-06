import jwt from "jsonwebtoken";

import "dotenv/config";
import authRepository from "../repositories/authRepository.js";

export async function authMiddleware(req, res, next) {
  const { authorization } = req.headers;

  function returnError() {
    return res.status(401).send({ message: "invalid token" });
  }

  if (!authorization) return returnError();

  const parts = authorization.split(" ");
  if (parts.length !== 2) return returnError();

  const [schema, token] = parts;
  if (!/^Bearer$/i.test(schema)) return returnError();

  jwt.verify(token, process.env.SECRET, async (err, decode) => {
    if (err || !decode) return returnError();

    const user = await authRepository.findById(decode.id);
    if (!user) return returnError();

    res.locals.user = user;
    next();
  });
}
