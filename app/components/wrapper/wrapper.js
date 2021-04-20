class Wrapper {
  constructor($element) {
    console.log($element);
    this.$element = $element;

    $(window).on('main:ready', this.onLoad);


    //this.onLoad = this.onLoad.bind(this)

    const $title = $("title");
    console.log($title);

    $element.on('change-page', (event, link, name) => {
      const $target = $(event.currentTarget);
      console.log($target);
      $title.text(name);
      $target.trigger('page-changed', [event, link]);
    })
  }

  onLoad = (e, data) => {
    this.data = data;
    const {$element} = this;
  }
}

$('.wrapper').each((index, element) => {
  new Wrapper($(element));
  console.log($(element));
})
