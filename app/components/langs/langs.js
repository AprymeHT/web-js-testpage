class Language {
  constructor($element) {
    console.log($element);
    this.$element = $element;

    $(window).on('main:ready', this.onload);
  }

  onload = (e, data) => {
    const {$element} = this;
    const {langItem} = data.menu;

    const $container = $element.find('ul');
    langItem.forEach(({change}) => {
      const str = `<li class="langs__item">${change}</li>`;
      $container.append(str);
    })

    $element.on('click', e => {
      const $target = $(e.currentTarget);
      $target.addClass('langs_active');
    })

    const $paragraph = $element.find('p');
    const $langItem = $element.find('li.langs__item');

    $langItem.on('click', e => {
      const $target = $(e.currentTarget);
      $paragraph.text($target.text());
      const pText = $paragraph.text();
      $element.removeClass('langs_active');
      e.stopPropagation();
      $target.trigger('change-language', [pText]);

    })
  }
}


$('div.langs').each((index, element) =>{
  new Language($(element));
  console.log($(element));
})
