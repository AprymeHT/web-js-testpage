class MenuItem {
  constructor($element) {
    console.log($element);
    this.$element = $element;

    //this.onLoad = this.onLoad.bind(this)
    $(window).on('main:ready', this.onLoad);
  }

  onLoad = (e, data) => {
    const {$element} = this;
    const {items, texts, links} = data.menu;

    const $container = $element.find('div.links-button');
    items.forEach(({text:textID, isLine, value}, index) => {

      const text = texts[textID]?.ru;
      const link = links[index]?.ru;
      const str = `<li class="menu-inner__item${isLine ? " menu-inner__item-line" : ""}"${isLine ? "" : "data-trnslt=" + (index + 4)}> <a href="${isLine ? "" : link}">${text || ""}</a></li>`
      $container.before(str);
    })
    const $link = $element.find('li.menu-inner__item a');
    $link.click((e) => {
      e.preventDefault();
      const $target = $(e.currentTarget);
      const link = $target.attr("href");
      const name = $target.text();
      console.log(name);
      console.log(link);
      $target.trigger('change-page', [link, name]);
    })
  }

}

$('.menu-inner').each((index, element) => {
  new MenuItem($(element));
  console.log($(element));
})
