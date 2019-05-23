export default {
  insertIntoOrderedList(list, value) {
    list.push(value);
    let i = list.length - 1;
    for (;i - 1 >= 0 && list[i - 1] > list[i]; i--)
      [list[i - 1], list[i]] = [list[i], list[i - 1]];
  },
  binarySearch(list, value) {
    let l = 0, r = list.length - 1;
    // eslint-disable-next-line no-console
    // console.log('bs', 'search ' + value + ' in ' + list + '\n');
    while (l <= r) {
      let m = Math.floor((l + r) / 2);
      // eslint-disable-next-line no-console
      // console.log('bs-in', 'l: ' + l + ' r: ' + r + ' m: ' + m + ' list[m]: ' + list[m]);
      if (list[m] === value) return m;
      if (list[m] < value)
        l = m + 1;
      else
        r = m - 1;
    }
    return -1; // Not found
  }
}
