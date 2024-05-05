import express from "express";

import { registerNewVenue } from "../controllers/venuesController/VenueController.js";
const venuesRouter = express.Router();

venuesRouter.post("/registerVenue", registerNewVenue);
venuesRouter.post("/getVenue",);


export default venuesRouter;
