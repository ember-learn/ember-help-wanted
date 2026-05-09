import Component from '@glimmer/component';
import { LinkTo } from '@ember/routing';
import { hash } from '@ember/helper';

export default class FilterMenuComponent extends Component {
  filterNames = [
    'adopted-ember-addons',
    'ember-a11y',
    'ember-cli',
    'ember-data',
    'ember-engines',
    'ember-learn',
    'ember-template-lint',
    'emberjs',
    'empress',
    'typed-ember',
    'RFCs',
  ];

  <template>
    <div class="filter-menu-list mb-2">
      {{#each this.filterNames as |filterName|}}
        <LinkTo
          class="es-button link"
          data-test-link={{filterName}}
          @model={{filterName}}
          @query={{hash query=""}}
          @route="issues"
        >
          {{filterName}}
        </LinkTo>
      {{/each}}
    </div>
  </template>
}
