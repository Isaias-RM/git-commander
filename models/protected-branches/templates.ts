export const templates = {

  //https://docs.github.com/en/rest/branches/branch-protection#update-branch-protection
  updateBranchProtection:{
      required_status_checks: {
        strict: true,
        contexts: [
          'continuous-integration/travis-ci'
        ]
      },
      enforce_admins: true,
      required_pull_request_reviews: {
        dismissal_restrictions: {
          users: [
            'octocat'
          ],
          teams: [
            'justice-league'
          ]
        },
        dismiss_stale_reviews: true,
        require_code_owner_reviews: true,
        required_approving_review_count: 2,
        require_last_push_approval: true,
        bypass_pull_request_allowances: {
          users: [
            'octocat'
          ],
          teams: [
            'justice-league'
          ]
        }
      },
      restrictions: {
        users: [
          'octocat'
        ],
        teams: [
          'justice-league'
        ],
        apps: [
          'super-ci'
        ]
      },
      required_linear_history: true,
      allow_force_pushes: true,
      allow_deletions: true,
      block_creations: true,
      required_conversation_resolution: true,
      lock_branch: true,
      allow_fork_syncing: true,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      },
  },

  //https://docs.github.com/en/rest/branches/branch-protection#update-pull-request-review-protection
  updatePullRequestReviewProtection:{
      dismissal_restrictions: {
        users: [
          'octocat'
        ],
        teams: [
          'justice-league'
        ],
        apps: [
          'octoapp'
        ]
      },
      bypass_pull_request_allowances: {
        users: [
          'octocat'
        ],
        teams: [
          'justice-league'
        ],
        apps: [
          'octoapp'
        ]
      },
      dismiss_stale_reviews: true,
      require_code_owner_reviews: true,
      required_approving_review_count: 2,
      require_last_push_approval: true,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
  },

  //https://docs.github.com/en/rest/branches/branch-protection#update-status-check-protection
  updateStatusChecksProtection:{
      strict: true,
      contexts: [
          'continuous-integration/travis-ci'
      ],
      headers: {
          'X-GitHub-Api-Version': '2022-11-288697'
      }
  },

  //https://docs.github.com/en/rest/branches/branch-protection#add-status-check-contexts
  addStatusCheckContexts:{
    contexts: [
      'continuous-integration/travis-ci',
      'continuous-integration/jenkins'
    ],
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  },

  //https://docs.github.com/en/rest/branches/branch-protection#set-status-check-contexts
  setStatusCheckContexts:{
    contexts: [
      'continuous-integration/travis-ci'
    ],
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  },

  //https://docs.github.com/en/rest/branches/branch-protection#remove-status-check-contexts
  removeStatusCheckContexts:{
    contexts: [
      'continuous-integration/jenkins'
    ],
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  },
  
  //https://docs.github.com/en/rest/branches/branch-protection#add-app-access-restrictions
  addAppAccessRestrictions:{
    apps: [
      'octoapp'
    ],
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  },

  //https://docs.github.com/en/rest/branches/branch-protection#set-app-access-restrictions
  setAppAccessRestrictions:{
    apps: [
      'octoapp'
    ],
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  },

  //https://docs.github.com/en/rest/branches/branch-protection#remove-app-access-restrictions
  removeAppAccessRestrictions:{
    apps: [
      'octoapp'
    ],
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  },

  //https://docs.github.com/en/rest/branches/branch-protection?apiVersion=2022-11-28#add-team-access-restrictions
  addTeamAccessRestrictions:{
    teams: [
      'justice-league'
    ],
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  },

  //https://docs.github.com/en/rest/branches/branch-protection?apiVersion=2022-11-28#set-team-access-restrictions
  setTeamAccessRestrictions:{
    teams: [
      'justice-league'
    ],
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  },

  //https://docs.github.com/en/rest/branches/branch-protection?apiVersion=2022-11-28#remove-team-access-restrictions
  removeTeamAccessRestrictions:{
    teams: [
      'justice-league'
    ],
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  },

  //https://docs.github.com/en/rest/branches/branch-protection?apiVersion=2022-11-28#add-user-access-restrictions
  addUserAccessRestrictions:{
    users: [
      'octocat'
    ],
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  },

  //https://docs.github.com/en/rest/branches/branch-protection?apiVersion=2022-11-28#set-user-access-restrictions
  setUserAccessRestrictions:{
    users: [
      'octocat'
    ],
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  },

  //https://docs.github.com/en/rest/branches/branch-protection?apiVersion=2022-11-28#remove-user-access-restrictions
  removeUserAccessRestrictions:{
    users: [
      'octocat'
    ],
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  },

}