////////////////////////////////////////////////////////////////
//
// variables
//
////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
//
// THEMES
//
////////////////////////////////////////////////////////////////

let theme = window.localStorage.getItem("site-theme");

document.addEventListener("DOMContentLoaded", () => {
  ///////////////////////////////////////
  // MIDNIGHT THEME
  ///////////////////////////////////////
  if (theme == "midnight") {
    let body = document.getElementsByTagName("body")[0];
    let container = document.getElementsByClassName("container")[0];
    body.classList.add("sitebg-midnight");
    if (container) container.classList.add("container-midnight");
  }
  ///////////////////////////////////////
  // PITCH BLACK THEME
  ///////////////////////////////////////
  if (theme == "darkness") {
    let body = document.getElementsByTagName("body")[0];
    let container = document.getElementsByClassName("container")[0];
    body.classList.add("sitebg-darkness");
    if (container) container.classList.add("container-darkness");
  }
  ///////////////////////////////////////
  // CLASSIC THEME
  ///////////////////////////////////////
  if (theme == "classic") {
    let body = document.getElementsByTagName("body")[0];
    let container = document.getElementsByClassName("container")[0];
    body.classList.add("sitebg-classic");
    if (container) container.classList.add("container-classic");

    let banner = document.querySelector('img[src="https://tdrbot.github.io/images/main/WelcomeBanner.png"]');;
    
    banner.src = "https://tdrbot.github.io/images/main/WelcomeBanner-old.png";
  }
});


////////////////////////////////////////////////////////////////
//
// COOKIE LOGIC
//
////////////////////////////////////////////////////////////////

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

////////////////////////////////////////////////////////////////
//
// parameter lmao
//
////////////////////////////////////////////////////////////////

let parameters = new URLSearchParams(document.location.search);

////////////////////////////////////////////////////////////////
//
// CUSTOM EMOJIS
//
////////////////////////////////////////////////////////////////
var emojiMap = {
  ":pippins_jump:": "emoji-pippins-jump",
  ":kris_idle:": "emoji-pippins-jump",
  ":ralsei_float:": "emoji-ralsei-float",
  // add more as needed
};

function replaceCustomEmojis(container = document.body) {
  let emojiKeys = Object.keys(emojiMap);
  if (emojiKeys.length === 0) return;

  let regex = new RegExp(
    emojiKeys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|"),
    "g"
  );

  let walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;
  while ((node = walker.nextNode())) {
    let matches = node.nodeValue.match(regex);
    if (!matches) continue;

    let frag = document.createDocumentFragment();
    let parts = node.nodeValue.split(regex);

    parts.forEach((part, i) => {
      frag.appendChild(document.createTextNode(part));

      let emojiCode = matches[i];
      if (emojiCode) {
        let span = document.createElement("span");
        span.className = emojiMap[emojiCode];
        span.setAttribute("data-emoji", emojiCode); // optional
        frag.appendChild(span);
      }
    });

    node.parentNode.replaceChild(frag, node);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  replaceCustomEmojis();
});

function to_i(str) { return parseInt(str, 10); }

////////////////////////////////////////////////////////////////
//
// SLEEP
//
////////////////////////////////////////////////////////////////

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}