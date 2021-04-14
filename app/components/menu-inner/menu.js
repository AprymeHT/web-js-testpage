class MenuItem {
  constructor($element) {
    console.log($element);
    this.$element = $element;

    //this.onLoad = this.onLoad.bind(this)
    $(window).on('main:ready', this.onLoad );

  }
  //$('ul.menu-inner__list').append($('<li>')).attr('class', 'menu-inner__item');

  onLoad = (e, data) => {
    data.forEach(element => {
      $('ul.menu-inner__list').html('<li class="menu-inner__item"' + data.items[index] + '</li>');
    })
    console.log(this);
  }

}

$('.menu-inner').each((index, element) => {
  new MenuItem($(element));
  console.log($(element));
})

