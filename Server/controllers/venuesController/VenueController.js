
import venueModel from "./../../models/venue.model.js";
import {
  hashPassword,
  comparePassword,
  compareUserType,
} from "../../helpers/auth.helper.js";

//venueOwner add his venue in our platform 
export const registerNewVenue = async (req,res) => {
  try {
    const {
      OwnerId,
      venueName,
      description,
      AveragePrice,
      capacity,
      location,
      venuePhoto,
      venueVideo,
    } = req.body;

    const existingVenue = await venueModel.findOne({venueName});
        if (!existingVenue) {
            const newVenue = await venueModel.create({
              OwnerId,
              venueName,
              description,
              AveragePrice,
              capacity,
              location,
              venuePhoto,
              venueVideo,
            });
           return  res.status(201).json({
              success: true,
              message: "new Venue registration in our web page is successfull",
              newVenue,
            });
        } else {
            return res.status(400).json({
              success: false,
              message: "Same Venue is present ,Because Venuename already registered by this venueName",
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error in creating register a new venue in our webpage",
            error
        })
    }
}
//get one venue details
export const GetOneVenueDetails = async (req,res) => {
  try {
    const id = req.params.id;
    const Venue = await venueModel.findById(id);
        if (Venue) {
           return res.status(201).json({
             success: true,
             message: "new Venue Details Fetching  is successfull",
             Venue,
           });
        } else {
            return res.status(300).json({
              success: false,
              message: "Venue not found ,by this id",
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error in fetching Single Venue data from backend",
            error
        })
    }
}
//edit a venue by venueowner

//venueOwner add his venue in our platform 
export const editExistingVenue = async (req,res) => {
  try {
    const id = req.params.id;
    const {
      OwnerId,
      venueName,
      description,
      AveragePrice,
      capacity,
      location,
      venuePhoto,
      venueVideo,
    } = req.body;
    if (true) {
      const updatedVenue = await venueModel.findByIdAndUpdate(
        id,
        {
          $set: {
            OwnerId,
            venueName,
            description,
            AveragePrice,
            capacity,
            location,
            venuePhoto,
            venueVideo,
          },
        },
        { new: true }
      );
      return res.status(201).json({
        success: true,
        message: "new Venue registration in our web page is successfull",
        Venue,
      });
    } else {
      return res.status(300).json({
        success: false,
        message: "Venue not found ,by this id so we cant update the venue",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error in editing in  Single Venue data",
      error,
    });
  }
}


// export const signUpUser = async (req, res) => {
//   try {
//     const { firstname, lastname, email, contact, usertype, password } =
//       req.body;
//     const existingUser = await UserDataModel.findOne({ email });
//     if (!existingUser) {
//       const hashedPassword = await hashPassword(password);

//       const user = await UserDataModel.create({
//         name: {
//           firstname,
//           lastname,
//         },
//         email,
//         contact,
//         usertype,
//         password: hashedPassword,
//       });

//       const token = createToken(user._id);
//       return res.status(200).json({
//         user: {
//           firstname: user.name.firstname,
//           lastname: user.name.lastname,
//           email: user.email,
//           contact: user.contact,
//           usertype: usertype,
//         },
//         token,
//         message: "Successfully submitted",
//       });
//     } else {
//       return res.status(400).json({ message: "Email already exists" });
//     }
//   } catch (error) {
//     if (error.name === "CastError") {
//       res.status(400).json({ message: "Invalid Id" });
//     } else {
//       res.status(500).json(error);
//     }
//   }
// };

// export const logInUser = async (req, res) => {
//   try {
//     const { email, usertype, password } = req.body;
//     if (!email || !password || !usertype) {
//       return res.status(404).send({
//         sucess: false,
//         message: "All parameters are Needed!",
//       });
//     }

//     const user = await UserDataModel.findOne({ email });
//     if (!user) {
//       return res
//         .status(401)
//         .send({
//           success: false,
//           message: "User Doesn't Exists!! Please SignUP",
//         });
//     }

//     const typeMatch = await compareUserType(usertype, user.usertype);
//     if (!typeMatch) {
//       return res
//         .status(401)
//         .send({ success: false, message: "Invalid credentials" });
//     }

//     const passwordMatch = await comparePassword(password, user.password);
//     if (!passwordMatch) {
//       return res
//         .status(401)
//         .send({ success: false, message: "Invalid credentials" });
//     }

//     const token = createToken(user._id);

//     res.status(200).send({
//       success: true,
//       message: "Login Sucessful",
//       user: {
//         firstname: user.name.firstname,
//         lastname: user.name.lastname,
//         email: user.email,
//         contact: user.contact,
//         usertype: usertype,
//       },
//       token,
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).send({
//       success: false,
//       message: "Error in Login",
//       error,
//     });
//   }
// };

// export const getUserProfile = async (req, res) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     if (!token) {
//       return res.status(401).json({ message: "Token not provided" });
//     }

//     const { userId } = jwt.verify(token, process.env.JWT_SECRET);
//     if (!userId) {
//       return res.status(401).json({ message: "Invalid token" });
//     }

//     const user = await UserDataModel.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     if (error.name === "JsonWebTokenError") {
//       return res.status(401).json({ message: "Invalid token" });
//     }
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// export const logoutUser = async (req, res) => {
//   try {
//     // Clear any user-related data or tokens stored on the client-side
//     // For example, if using localStorage:
//     localStorage.removeItem("token");

//     res.status(200).json({ success: true, message: "Logout successful" });
//   } catch (error) {
//     console.error("Logout error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };
