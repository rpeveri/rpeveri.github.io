// Objeto con los nombres completos de los idiomas
const languageNames = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  af: 'Afrikaans',
  sq: 'Albanian',
  am: 'Amharic',
  ar: 'Arabic',
  hy: 'Armenian',
  'zh-CN': 'Chinese (Simplified)',
  'zh-TW': 'Chinese (Traditional)',
  da: 'Danish',
  nl: 'Dutch',
  et: 'Estonian',
  fi: 'Finnish',
  ka: 'Georgian',
  de: 'German',
  el: 'Greek',
  iw: 'Hebrew',
  hi: 'Hindi',
  hu: 'Hungarian',
  id: 'Indonesian',
  it: 'Italian',
  ja: 'Japanese',
  ko: 'Korean',
  ms: 'Malay',
  no: 'Norwegian',
  fa: 'Persian',
  pl: 'Polish',
  pt: 'Portuguese',
  ro: 'Romanian',
  ru: 'Russian',
  sr: 'Serbian',
  sk: 'Slovak',
  sl: 'Slovenian',
  sw: 'Swahili',
  sv: 'Swedish',
  th: 'Thai',
  tr: 'Turkish',
  uk: 'Ukrainian',
  vi: 'Vietnamese',
  cy: 'Welsh'
  // Agrega aquí los nombres completos de los demás idiomas
};

function translate(text, targetLanguage) {
  // Default source language
  const sourceLanguage = 'auto';

  // Feedback
  console.log(`Translating from ${sourceLanguage} to ${targetLanguage}`);

  // Use the free Google Translate API (no API key required)
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURI(
    text
  )}`;

  // Parse Google's sparse array JSON, by inserting null values
  function parseJSON(txt) {
    return JSON.parse(txt.split(',').map(x => x || 'null').join(','));
  }

  // Join the snippets from Google Translate
  function joinSnippets(json) {
    return json[0].map(x => x[0]).join('');
  }

  // Fetch the translation from Google and extract it
  return new Promise(resolve => {
    fetch(url)
      .then(res => res.text())
      .then(text => joinSnippets(parseJSON(text)))
      .then(translation => {
        setTimeout(() => {
          resolve(translation);
        }, 2000); // Pausa de 2 segundos después de cada traducción
      })
      .catch(reason => {
        console.log('Translate: ' + reason);
        resolve('Error in translation');
      });
  });
}

function handleTranslate() {
  const textToTranslate = document.getElementById('textToTranslate').value.trim();
  const translationResult = document.getElementById('translationResult');

  if (textToTranslate === '') {
    translationResult.innerHTML = '<span style="color: red; font-weight: bold;">Please enter a text to translate.</span>';
    return;
  }

  translationResult.textContent = 'Translating be patient...';

  const targetLanguages = document.querySelectorAll('.target-languages input:checked');
  const targetLanguagesArray = Array.from(targetLanguages).map(checkbox => checkbox.value);

  const translations = [];
  let index = 0;


  function translateNext() {
    if (index < targetLanguagesArray.length) {
      const language = targetLanguagesArray[index];
      translate(textToTranslate, language)
        .then(translation => {
          translations.push(translation);
          index++;

          if (index === 1) {
            translationResult.innerHTML = ''; // Limpiar el contenido del contenedor de resultados

            // Construir el HTML para el primer idioma
            const firstLanguageCode = targetLanguagesArray[0];
            const firstLanguageName = languageNames[firstLanguageCode];
            const firstLanguageTranslationHTML = `<strong>${firstLanguageName}</strong>:<br><br> ${translation}<br><br><br>`;
            translationResult.insertAdjacentHTML('beforeend', firstLanguageTranslationHTML);
          } else {
            // Construir el HTML para los idiomas siguientes
            const languageCode = targetLanguagesArray[index - 1];
            const languageName = languageNames[languageCode];
            const translationHTML = `<strong>${languageName}</strong>:<br><br> ${translation}<br><br><br>`;
            translationResult.insertAdjacentHTML('beforeend', translationHTML);
          }

          setTimeout(translateNext, 2000); // Pausa de 2 segundos antes de la siguiente traducción
        })
        .catch(error => {
          console.log('Error in translation:', error);
          translations.push('Error in translation');
          index++;
          setTimeout(translateNext, 2000); // Pausa de 2 segundos antes de la siguiente traducción
        });
    } else {
      translationResult.insertAdjacentHTML('beforeend', 'Translation completed'); // Agregar el mensaje al final del contenido
    }
  }

  translateNext();
}