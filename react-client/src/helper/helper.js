import Moment from 'moment';

const twoVals = (val) => {
  if(val < 10) {
    return '0' + val;
  } else {
    return val;
  }
}

const checkValidEntry = (time1, time2) => {
  let arr1 = time1.split(':'),
  arr2 = time2.split(':'),
  numbers_val1 = checkValsNums(arr1),
  numbers_val2 = checkValsNums(arr2);

  if(arr1.length !== 3 || arr2.length !==3) {
    alert('Error: input must be in the following format hh:mm:ss');
    return false;
  } else if (!numbers_val1 || !numbers_val2) {
    alert('Error: input must be numbers');
    return false;
  } else if (!checkIsBefore(time1, time2)) {
    alert('Error: the end time must be greater than the start time');
    return false;
  } else {
    return true;
  }
}

const checkValsNums = (arr) => {
  return arr.every(val => {
    let num = parseInt(val);
    return !isNaN(num);
  });
}

const checkIsBefore = (start, end) => {
  var t1 = Moment(start, "hh:mm:ss"),
  t2 = Moment(end, "hh:mm:ss"),
  diff = t2.diff(t1, 'seconds');

  if(diff > 0) {
    return true;
  } else {
    return false;
  }
}

const subtractTimes = (start, end) => {
  var t1 = Moment(start, "hh:mm:ss"),
  t2 = Moment(end, "hh:mm:ss"),
  diff = t2.diff(t1, 'seconds');

  return Moment.utc(diff*1000).format('HH:mm:ss');
}

module.exports = {
  twoVals: twoVals,
  checkValidEntry: checkValidEntry,
  checkValsNums: checkValsNums,
  checkIsBefore: checkIsBefore,
  subtractTimes: subtractTimes
};
