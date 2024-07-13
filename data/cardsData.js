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
    githubRepoName: "Bit-Scripts.github.io",
    project: "Bit-Scripts",
    imageCover: "bitscriptsweb.jpeg",
    title: "Bit-Scripts Portfolio",
    author: "Eddy",
    github: "https://github.com/Bit-Scripts/Bit-Scripts.github.io",
    demo: "https://bit-scripts.github.io/",
    translations: [
      {
        lang: "en",
        description: "The various projects of Bit-Scripts",
      },
      {
        lang: "fr",
        description: "Porfolio des différents projets de Bit-Scripts",
      },
      {
        lang: "es",
        description: "Los diferentes proyectos de Bit-Scripts",
      },
    ],
  },
  {
    githubRepoName: "Marv",
    project: "marv",
    imageCover: "marv.jpg",
    title: "Marv",
    author: "Paul",
    github: "https://github.com/Bit-Scripts/Marv",
    demo: "https://discord.com/channels/1039788044691181608/1080108476069593138",
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
    imageCover: "botavatar-bouche.webp",
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
    githubRepoName: "SnakeGame",
    project: "snake",
    imageCover: "snake_screenshot.png",
    title: "Snake Game",
    author: "Paul",
    github: "https://github.com/Bit-Scripts/SnakeGame",
    demo: "https://jeu-du-serpent.marv-bot.fr/",
    translations: [
      {
        lang: "en",
        description:
          "Snake Game is a game where the player controls a snake seeking to eat apples. Generated with OpenAI's ChatGPT AI via the Marv Discord bot, it offers an enhanced experience while remaining classic.",
      },
      {
        lang: "fr",
        description:
          "Snake Game est un jeu où le joueur dirige un serpent cherchant à manger des pommes. Généré avec l'IA ChatGPT d'OpenAI via le bot Discord Marv, il offre une expérience améliorée tout en restant classique.",
      },
      {
        lang: "es",
        description:
          "Snake Game es un juego en el que el jugador controla una serpiente que busca comer manzanas. Generado con la IA ChatGPT de OpenAI a través del bot de Discord Marv, ofrece una experiencia mejorada mientras mantiene su carácter clásico.",
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
          "Knowing the places where fuel prices are the cheapest (using government data) and sending SMS alerts if fuel prices drop.",
      },
      {
        lang: "fr",
        description:
          "Connaître les lieux où les prix des carburants sont les moins chers (utilisation des données gouvernementales) et envoi de SMS si le prix du carburant baisse.",
      },
      {
        lang: "es",
        description:
          "Conocer los lugares donde los precios de los combustibles son los más baratos (utilizando datos del gobierno) y enviar alertas por SMS si los precios de los combustibles bajan.",
      },
    ],
  },
  {
    githubRepoName: "MPRIS-Discord-Presence",
    project: "mprisDiscordPresence",
    imageCover: "MPRIS.png",
    title: "MPRIS Discord Presence",
    author: "Paul",
    github: "https://github.com/Bit-Scripts/MPRIS-Discord-Presence",
    demo: "",
    translations: [
      {
        lang: "en",
        description:
          "MPRIS Discord Presence allows you to share the media being listened to/watched from a Linux system, compatible with MPRIS, on Discord.",
      },
      {
        lang: "fr",
        description:
          "MPRIS Discord Presence permet de partager le média écouté/vu depuis un système Linux, compatible avec MPRIS, sur Discord.",
      },
      {
        lang: "es",
        description:
          "MPRIS Discord Presence te permite compartir el medio que se está escuchando/viendo desde un sistema Linux, compatible con MPRIS, en Discord.",
      },
    ],
  },
  {
    githubRepoName: "musique",
    project: "musique",
    imageCover: "musique.png",
    title: "Musique - Le Lecteur Audio",
    author: "Paul",
    github: "https://github.com/Bit-Scripts/musique",
    demo: "",
    translations: [
      {
        lang: "en",
        description:
          "Musique, the audio player from BIT-SCRIPTS, supports MP3, WAVE, OGG, and FLAC formats. Easy to use and efficient, it is ideal for managing and enjoying your music collection. Developed in Python, Music combines performance and simplicity for all music lovers.",
      },
      {
        lang: "fr",
        description:
          "Musique, le lecteur audio de BIT-SCRIPTS, supporte les formats MP3, WAVE, OGG et FLAC. Facile à utiliser et efficace, il est idéal pour gérer et apprécier votre collection musicale. Développé en Python, Musique combine performance et simplicité pour tous les amateurs de musique.",
      },
      {
        lang: "es",
        description:
          "Musique, el reproductor de audio de BIT-SCRIPTS, soporta los formatos MP3, WAVE, OGG y FLAC. Fácil de usar y eficiente, es ideal para gestionar y disfrutar de tu colección musical. Desarrollado en Python, Música combina rendimiento y simplicidad para todos los amantes de la música.",
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
  {
    githubRepoName: "APPIPTV_Freebox_et_HDHomeRun",
    project: "iptv",
    imageCover: "IPTV.png",
    title: "APPIPTV Freebox et HDHomeRun",
    author: "Paul",
    github: "https://github.com/Bit-Scripts/APPIPTV_Freebox_et_HDHomeRun",
    demo: "",
    translations: [
      {
        lang: "en",
        description:
          "IPTVAPP is an IPTV streaming application with a graphical user interface based on PyQt6, allowing you to watch TV programs via Freebox or an HDHomeRun live through VLC media player.",
      },
      {
        lang: "fr",
        description:
          "IPTVAPP est une application de streaming IPTV avec une interface utilisateur graphique basée sur PyQt6, permettant de visualiser des programmes TV via Freebox ou un HDHomeRun en direct via VLC media player.",
      },
      {
        lang: "es",
        description:
          "IPTVAPP es una aplicación de streaming IPTV con una interfaz gráfica de usuario basada en PyQt6, que permite ver programas de TV a través de Freebox o un HDHomeRun en directo mediante el reproductor VLC media player.",
      },
    ],
  },
];
