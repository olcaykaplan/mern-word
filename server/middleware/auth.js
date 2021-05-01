import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    console.log("req header: ", req);
    console.log("req header authorization: ", req.token);

    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "u__x&+t8Nu87/VG}#pepPj");
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (e) {
    console.log("error", e.message);
  }
};

export default auth;
