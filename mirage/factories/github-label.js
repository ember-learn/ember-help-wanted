
import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return `${i}`;
  },
  name: 'help wanted',
  color: '33aa3f'

});
