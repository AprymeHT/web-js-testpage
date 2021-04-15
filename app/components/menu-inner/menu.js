class MenuItem {
  constructor($element) {
    console.log($element);
    this.$element = $element;

    //this.onLoad = this.onLoad.bind(this)
    $(window).on('main:ready', this.onLoad);


  }

  // $('ul.menu-inner__list').append($('<li>')).attr('class', 'menu-inner__item');


  onLoad = (e, data) => {
    const {$element} = this;
    const {items, texts, links} = data.menu;

    //const $container = $element.find('ul.menu-inner__list');
    const $container = $element.find('div.links-button');
    items.forEach(({text:textID, isLine, value}, index) => {
      const text = texts[textID]?.ru;
      const link = links[index]?.ru;
      const str = `<li class="menu-inner__item${isLine ? " menu-inner__item-line" : ""}"> <a href="${isLine ? "" : link}">${text || ""}</a></li>`
      $container.before(str);
    })
    const $link = $element.find('li.menu-inner__item a');
    $link.click((e) => {
      const $target = $(e.currentTarget);
      const link = $target.attr("href");
      $target.trigger('change-page', [link]);
    })
    $link.css({pointerEvents: 'none'});
  }

}

$('.menu-inner').each((index, element) => {
  new MenuItem($(element));
  console.log($(element));
})

/*
$('li.menu-inner__item').on('change-page', (event, link) => {
  console.log(link);
})

$('li.menu-inner__item').click((event) => {
  $(event.currentTarget).trigger('change-page', [$(event.currentTarget).attr("href")]);
})
*/
