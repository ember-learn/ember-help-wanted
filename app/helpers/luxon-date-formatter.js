import { helper } from '@ember/component/helper';
import { DateTime } from 'luxon';

// Takes an ISO datestring and returns relative time
// Like "12 days ago"
export default helper(function luxonDateFormatter(datestring) {
  return DateTime.fromISO(datestring).toRelative();
});
