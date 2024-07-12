/**
 * @typedef {Object} Translation
 * @property {string} lang - Code ISO de la langue (par exemple, "en", "fr").
 * @property {string} description - Description du projet dans la langue spécifiée.
 */

/**
 * @typedef {Object} CardsData
 * @property {string} githubRepoName - !Doit correspondre exactement au nom du repo
 * @property {string} project - REQUIS - "project" devient la clé unique de l'objet qui contient toutes les infos et traductions relatives à la carte et qui seront poussées lors de l'initialisation.
 * @property {string} imageCover - Nom du fichier image avec extension.
 * @property {string} title - Nom du projet affiché sur la carte.
 * @property {string} author - Auteur du projet affiché sur la carte.
 * @property {string} github - lien vers le repo
 * @property {string} demo - URL de démo du projet.
 * @property {Translation[]} translations - Description du projet dans toutes les langues souhaitées. Dans le cas où vous ne fournissez qu'une langue, ce doit être l'anglais.
 */

/**
 * Liste de tous les projets pour générer les cartes et initialiser i18n.
 * @type {CardsData[]}
 */

export const cardsData = [
  {
    githubRepoName: "Marv",
    project: "marv",
    imageCover: "marv.jpg",
    title: "Marv",
    author: "Paul",
    github: "",
    demo: "https://marv-bot.fr",
    translations: [
      {
        lang: "en",
        description:
          "A Discord bot in NodeJS that uses ChatGPT and a speech synthesis and recognition system, allowing interaction with the bot through voice commands.",
      },
      {
        lang: "fr",
        description:
          "Un bot Discord en NodeJS qui utilise chatGPT et un système de synthèse et de reconnaissance vocale permettant d’intéragir avec le bot grâce à la voix.",
      },
      {
        lang: "es",
        description:
          "Un bot de Discord en NodeJS que usa ChatGPT y un sistema de síntesis y reconocimiento de voz, lo que permite interactuar con el bot a través de comandos de voz.",
      },
    ],
  },
  {
    githubRepoName: "MarvWeb",
    project: "marvWeb",
    imageCover: "botavatar-bouche.png",
    title: "Marv Bot",
    author: "Paul",
    github: "https://github.com/Bit-Scripts/MarvWeb",
    demo: "https://marv-bot.fr",
    translations: [
      {
        lang: "en",
        description:
          "A website that takes the concept of Marv but directly on the Web to make it accessible to everyone.",
      },
      {
        lang: "fr",
        description:
          "Un site web qui reprend le concept de Marv mais directement sur le Web pour le rendre accessible à tout le monde.",
      },
      {
        lang: "es",
        description:
          "Un sitio web que retoma el concepto de Marv pero directamente en la Web para hacerlo accesible a todos.",
      },
    ],
  },
  {
    githubRepoName: "Matrix",
    project: "matrix",
    imageCover: "matrix.jpg",
    title: "Matrix",
    author: "Paul",
    github: "https://github.com/Bit-Scripts/Matrix",
    demo: "",
    translations: [
      {
        lang: "en",
        description:
          "Real-time capture from your WebCam to ASCII Art rendering in a Qt6 window and to a virtual webcam.",
      },
      {
        lang: "fr",
        description:
          "Capture de votre WebCam en temps réel vers un rendu ASCII Art dans une fenêtre Qt6 et vers une webcam virtuelle.",
      },
      {
        lang: "es",
        description:
          "Captura en tiempo real desde tu WebCam a una representación en ASCII Art en una ventana Qt6 y a una webcam virtual.",
      },
    ],
  },
  {
    githubRepoName: "BitGuardian",
    project: "bitguardian",
    imageCover: "bitguardian.jpg",
    title: "BitGuardian",
    author: "Red Moon",
    github: "https://github.com/Bit-Scripts/BitGuardian",
    demo: "",
    translations: [
      {
        lang: "en",
        description:
          "BitGuardian is a Discord moderation bot that assigns a role to new members and logs user messages. By facilitating server management, it enhances the user experience and offers extensible support for custom features.",
      },
      {
        lang: "fr",
        description:
          "BitGuardian est un bot Discord de modération qui attribue un rôle aux nouveaux membres et enregistre les messages utilisateur. Facilitant la gestion des serveurs, il améliore l'expérience utilisateur et offre un support extensible pour des fonctionnalités personnalisées.",
      },
      {
        lang: "es",
        description:
          "BitGuardian es un bot de moderación de Discord que asigna un rol a los nuevos miembros y registra los mensajes de los usuarios. Al facilitar la gestión de servidores, mejora la experiencia del usuario y ofrece soporte extensible para funciones personalizadas.",
      },
    ],
  },
  {
    githubRepoName: "Low-Fuel",
    project: "lowfuel",
    imageCover: "lowfuel.jpg",
    title: "Low-Fuel",
    author: "Paul",
    github: "https://github.com/Bit-Scripts/Low-Fuel",
    demo: "",
    translations: [
      {
        lang: "en",
        description:
          "Knowing the places where fuel prices are the cheapest (using government data) and sending SMS alerts if fuel prices drop",
      },
      {
        lang: "fr",
        description:
          "Connaître les lieux où les prix des carburants sont les moins chers (utilisation des données gouvernementales) et envoi de SMS si le prix du carburant baisse",
      },
      {
        lang: "es",
        description:
          "Conocer los lugares donde los precios de los combustibles son los más baratos (utilizando datos del gobierno) y enviar alertas por SMS si los precios de los combustibles bajan",
      },
    ],
  },
  {
    githubRepoName: "Rsscript",
    project: "rsscript",
    imageCover: "rsscript.jpg",
    title: "Rsscript",
    author: "Red Moon",
    github: "https://github.com/Bit-Scripts/Rsscript",
    demo: "",
    translations: [
      {
        lang: "en",
        description:
          "Rsscript is an open source project of a Discord bot whose purpose is to read RSS feeds and transmit them in a specific Discord channel.",
      },
      {
        lang: "fr",
        description:
          "Rsscript est un projet open source de bot Discord qui a pour but de lire les flux RSS et de les transmettre dans un salon Discord spécifique.",
      },
      {
        lang: "es",
        description:
          "Rsscript es un proyecto de código abierto de un bot de Discord cuyo objetivo es leer los feeds RSS y transmitirlos en un canal de Discord específico.",
      },
    ],
  },
];
