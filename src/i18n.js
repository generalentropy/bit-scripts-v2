import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { cardsData } from "../data/cardsData";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          info: "Our projects",
          baseline: "Software & Script Development",
          discord: "Join our Discord",
          devby: "Developed by",
        },
      },
      fr: {
        translation: {
          info: "Nos projets",
          baseline: "Développement de softs & scripts",
          discord: "Rejoignez notre Discord",
          devby: "Developpé par",
        },
      },

      es: {
        translation: {
          info: "Nuestros proyectos",
          baseline: "Desarrollo de software y scripts",
          discord: "Únete a nuestro Discord",
          devby: "Desarrollado por",
        },
      },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

function fillTranslations(cardsData) {
  console.log("loading translations...");
  cardsData.forEach((card) => {
    card.translations.forEach((translation) => {
      const { lang, description } = translation;
      i18n.addResourceBundle(
        lang,
        "app.card",
        {
          [card.project]: {
            description,
          },
        },
        true,
        true,
      );
    });
  });
}

fillTranslations(cardsData);

console.log(i18n.getResourceBundle("en", "app.card"));

export default i18n;
