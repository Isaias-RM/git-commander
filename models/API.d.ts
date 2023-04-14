//  The Header object is used in API calls to specify the owner of the repo, the repo name, and which branch the call will effect.
//  Question marks denote that the fields are optional.

export interface Header {
  accept: string //Setting to application/vnd.github+json is recommended.
	owner: string; //The account owner of the repository. The name is not case sensitive.
  repo: string; //The name of the repository. The name is not case sensitive.
  branch?: string; //The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use the GraphQL API.
}

//  BRANCHES API
//  This is the list of API commands that can be used from the Branches "https://docs.github.com/en/rest/branches/branches?apiVersion=2022-11-28" category
export class BranchesAPI {
  list_branches:ListBranches;
  get_branch: GetBranch;
  rename_branch: RenameBranch;
  sync_fork: SyncFork;
  merge_branch: MergeBranch;
}

export interface ListBranches extends Header {
  protected?: boolean; //Setting to true returns only protected branches. When set to false, only unprotected branches are returned. Omitting this parameter returns all branches.
  per_page?: number; //The number of results per page (max 100). Default: 30
  page?: number; //Page number of the results to fetch. Default: 1
}

export interface GetBranch extends Header {
}

export interface RenameBranch extends Header {
  new_name: string; //The new name of the branch.
}

//Sync a branch of a forked repository to keep it up-to-date with the upstream repository.
//branch?: The name of the branch which should be updated to match upstream.
export interface SyncFork extends Header { 
}

export interface MergeBranch extends Header {
  base: string; //The name of the base branch that the head will be merged into.
  head: string; //The head to merge. This can be a branch name or a commit SHA1.
  commit_message?: string;
}

//   PROTECTED BRANCHES API

export interface BranchProtectionRules {
  required_status_checks: RequiredStatusChecks;
  enforce_admins: boolean;
  required_pull_request_reviews: RequiredPullRequestReviews;
  restrictions: Restrictions;
  required_linear_history: RequiredLinearHistory;
  allow_force_pushes: AllowForcePushes;
  allow_deletions: AllowDeletions;
  required_conversation_resolution: RequiredConversationResolution;
  lock_branch: LockBranch;
  allow_fork_syncing: AllowForkSyncing;
}

export interface RequiredStatusChecks extends Header {
  url: string;
  strict: boolean;
  contexts: string[];
  checks?: checks | undefined;
}

export interface checks {
  context: string,
  app_id?: number | undefined,
}

export interface EnforceAdmins {
  url: string;
  enabled: boolean;
}

export interface RequiredPullRequestReviews {
  url: string;
  dismissal_restrictions: DismissalRestrictions;
  dismiss_stale_reviews: boolean;
  require_code_owner_reviews: boolean;
  required_approving_review_count: number;
  require_last_push_approval: boolean;
  bypass_pull_request_allowences: DismissalRestrictions;
}

export interface Restrictions {
  url: string;
  users: string;
  teams: string;
  apps: string;
  headers: string;
  users: User2[];
  teams: Team2[];
  apps: App2[];
}

export interface RequiredLinearHistory {
  enabled: boolean;
}

export interface AllowForcePushes {
  enabled: boolean;
}

export interface AllowDeletions {
  enabled: boolean;
}

export interface RequiredConversationResolution {
  enabled: boolean;
}

export interface LockBranch {
  enabled: boolean;
}

export interface AllowForkSyncing {
  enabled: boolean;
}

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Team {
  id: number;
  node_id: string;
  url: string;
  html_url: string;
  name: string;
  slug: string;
  description: string;
  privacy: string;
  permission: string;
  members_url: string;
  repositories_url: string;
  parent?: any;
}

export interface Owner {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
}

export interface Permissions {
  metadata: string;
  contents: string;
  issues: string;
  single_file: string;
}

export interface App {
  id: number;
  slug: string;
  node_id: string;
  owner: Owner;
  name: string;
  description: string;
  external_url: string;
  html_url: string;
  created_at: Date;
  updated_at: Date;
  permissions: Permissions;
  events: string[];
}

export interface DismissalRestrictions {
  url: string;
  users_url: string;
  teams_url: string;
  users: User[];
  teams: Team[];
  apps: App[];
}

export interface DismissalRestrictions {
  url: string;
  users_url: string;
  teams_url: string;
  users: User[];
  teams: Team[];
  apps: App[];
}



export interface User2 {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Team2 {
  id: number;
  node_id: string;
  url: string;
  html_url: string;
  name: string;
  slug: string;
  description: string;
  privacy: string;
  permission: string;
  members_url: string;
  repositories_url: string;
  parent?: any;
}

export interface Owner2 {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
}

export interface Permissions2 {
  metadata: string;
  contents: string;
  issues: string;
  single_file: string;
}

export interface App2 {
  id: number;
  slug: string;
  node_id: string;
  owner: Owner2;
  name: string;
  description: string;
  external_url: string;
  html_url: string;
  created_at: Date;
  updated_at: Date;
  permissions: Permissions2;
  events: string[];
}

//Get a repository installation for the authenticated app

export interface getRepositoryInstallation {
    id: number,
    account: {
      login: string,
      id: number,
      node_id: string,
      avatar_url: string,
      gravatar_id: string,
      url: string,
      html_url: string,
      followers_url: string,
      following_url: string,
      gists_url: string,
      starred_url: string,
      subscriptions_url: string,
      organizations_url: string,
      repos_url: string,
      events_url: string,
      received_events_url: string,
      type: string,
      site_admin: boolean
    },
    repository_selection: string,
    access_tokens_url: string,
    repositories_url: string,
    html_url: string,
    app_id: number,
    target_id: number,
    target_type: string,
    permissions: {
      checks: string,
      metadata: string,
      contents: string
    },
    events: [
      string,
      string
    ],
    created_at: string,
    updated_at: string,
    single_file_name: string,
    has_multiple_single_files: boolean,
    single_file_paths: [
      string,
      string
    ],
    app_slug: string,
    suspended_at: string,
    suspended_by: string
}

export function Header(Header: Header, Header1: any): ({ owner: string; repo: string; } & import("@octokit/types").RequestParameters) | undefined {
  throw new Error("Function not implemented.");
}
