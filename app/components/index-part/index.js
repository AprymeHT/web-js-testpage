$(window).on('main:ready', (e,data) => {
  console.log(data);

  const {texts, lang} = data.menu;
  $(e.currentTarget).on('change-language', (e, pText) => {
    console.log(pText);

    texts.forEach((e, index) => {
      const text = texts[index][pText];
      $(`[data-trnslt=${index}]`).text(text);
    })
  })
});
