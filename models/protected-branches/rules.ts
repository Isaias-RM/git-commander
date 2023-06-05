export const myRules = {
  customRules:{
    required_status_checks: {
      strict: false,
      contexts: [
        'continuous-integration/travis-ci'
      ]
    },
    enforce_admins: true,
    required_pull_request_reviews: {
      dismiss_stale_reviews: true,
      require_code_owner_reviews: true,
      required_approving_review_count: 0,
      require_last_push_approval: true,
    },
    restrictions: null,
    required_linear_history: true,
    allow_force_pushes: true,
    allow_deletions: true,
    block_creations: true,
    required_conversation_resolution: true,
    lock_branch: false,
    allow_fork_syncing: true
  },

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
  }
}