import '../index-part/index.js'

class Language {
  constructor($element) {
    console.log($element);
    this.$element = $element;

    $(window).on('main:ready', this.onload);
    
    $(window).on('change-language', this.changeLang);
  }

  onload = (e, data) => {
    const {$element} = this;
    const {langItem} = data.menu;
    const pText = "ru";

    const $container = $element.find('ul');
    langItem.forEach(({change}) => {
      const str = `<li class="langs__item">${change}</li>`;
      $container.append(str);
    })

    $(window).trigger('change-language', [data, pText]);


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
      $target.trigger('change-language', [data, pText]);

    })
  }

  changeLang = (e, data, pText) => {
    const {texts} = data.menu;
    console.log(pText);
    texts.forEach((e, index) => {
      const text = texts[index][pText];
      $(`[data-trnslt=${index}]`).text(text);
    })
  }
}


$('div.langs').each((index, element) =>{
  new Language($(element));
  console.log($(element));
})
