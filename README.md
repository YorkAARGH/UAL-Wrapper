# Unofficial Azur Lane API
[![Build Status](https://travis-ci.com/YorkAARGH/UAL-Wrapper.svg?branch=master)](https://travis-ci.com/YorkAARGH/UAL-Wrapper)
[![npm](https://img.shields.io/npm/v/ual-wrapper.svg)](https://www.npmjs.com/package/ual-wrapper)
[![Hackage-Deps](https://img.shields.io/hackage-deps/v/lens.svg)](https://www.npmjs.com/package/ual-wrapper)

The Unofficial Azur Lane API is an easy to use API to get Information about the various Ships.

---
## Quick Links
- [Installation](#Installation)
- [Usage](#Usage)
- [Examples](#Examples)
    - [Discord Embed](#Discord-Embed) 
    - [Detailed](#Detailed)
    - [Card](#Card)
    - [Brief](#Brief)

---

## Installation
Run this command and you are ready to go:
```
npm i ual-wrapper
```

---
 ## Usage
This will let you output detailed information of a ship to the Command Line, It will reply with a JSON Object, or Image Buffer
 ```js
const alwrapper = require("ual-wrapper");
const alclient = new alwrapper.Client();

async function sendDetailed() {
    const reply = alclient.detailed("kaga").catch((error) => console.log(error));
    console.log(reply);
}

sendDetailed();
 ```
---
## Examples
---
### Discord Embed
Answers with a fancy made discord embed.
```js
const alwrapper = require("ual-wrapper");
const alclient = new alwrapper.Client();
async function sendEmbed() {
    const embed = await alclient.embed("kaga");
    return message.channel.send({ embed });
}

sendEmbed();
```
---
### Detailed
Answers with detailed information about a ship.
```js
const alwrapper = require("ual-wrapper");
const alclient = new alwrapper.Client();

async function sendDetailed() {
    const reply = alclient.detailed("kaga").catch((error) => console.log(error));
    console.log(reply);
}

sendDetailed();
```
---
### Card
Answers with an Image buffer which will render out to an Image of the ship like so.

![Kaga](https://al-shipgirls.pw/image/playingcard?name=kaga "She's one foxy lady...")
```js
const alwrapper = require("ual-wrapper");
const alclient = new alwrapper.Client();

async function sendCard() {
    const reply = alclient.card("kaga").catch((error) => console.log(error));
    console.log(reply);
}

sendCard();

```
---
### Brief
Answers with brief information about the ship.
```js
const alwrapper = require("ual-wrapper");
const alclient = new alwrapper.Client();

async function sendBrief() {
    const reply = alclient.brief("kaga").catch((error) => console.log(error));
    console.log(reply);
}

sendBrief();
```

---
All information was provided by the [Azur Lane Wiki](http://azurlane.koumakan.jp/)
