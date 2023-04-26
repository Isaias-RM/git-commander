import { Octokit } from "@octokit/core";
// require('dotenv').config()
/// <reference path="./models/BranchSettings.d.ts"/>
import * as OctokitTypes from "@octokit/types";
import { createAppAuth } from "@octokit/auth-app";
// import { request } from "@octokit/request";
import config from "../config/appConfig";
import * as API from "../models/API";
import logEvents from "./logs/logEvents"






export class gitCommander {
  mock: boolean;
  // auth: Object;
  octokit: Octokit;

  constructor(mock: boolean) {
    this.mock = mock;
    // this.auth = createAppAuth({
    //   appId: config.APP_ID,
    //   privateKey: config.PRIVATE_KEY,
    //   clientId: config.CLIENT_ID,
    //   clientSecret: config.CLIENT_SECRET,
    //   installationId: config.INSTALLATION_ID,
    // });
    this.octokit = new Octokit({
      authStrategy: createAppAuth,
      auth: {
        appId: config.APP_ID,
        privateKey: config.PRIVATE_KEY,
        installationId: config.INSTALLATION_ID,
      },
    });
  }

  public async getBranchProtection(branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try {
      const response = await this.octokit.request(
        "GET /repos/{owner}/{repo}/branches/{branch}/protection",
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response;
    } catch (err: any) {
        console.log(err);
        return err;
    }
  }

  public async updateBranchProtection (branch: API.Header, rules: any): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "PUT /repos/{owner}/{repo}/branches/{branch}/protection", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      console.log(`Branch Protection Rules have been set.`,'\n',`Visit "https://github.com/${branch.owner}/${branch.repo}/settings/branches" to confirm success.`);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async deleteBranchProtection (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      console.log(`Branch Protection Rules have been deleted.`,'\n',`Visit "https://github.com/${branch.owner}/${branch.repo}/settings/branches" to confirm success.`);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async getAdminBranchProtection (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async setAdminBranchProtection (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async deleteAdminBranchProtection (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async getPullRequestReviewProtection (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async updatePullRequestReviewProtection (branch: API.Header, rules: any): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async deletePullRequestReviewProtection (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async getCommitSignatureProtection (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async createCommitSignatureProtection (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async deleteCommitSignatureProtection (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async getStatusChecksProtection (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async updateStatusCheckProtection (branch: API.Header, rules:API.RequiredStatusChecks): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async removeStatusCheckProtection (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async getStatusCheckContexts (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async addStatusCheckContexts (branch: API.Header, rules:API.RequiredStatusChecks): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async setStatusCheckContexts (branch: API.Header, rules:API.RequiredStatusChecks): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async removeStatusCheckContexts (branch: API.Header, rules:API.RequiredStatusChecks): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async getAccessRestrictions (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async deleteAccessRestrictions (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async getAppsWithAccessToTheProtectedBranch (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async addAppAccessRestrictions (branch: API.Header, rules:API.Restrictions): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async setAppAccessRestrictions (branch: API.Header, rules:API.Restrictions): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async removeAppAccessRestrictions (branch: API.Header, rules:API.Restrictions): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async getTeamsWithAccessToTheProtectedBranch (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async addTeamAccessRestrictions (branch: API.Header, rules:API.Restrictions): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async setTeamAccessRestrictions (branch: API.Header, rules:API.Restrictions): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async removeTeamAccessRestrictions (branch: API.Header, rules:API.Restrictions): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async getUsersWithAccessToTheProtectedBranch (branch: API.Header): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const response = await this.octokit.request(
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", 
        Object.assign(branch)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async addUserAccessRestrictions (branch: API.Header, rules:API.Restrictions): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async setUserAccessRestrictions (branch: API.Header, rules:API.Restrictions): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

  public async removeUserAccessRestrictions (branch: API.Header, rules:API.Restrictions): Promise<OctokitTypes.OctokitResponse<object, any> | undefined> {
    try{
      const API = {...branch, ...rules}
      const response = await this.octokit.request(
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", 
        Object.assign(API)
      );
      logEvents(response, "event-log.json")
      console.log(response);
      return response
    } catch (err) {
      console.log(err);
    }
  }

}


