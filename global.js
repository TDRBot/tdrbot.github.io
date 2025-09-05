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
document.addEventListener("DOMContentLoaded", () => {
  function replaceEmojis(root = document.body) {
    const emojiMap = {
      ":pippins_jump:": "emoji-pippins-jump",
      // add more here like ":another:": "emoji-another"
    };

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);

    let node;
    while ((node = walker.nextNode())) {
      let text = node.nodeValue;

      for (const [emojiText, className] of Object.entries(emojiMap)) {
        if (text.includes(emojiText)) {
          const parts = text.split(emojiText);
          const fragment = document.createDocumentFragment();

          parts.forEach((part, i) => {
            if (part) fragment.appendChild(document.createTextNode(part));
            if (i < parts.length - 1) {
              const span = document.createElement("span");
              span.className = className;
              fragment.appendChild(span);
            }
          });

          node.parentNode.replaceChild(fragment, node);
        }
      }
    }
  }

  replaceEmojis();
});