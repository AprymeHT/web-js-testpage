import '../components/menu-inner/menu.js'
import '../components/wrapper/wrapper.js'
import '../components/langs/langs.js'
import '../components/index-part/index.js'

$(window).on('main:ready', (event, data) => {
  console.log(data);

});


$.getJSON('data/data.json', (data) => {
  $(window).trigger('main:ready', [data]);
});




