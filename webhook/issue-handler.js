/* jshint node: true */
'use strict';

module.exports = {

  watching: {
    'emberjs/ember.js': {
      labels: [
        'Needs Help',
        'Good for New Contributors'
      ]
    }
  },

  issueLabeled: function (event) {

    if (this.hasOneOfDesiredLabels(event.payload)) {

      var issueHash = this.constructIssueHash(event.payload);

      return this.addIssueToDatastore(issueHash);
    }
  },

  issueUnlabeled: function (event) {

    if (this.removedOneOfDesiredLabels(event.payload)) {

      var issue = this.constructIssueHash(event.payload);

      // remove the issue from the Help Wanted system
      return this.removeIssueFromDatastore(issue);
    }
  },

  issueClosed: function (event) {

    if (this.hasOneOfDesiredLabels(event.payload)) {

      // remove the issue from the Help Wanted system

      this.removeIssueFromDatastore(repoName, issueId);

    }
  },

  issueReopened: function (event) {

    // make sure the re-opened issue has one of our key labels, then
    if (this.hasOneOfDesiredLabels(event.payload)) {

      // add the issue to Firebase again
    }
  },

  /**
   *
   * @param internalIssueHash
   * @returns {boolean}
     */
  addIssueToDatastore: function (internalIssueHash) {

    // send our issue hash to Firebase (not the original Github issue)

    return true;
  },

  /**
   *
   * @param internalIssueHash
   * @returns {boolean}
     */
  removeIssueFromDatastore: function (internalIssueHash) {

    // clean things up on Firebase
    return true;
  },

  /**
   * Whether our issue has one of the desired labels for this repo
   *
   * @param payload
   * @returns {boolean}
   */
  hasOneOfDesiredLabels: function (payload) {

    var watchedRepo = this.watching[payload.repository.full_name];

    if( typeof watchedRepo !== 'undefined' ) {

      var result = payload.issue.labels.filter(function(label) {
        return watchedRepo.labels.indexOf(label.name) !== -1;
      });

      return ( result.length );
    }

    return false;
  },

  /**
   * Whether our issue has one of our watched labels
   *
   * @param payload
   * @returns {boolean}
     */
  removedOneOfDesiredLabels: function(payload) {
    return true;
  },

  constructIssueHash: function (payload) {

    return {
      id: payload.issue.number,
      url: payload.issue.html_url,
      title: payload.issue.title,
      labels: payload.issue.labels,
      repo: payload.repository.full_name,
      repoUrl: payload.repository.html_url
    };

  }
};
