import Component from '@ember/component';
import { computed, observer } from '@ember/object';

import Table from 'ember-light-table';
import dayjs from 'dayjs';

export default Component.extend({
  table: undefined,
  enableSync: true,

  sort: 'updatedAt',
  dir: 'desc',

  sortedModel: computed.sort('issues', 'sortBy').readOnly(),
  sortBy: computed('dir', 'sort', function() {
    return [
      `${this.get('sort')}:${this.get('dir')}`,
      // always also sort by updatedAt to be "stable"
      `updatedAt:${this.get('dir')}`
    ];
  }).readOnly(),

  sortedModelChanged: observer('sortedModel.[]', function() {
    this.get('table').setRows(this.get('sortedModel'));
  }),

  columns: computed(function() {
    return [{
      label: 'Project',
      valuePath: 'project',
      cellComponent: 'cell-project'
    }, {
      label: 'Title',
      valuePath: 'title',
      cellComponent: 'cell-title'
    }, {
      label: 'Working On',
      valuePath: 'workingOn'
    }, {
      label: 'Updated At',
      valuePath: 'updatedAt',
      format: (rawValue) => dayjs(rawValue).format('MM-DD-YYYY')
    }];
  }),

  init() {
    this._super(...arguments);

    let table = new Table(this.get('columns'), this.get('sortedModel'), {
      enableSync: false
    });

    let sortColumn = table.get('allColumns').findBy('valuePath', this.get('sort'));

    // Setup initial sort column
    if (sortColumn) {
      sortColumn.set('sorted', true);
    }

    this.set('table', table);
  },

  actions: {
    onColumnClick(data) {
      const { valuePath } = data;
      const sort = this.get('sort');

      if (valuePath === sort) {
        this.set('dir', this.get('dir') === 'desc' ? 'asc' : 'desc');
      } else {
        this.set('sort', valuePath);
        this.set('dir', 'desc');
      }

      this.get('onSortChanged')([this.get('sort'), this.get('dir')]);
    }
  }
});
