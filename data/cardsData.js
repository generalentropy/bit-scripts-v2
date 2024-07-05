/**
 * @typedef {Object} Translation
 * @property {string} lang - Code ISO de la langue (par exemple, "en", "fr").
 * @property {string} description - Description du projet dans la langue spécifiée.
 */

/**
 * @typedef {Object} CardsData
 * @property {string} project - "project" devient la clé unique de l'objet qui contient toutes les infos et traductions relatives à la carte et qui seront poussées à i18n lors de l'initialisation.
 * @property {string} imageCover - Nom du fichier image avec extension.
 * @property {string} title - Nom du projet affiché sur la carte.
 * @property {string} author - Auteur du projet affiché sur la carte.
 * @property {string} github - Nom exact du repo pour pouvoir afficher les infos du projet.
 * @property {string} demo - URL de démo du projet.
 * @property {Translation[]} translations - Description du projet dans toutes les langues souhaitées. Dans le cas où vous ne fournissez qu'une langue, ce doit être l'anglais.
 */

/**
 * Liste de tous les projets pour générer les cartes et initialiser i18n.
 * @type {CardsData[]}
 */

export const cardsData = [
  {
    project: "marv",
    imageCover: "marv.jpg",
    title: "Marv",
    author: "Paul",
    github: "Low-Fuel",
    demo: "https://marv-bot.fr",
    translations: [
      {
        lang: "en",
        description:
          "A Discord bot in NodeJS that uses ChatGPT and a speech synthesis and recognition system, allowing interaction with the bot through voice commands.",
      },
      {
        lang: "fr",
        translations:
          "Un bot Discord en NodeJS qui utilise chatGPT et un système de synthèse et de reconnaissance vocale permettant d’intéragir avec le bot grâce à la voix.",
      },
    ],
  },
];
