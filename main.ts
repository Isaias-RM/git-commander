import { gitCommander } from "./lib/git-commander";
// import { config } from "./config/appConfig"
const mock = true;
const app = new gitCommander(mock);
import { branch } from "./models/my-branches/branches"
import { myRules } from "./models/protected-branches/rules"


async function main() {
  try {
    await app.getBranchProtection(branch.test)
    await app.updateBranchProtection(branch.test, myRules.customRules)
    await app.updatePullRequestReviewProtection(branch.test, myRules.updatePullRequestReviewProtection)
  } catch (err) {
    console.log(err);
  }
}

main();
