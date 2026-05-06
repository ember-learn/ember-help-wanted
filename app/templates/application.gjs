import { pageTitle } from 'ember-page-title';
import EsHeader from 'ember-styleguide/components/es-header';

<template>
  <EsHeader />
  {{pageTitle "EmberHelpWanted"}}

    <h1>Hi there</h1>
  {{outlet}}
</template>
