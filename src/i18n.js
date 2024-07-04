import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
          marv: "A Discord bot in NodeJS that uses ChatGPT and a speech synthesis and recognition system, allowing interaction with the bot through voice commands.",
          devby: "Developed by",
        },
      },
      fr: {
        translation: {
          info: "Nos projets",
          baseline: "Développement de softs & scripts",
          discord: "Rejoignez notre Discord",
          marv: "Un bot Discord en NodeJS qui utilise chatGPT et un système de synthèse et de reconnaissance vocale permettant d’intéragir avec le bot grâce à la voix.",
          devby: "Developpé par",
        },
      },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
