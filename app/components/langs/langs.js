class Language {
  constructor($element) {
    console.log($element);
    this.$element = $element;

    this.onload();
  }

  onload = () => {
    const {$element} = this;

    const $lang = $('div.langs');
    console.log($lang.text());
  }
}

$('div.langs').each((index, element) =>{
  new Language($(element));
  console.log($(element));
})
