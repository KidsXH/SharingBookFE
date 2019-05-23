export default {
  /**
   * insert value into ordered list
   * @param list
   * @param value
   */
  insertIntoOrderedList(list, value) {
    list.push(value);
    let i = list.length - 1;
    for (;i - 1 >= 0 && list[i - 1] > list[i]; i--)
      [list[i - 1], list[i]] = [list[i], list[i - 1]];
  },

  /**
   * search value in list
   * @param list
   * @param value
   * @returns {number}
   */
  binarySearch(list, value) {
    let l = 0, r = list.length - 1;
    while (l <= r) {
      let m = Math.floor((l + r) / 2);
      if (list[m] === value) return m;
      if (list[m] < value)
        l = m + 1;
      else
        r = m - 1;
    }
    return -1; // Not found
  }
}
