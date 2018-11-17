Testing

# Ember-Help-Wanted

This app is designed to help new folks to the Ember ecosystem find issues to work on
that most need help.  The goal would be for this to work well for project nights for 
meetups, conferences and anyone else interested in hacking on various projects while
also helping the main Ember repositories get much needed help with issues.

The goal is for this app to interface with https://github.com/ember-learn/ember-help-wanted-server as the backend.

## Big picture aim of this app

Our goal with this app is to do two major things in the Ember community.

One: create an efficient way of exposing major projects in the Ember ecosystem
to a wide audience of volunteers (of varying levels of expertise) to get major
blockers addressed by crowd-sourcing the effort. Currently, project maintainers
will write up epic issues (see [the Glimmer2 help issue](https://github.com/emberjs/ember.js/issues/13127)
or the [Ember website responsive issue](https://github.com/emberjs/website/issues/2519)
for examples of issues that have had real success) but after the initial tweet
and announcement, these issues tend to disappear off people's radar.

Two: provide a curated pool of issues (from a variety of major Ember projects)
that folks either new to Ember (or new to contributing to Ember) can use as a
diving-in point to getting to know people in the Ember ecosystem. Oftentimes people
will be interested in contributing, but are a bit daunted by browsing the various
repos in Ember to try to find issues that they can actually help with. Although
a "good for new contributors" or "help wanted" label is often applied, there may
not be enough information in those issues to allow newcomers to really dive in.

The goal would be to use this tool to encourage maintainers to write up issues
in deeper detail so that those issues would be added to the Help Wanted board
and made generally available. This might also increase the number of regular
contributors to various projects, which in turn could help the entire community
accomplish ambitious things faster.

## Big picture technically

To accomplish the above, we aim to have [a Node backend](https://github.com/ember-learn/ember-help-wanted-server)
that receives Github webhook notifications about issues across a number of Ember
projects.  The backend will filter those issues and store them to act as our
"pool" of potential issues that potential contributors can work on.

Those issues will then surface in this Ember app, where they can be searched
and filtered in various ways as each potential contributor desires.  We may
add some level of curation to the issues (whether that is needed is still to be
determined) or in other ways editorialize as issues show up in the app.

## Future goals

Once the initial MVP is off the ground, we also wonder about using this tool
as a means for meetup organizers (and contributor workshops at various Ember
conferences) to sort through issues and pick subsets for their meetings. For example,
if a meetup group wants to help its members learn more about Ember Data,
a meetup organizer could go through the existing pool of issues and cherry-pick
5-10 issues for folks to focus on for that evening that would help with that.

Or this tool could be used as a foundation for running the Contributors Workshop
that occurs each year at EmberConf. :grinning:

Long-term, we also wonder about tweeting out major new issues or in other ways
exposing key pieces of info to the greater Ember world (we could potentially use it
as a way of posting "maintainer wanted" messages as well).

## More immediately
But first, we have to build this tool. Which is where we hope (o reader), you
come in :grinning:.  Currently, we organize our issues using milestones
and are [close to being done with the MVP](https://github.com/ember-learn/ember-help-wanted/issues?q=is%3Aopen+is%3Aissue+milestone%3AMVP) of this tool.  After that, we'd like
to [work through v1](https://github.com/ember-learn/ember-help-wanted/issues?q=is%3Aopen+is%3Aissue+milestone%3Av1)

If you're interested, please speak up on issues or contact us on the Ember Community
Discord `#st-help-wanted-board` channel.  Look forward to working on these things with you
further!

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-help-wanted`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

By default we have an api-proxy that uses the production API when developing
locally, so you don't need to run the ember-help-wanted-server when editing the
Ember frontend. If you are developing the backend and want your local Ember
frontend to hit your local server then you can start the server like this:

`LOCAL_API=true ember s`

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
