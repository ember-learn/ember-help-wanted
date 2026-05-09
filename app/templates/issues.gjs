import pageTitle from 'ember-page-title/helpers/page-title';
import FilterMenu from '../components/filter-menu.gjs';
import { on } from '@ember/modifier';
import EsButton from 'ember-styleguide/components/es-button';
import removeEmojiShortcode from '../helpers/remove-emoji-shortcode.js';
import { fn } from '@ember/helper';
import EsCard from 'ember-styleguide/components/es-card';
import timeFromNow from '../helpers/time-from-now.js';
import GithubLabel from '../components/github-label.gjs';

<template>
  {{pageTitle "Issues"}}
  <section class="container header-container">
    <FilterMenu />

    <form {{on "submit" @controller.filterIssues}}>
      <label for="search-input-issues" class="search-label">
        Keyword
      </label>

      <input
        id="search-input-issues"
        data-test-field="Keyword"
        class="search-input"
        type="text"
        value={{@controller.keyword}}
        {{on "input" @controller.updateKeyword}}
      />

      <EsButton
        data-test-button="Search"
        class="search-button"
        @label="Search"
        @type="submit"
      />

      {{#if @controller.label}}
        <div class="label-filter-container">
          <p>
            In addition, look for issues with the label
            <span class="label-filter">{{removeEmojiShortcode
                @controller.label
              }}</span>.
          </p>

          <EsButton
            aria-label={{@controller.clearMessage}}
            data-test-button="Clear Filter"
            class="clear-label-filter-button"
            title={{@controller.clearMessage}}
            @label="Clear Filter"
            @onClicked={{fn (mut @controller.label) null}}
            @secondary={{true}}
            @type="button"
          />
        </div>
      {{/if}}
    </form>

    <p class="text-sm num-results-found">
      {{@model.length}}
      issues displayed
    </p>
  </section>

  <div class="container body-container">
    <h2 class="text-xl pb-3">
      Issues that could use your help!
    </h2>

    <div class="row">
      <ul class="list-unstyled layout">
        {{#each @controller.githubIssuesSorted as |githubIssue|}}
          <EsCard data-test-github-issue={{githubIssue.number}} class="card">
            <header>
              <h3 class="text-lg">
                <a
                  data-test-field="Title"
                  href={{githubIssue.htmlUrl}}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {{githubIssue.title}}
                </a>
              </h3>

              <div class="github-issue-number-container">
                <p data-test-field="Issue Number" class="github-issue-number">
                  #{{githubIssue.number}}
                </p>
              </div>
            </header>

            <section>
              <p>
                in
                <a
                  data-test-field="Repository Name"
                  href={{githubIssue.repositoryHtml}}
                  class="github-repository-name"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {{githubIssue.repositoryName}}
                </a>, updated
                <b>{{timeFromNow githubIssue.updatedAt}}</b>
              </p>

              {{#each githubIssue.labels as |label|}}
                <button
                  data-test-button={{label.name}}
                  class="github-label-button"
                  type="button"
                  {{on "click" (fn (mut @controller.label) label.name)}}
                >
                  <GithubLabel
                    @backgroundColor={{label.color}}
                    @label={{label.name}}
                  />
                </button>
              {{/each}}
            </section>
          </EsCard>
        {{/each}}
      </ul>
    </div>
  </div>
</template>
