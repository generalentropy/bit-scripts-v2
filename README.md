# Bit-scripts v2

### Pour mettre le site à jour

Il suffit simplement d'ajouter un nouvel object au tableau **cardsData** dans **data/cardsData.js**

```
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
```
