// LOAD SITE AND FALLBACK WHEN NOT POSSIBLE.
let website_info = window.localStorage.getItem("sandbox-website");
let fallback_website = "<!DOCTYPE html>\n<html lang=\"en-US\">\n  <head>\n    <title>Example site</title>\n    <style>\n      .blue-text {\n        color: blue;\n      }\n    </style>\n  </head>\n  <body>\n    <h1>Example Site</h1>\n    <hr>\n    <p>This is an example of the things you can mess around with in the sandbox!\n    <p>To preview your site instead of the source, press the button in the top-left!</p>\n    <p>Don't worry! When you preview your site, it is <b>automatically</b> saved locally!</p>\n    <p>You can also use CSS to make your website look <span class=\"blue-text\">colorful!</span></p>\n  </body>\n</html>";
let codebox_content;

// GET CODEBOX IF YOU'RE ACTUALLY ON IT
if (window.location.href.toLowerCase().includes("edit")) {
    codebox_content = document.getElementById("codebox").value;
}

// CHECK FOR FALLBACK
if (website_info == null) {
    loadFallback();
} else {
    document.getElementById("codebox").innerText = website_info;
}

function loadFallback() {
    document.getElementById("codebox").innerText = fallback_website;
    window.localStorage.setItem("sandbox-website", fallback_website);
}

// LOAD WEBSITE IF ON VIEW SITE
if (window.location.href.toLowerCase().includes("view")) {
    document.write("website_info");
}


// SAVING AND GOING TO WEBSITE
function saveAndView() {
    window.localStorage.setItem("website_info", codebox_content);
    window.location.href = "https://tdrbot.github.io/projects/html-sandbox/view";
}