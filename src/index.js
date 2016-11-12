class KoalaTranslate {

  constructor(translations = {}, currentLanguage = 'en') {
    this.translations = translations;
    this.currentLanguage = currentLanguage;
    this.elements = document.querySelectorAll('[translate]');
    this.translate();
  }

  translate(lang) {
    if (lang) this.currentLanguage = lang;

    this.elements.forEach((el) => {
      el.innerHTML = this.translateToken(this.translations, el.attributes.translate.value) || '';
    });
  }

  translateToken(source, tokenName) {
    if (!(source && tokenName)) return;

    const tokenArray = tokenName.split('.');
    const currentSource = source[tokenArray[0]];

    if (currentSource) {
      return (tokenArray.length <= 1)
        ? currentSource[this.currentLanguage]
        : this.translateToken(currentSource, tokenArray.slice(1).join('.'));
    } else return '';

  }
}

function pow() {}
