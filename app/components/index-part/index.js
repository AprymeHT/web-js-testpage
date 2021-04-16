$(window).on('main:ready', (e,data) => {
  console.log(data);

  const {texts, lang} = data.menu;
  $(e.currentTarget).on('change-language', (e, pText) => {
    console.log(pText);

    texts.forEach((e, index) => {
      const text = texts[index].ru;
      console.log(text);
      $(`[data-trnslt=${index}]`).text(text);
    })
  })
});


/*$(texts).each((index, element) => {
      const text = texts[index].ia;
      $(`[data-trnslt=${index}]`).text(text);
        /!*.data('trnslt'));*!/
     /!* console.log(text);*!/
    })*/
