class Language {
  constructor($element) {
    console.log($element);
    this.$element = $element;

    $(window).on('main:ready', this.onload);
  }

  onload = (e, data) => {
    const {$element} = this;
    const {items, texts, lang, langItem} = data.menu;

    const $container = $element.find('ul');
    langItem.forEach(({change}, index) => {
      console.log(change);
      const str = `<li class="langs__item">${change}</li>`;
      $container.append(str);
    })

    console.log($container);



   /* console.log(texts);

    const $lang = $('.button_small');

    lang.forEach(({text, value, tag}, index) => {
      const text1 = texts[index]?.en;
      console.log(text1);
      const tagName = tag;
      console.log(tagName);
      $(tagName).text(text1);

    })*/


  }
}

$('div.langs').each((index, element) =>{
  new Language($(element));
  console.log($(element));
})
