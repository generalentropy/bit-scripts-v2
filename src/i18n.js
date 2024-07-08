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
          online: "Members Online",
        },
      },
      fr: {
        translation: {
          info: "Nos projets",
          baseline: "Développement de softs & scripts",
          discord: "Rejoignez notre Discord",
          devby: "Developpé par",
          online: "Membres en ligne",
        },
      },

      es: {
        translation: {
          info: "Nuestros proyectos",
          baseline: "Desarrollo de software y scripts",
          discord: "Únete a nuestro Discord",
          devby: "Desarrollado por",
          online: "Miembros en línea",
        },
      },
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

function fillTranslations(cardsData) {
  // console.log("Populate translations object...");
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
// console.log("Translations injected👍");

export default i18n;
