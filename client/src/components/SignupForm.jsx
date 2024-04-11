import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Select,
  Checkbox,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  useTheme,
} from "@mui/material";
import "../styles/authorization.css";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/system";

import { Axios } from "axios";
//import ThemedFormControl from "./ThemedFormControl";

const FormOutline = styled("div")({
  marginBottom: "1rem",
  "& label": {
    color: "#81084D",
  },
});

const CheckboxWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "1rem",
});

const GlassCard = styled("div")({
  backgroundColor: "hsla(0, 0%, 100%, 0.9)",
  backdropFilter: "saturate(200%) blur(25px)",
});

const SignupForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [userType, setUserType] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleUserTypeChange = (event) => {
    // Define handleUserTypeChange function
    setUserType(event.target.value);
  };

  const [subtype, setSubtype] = useState(0);

  useEffect(() => {
    if (props.formLabel === "Sign Up") setSubtype(1);
    else setSubtype(0);
  }, [props.formLabel]);

  return (
    <section
      style={{ background: "linear-gradient(to bottom, #0a2e51, #9d50bb)" }}
      className="overflow-hidden"
    >
      <Container maxWidth="lg" className="px-4 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <Typography
              variant="h3"
              component="h1"
              className="my-5 fw-bold ls-tight"
              style={{ color: "#E7E2FD" }}
            >
              The best offer <br />
              <span style={{ color: "#B0B0B0" }}>for your business</span>
            </Typography>
            <Typography
              variant="body1"
              className="mb-4 opacity-70"
              style={{ color: "#B0B0B0" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </Typography>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <GlassCard className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form>
                  <div className="row">
                    {subtype === 1 && (
                      <>
                        <div className="col-md-6 mb-4">
                          <FormOutline>
                            <TextField
                              label="First name"
                              variant="outlined"
                              fullWidth
                              value={firstName}
                              onChange={handleFirstNameChange}
                              color="secondary"
                              InputProps={{ style: { color: "#000000" } }}
                            />
                          </FormOutline>
                        </div>
                        <div className="col-md-6 mb-4">
                          <FormOutline>
                            <TextField
                              label="Last name"
                              variant="outlined"
                              fullWidth
                              value={lastName}
                              color="secondary"
                              onChange={handleLastNameChange}
                              InputProps={{ style: { color: "#000000" } }}
                            />
                          </FormOutline>
                        </div>
                      </>
                    )}
                  </div>

                  <FormOutline>
                    <TextField
                      id="form3Example3"
                      label="Email address"
                      variant="outlined"
                      fullWidth
                      value={email}
                      color="secondary"
                      onChange={handleEmailChange}
                      InputProps={{ style: { color: "#000000" } }}
                    />
                  </FormOutline>
                  <FormOutline>
                    <TextField
                      id="form3Example4"
                      label="Contact"
                      variant="outlined"
                      fullWidth
                      type="number"
                      value={contact}
                      color="secondary"
                      onChange={handleContactChange}
                      InputProps={{ style: { color: "#000000" } }}
                    />
                  </FormOutline>

                  <FormControl sx={{ m: 0, minWidth: 380 }}>
                    {/* <FormControl style={formControlStyle} {...props}> */}
                    {/* <ThemedFormControl> */}
                    <InputLabel
                      id="demo-simple-select-autowidth-label"
                      sx={{ color: "#81084D" }}
                      color="secondary"
                    >
                      User Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="user-type-select"
                      value={userType}
                      onChange={handleUserTypeChange}
                      label="User Type"
                      color="secondary"
                      sx={{
                        width: "100%",
                        color: "#000000",
                        borderColor: "#81084D",
                        outlineColor: "#81084D",
                        backgroundColor: "inherit",
                      }}
                      variant="outlined"
                    >
                      <MenuItem
                        sx={{ color: "#000000", backgroundColor: "#e7e2fd" }}
                        value="standard"
                      >
                        Standard
                      </MenuItem>
                      <MenuItem
                        sx={{ color: "#000000", backgroundColor: "#e7e2fd" }}
                        value="premium"
                      >
                        Premium
                      </MenuItem>
                      <MenuItem
                        sx={{ color: "#000000", backgroundColor: "#e7e2fd" }}
                        value="admin"
                      >
                        Admin
                      </MenuItem>
                    </Select>
                    {/* </ThemedFormControl> */}
                  </FormControl>

                  <FormOutline>
                    <TextField
                      id="form3Example4"
                      label="Password"
                      variant="outlined"
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      value={password}
                      color="secondary"
                      onChange={handlePasswordChange}
                      InputProps={{
                        endAdornment: (
                          <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? (
                              <VisibilityOffIcon color="secondary" />
                            ) : (
                              <VisibilityIcon color="secondary" />
                            )}
                          </IconButton>
                        ),
                        style: { color: "#000000" },
                      }}
                    />
                  </FormOutline>

                  <CheckboxWrapper>
                    <Checkbox
                      id="form2Example33"
                      checked={isChecked}
                      color="secondary"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="form2Example33"
                      style={{ color: "#3d3c3f" }}
                    >
                      Subscribe to our newsletter
                    </label>
                  </CheckboxWrapper>

                  <Button
                    id="submitButton"
                    variant="contained"
                    sx={{ backgroundColor: "#81084D" }}
                    fullWidth
                  >
                    {props.formLabel}
                  </Button>

                  <div className="text-center">
                    <Typography variant="body1">or sign up with:</Typography>
                    <IconButton
                      color="secondary"
                      className="btn-floating mx-2 px-4"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </IconButton>
                    <IconButton
                      className="btn-floating mx-2 px-4 "
                      color="secondary"
                    >
                      <i className="fab fa-google"></i>
                    </IconButton>
                    <IconButton
                      className="btn-floating mx-2 px-4"
                      color="secondary"
                    >
                      <i className="fab fa-twitter"></i>
                    </IconButton>
                    <IconButton
                      className="btn-floating mx-2 px-4"
                      color="secondary"
                    >
                      <i className="fab fa-github"></i>
                    </IconButton>
                  </div>
                </form>
              </div>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignupForm;
