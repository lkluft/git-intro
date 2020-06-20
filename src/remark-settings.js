/*
 * Some general configuration for remark.js
 *
 */
remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};

var slideshow = remark.create({
  ratio: '16:9',
  highlightStyle: 'dracula',
  highlightLines: true,
  navigation: {scroll: false, click: false},
});
