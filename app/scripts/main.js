import '../components/menu-inner/menu.js'
import '../components/wrapper/wrapper.js'
import '../components/langs/langs.js'

$(window).on('main:ready', (event, data) => {
  console.log(data);

});

$.getJSON('data/data.json', (data) => {
  $(window).trigger('main:ready', [data])
  console.log(data);
});




