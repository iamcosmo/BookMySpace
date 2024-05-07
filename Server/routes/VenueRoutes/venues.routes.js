import express from "express";

import {
  registerNewVenue,
  GetOneVenueDetails,
  editExistingVenue,
} from "../../controllers/venuesController/VenueController.js";
const venuesRouter = express.Router();

venuesRouter.post("/registerVenue", registerNewVenue);
venuesRouter.get("/getVenue/:id", GetOneVenueDetails);
venuesRouter.put("/editExistingVenue/:id", editExistingVenue);


export default venuesRouter;
