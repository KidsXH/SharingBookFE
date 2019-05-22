function keyMirror (obj) {
  if (obj instanceof Object) {
    var _obj = Object.assign({}, obj);
    var _keyArray = Object.keys(obj);
    _keyArray.forEach(key => {
      _obj[key] = key
    });
    return _obj
  }
}

export default keyMirror({
  'CHANGE_MODAL_STATUS': null,
  'CHANGE_PROFILE': null,
  'CHANGE_SEARCH_TEXT': null,
  'CHANGE_BOOK_LIST': null,
  'CHANGE_TAG_LIST': null,
  'CHANGE_CATEGORY_LIST': null,
})
