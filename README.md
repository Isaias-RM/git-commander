# notes
    Using API commands on private repos requires a GitHub Pro subscription

# What does it do?
    git-overseer is a nodeJS app that makes controlling several repos with GitHub's REST API easy.

    The idea is to write your instructions in .ts files and reuse them as presets in other situations.
    Instead of having to adjust them manually every time.

# How do I use it?
    1. Enter your credentials in the .env file
    2. Create a header to tell GitHub who you are and which repo and branch you are adjusting
    3. Create your API call using our templates in ./models/protected-branches/templates.ts
    4. In the main.ts file, within the main() function, assemble a header and API call 
    5. In the terminal enter "npm run main"

# Available commands
    getBranchProtection
    updateBranchProtection
    deleteBranchProtection

    getAdminBranchProtection
    setAdminBranchProtection
    deleteAdminBranchProtection

    getPullRequestReviewProtection
    updatePullRequestReviewProtection
    deletePullRequestReviewProtection
    getCommitSignatureProtection
    createCommitSignatureProtection
    deleteCommitSignatureProtection

    getStatusChecksProtection
    updateStatusChecksProtection
    removeStatusChecksProtection

    getStatusChecksContexts
    addStatusChecksContexts
    setStatusCheckContexts
    removeStatusCheckContexts

    getAccessRestrictions
    deleteAccessRestrictions

    getAppsWithAccessToTheProtectedBranch
    addAppAccessRestrictions
    setAppAccessRestrictions
    removeAppAccessRestrictions

    getTeamsWithAccessToTheProtectedBranch
    addTeamAccessRestrictions
    setTeamAccessRestrictions
    removeTeamAccessRestrictions

    getUsersWithAccessToTheProtectedBranch
    addUserAccessRestrictions
    setUserAccessRestrictions
    removeUserAccessRestrictions
