import os from "os";
import fs from "fs";
const env = `GITHUB_TOKEN=
PRIVATE_KEY=
INSTALLATION_ID=
CLIENT_ID=
CLIENT_SECRET=
APP_ID=`;
const bootstrap = () => {
  fs.writeFile(".env-test", env, function (err) {
    if (err) {
      console.log("error creating bootstrap file", err);
    }
  });
};

bootstrap();
