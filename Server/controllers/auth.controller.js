import bcrypt from "bcrypt";
import UserDataModel from "../models/user.model.js";

export const signUpUser = async (req, res) => {
  try {
    const { firstname,lastname, email, contact, usertype,password } = req.body;
    const existingUser = await UserDataModel.findOne({ email });
    if (!existingUser) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserDataModel.create({
            name: {
              firstname,
              lastname,
            },
            email,
            contact,
            usertype,
            password: hashedPassword,
          });

          return res.status(200).json({user,message:"Successfully submitted"})

    }
    else{
        return res.status(400).json({ message: 'Email already exists' });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ message: "Invalid Id" });
    } else {
      res.status(500).json(error);
    }
  }
};

