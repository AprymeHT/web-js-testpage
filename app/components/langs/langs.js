const Handlebars = require("handlebars");

class Language {
  constructor($element) {
    console.log($element);
    this.$element = $element;

    $(window).on('main:ready', this.onload);

    $(window).on('change-language', this.changeLang);

    var data1 = {
        name : 'John Doe'
      }

    var template = Handlebars.compile( $('#template').html() );
    //$('.updates').append( template(data1) );
    console.log(template(data1));
  }

  onload = (e, data) => {
    this.data = data;
    const {$element} = this;
    const pText = "ru";
    this.langItems();

    $(window).trigger('change-language', [data, pText]);

    $element.on('click', this.classAdd)

    const $langItem = $element.find('li.langs__item');
    $langItem.on('click', this.classRemove);
  }

  langItems() {
    const {$element, data: {menu : {langItem}}} = this;
    const $container = $element.find('ul');
    langItem.forEach(({change}) => {
      const str = `<li class="langs__item">${change}</li>`;
      $container.append(str);
    })};

  classRemove = (e) => {
    const {$element} = this;
    const $langs = $element;
    const $target = $(e.currentTarget);
    const $paragraph = $langs.find('p');
    $paragraph.text($target.text());
    const pText = $paragraph.text();
    $langs.removeClass('langs_active');
    e.stopPropagation();
    $target.trigger('change-language', [this.data, pText]);
  }

  classAdd = () => {
    const {$element} = this;
    const $target = $element;
    $target.addClass('langs_active');
  }

  changeLang = (e, data, pText) => {
    const {texts} = data.menu;
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
