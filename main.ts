import { gitCommander } from "./lib/git-commander";
// import { config } from "./config/appConfig"
const mock = true;
const app = new gitCommander(mock);
import { branch } from "./models/my-branches/branches"
import { myRules } from "./models/protected-branches/rules"
// import { readYaml } from "./lib/yamlReader";
// const dinner: BranchSettings.EnforceAdmins["url"] = "lol";

// const branchProtectionRulesYaml: any | undefined = readYaml(
//   "./lib/templates/branchProtectionRules.yaml"
// );

// const test = async () => {
//   console.log(await app.setBranchProtectionRules());
  
// }

// test()


async function main() {
  try {
    // const checkAction = await app.getBranchProtectionRules(
    //   "soulsuitestudios",
    //   "test",
    //   "main"
    // );
    await app.getBranchProtection(branch.test)
    // await app.updateBranchProtection(branch.yourBranchName, myRules.customRules)
    // await app.updatePullRequestReviewProtection(branch.yourBranchName, myRules.updatePullRequestReviewProtection)
  } catch (err) {
    console.log(err);
  }
}

main();
