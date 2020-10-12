import Application from 'ember-help-wanted/app';
import config from 'ember-help-wanted/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
