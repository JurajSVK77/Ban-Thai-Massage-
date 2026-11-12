import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationSK from './locales/sk.json';
import translationEN from './locales/en.json';

const resources = {
  sk: {
    translation: translationSK
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'sk',
    lng: 'sk', // Výchozí jazyk je vždy slovenčina pre vyhľadávače, robotov aj návštevníkov
    detection: {
      // Prioritne rešpektuje manuálnu voľbu používateľa v localStorage alebo URL ?lng=sk
      order: ['localStorage', 'querystring', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      lookupQuerystring: 'lng',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

// Synchronizácia lang atribútu v koreňovom html elemente
if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language || 'sk';
  i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
  });
}

export default i18n;
