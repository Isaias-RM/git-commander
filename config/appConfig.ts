//import dotenv from "dotenv";
require("dotenv").config();

const config = {
  // GITHUB_TOKEN: process.env.GITHUB_TOKEN! || "",
  PRIVATE_KEY: process.env.PRIVATE_KEY! || "",
  INSTALLATION_ID: process.env.INSTALLATION_ID || "",
  // CLIENT_ID: process.env.CLIENT_ID || "",
  // CLIENT_SECRET: process.env.CLIENT_SECRET || "",
  APP_ID: process.env.APP_ID || "",
};

export default config;
