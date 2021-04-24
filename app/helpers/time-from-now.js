import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default helper(function timeFromNow(params) {
  const date = params[0];

  if (!date) {
    return '';
  }

  return dayjs(date).fromNow();
});
