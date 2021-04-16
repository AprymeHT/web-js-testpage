class Language {
  constructor($element) {
    console.log($element);
    this.$element = $element;

    $(window).on('main:ready', this.onload);
  }

  onload = (e, data) => {
    const {$element} = this;
    const {item, texts, lang} = data.menu;
    console.log(texts);

    const $lang = $('.button_small');

    lang.forEach(({text, value, tag}, index) => {
      const text1 = texts[index]?.en;
      console.log(text1);
      const tagName = tag;
      console.log(tagName);
      $(tagName).text(text1);

    })


  }
}

$('div.langs').each((index, element) =>{
  new Language($(element));
  console.log($(element));
})
