import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";
// dotenv.config()
export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      console.log("Email doesnt match");
      return res.status(400).json({ message: "Invalid credentials." });
    }
    //res.status(400).send({error: err.details});
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      console.log("password is not correct");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "u__x&+t8Nu87/VG}#pepPj",
      { expiresIn: "1h" }
    );
    console.log("existingUser", existingUser, "token", token);
    res.status(200).json({ result: existingUser, token });
  } catch (e) {
    console.log("something happened", e);
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(203)
        .json({ message: "This Email address is already exist!" });

    if (password !== confirmPassword)
      return res.status(203).json({ message: "Passwords doesn't match " });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      "u__x&+t8Nu87/VG}#pepPj",
      { expiresIn: "1h" }
    );
    console.log("signup data: ", { result, token });
    res.status(200).json({ result, token });
  } catch (e) {
    console.log("HATA ALINDI signup");
    res.status(500).json({ message: "Something went wrong" });
  }
};
