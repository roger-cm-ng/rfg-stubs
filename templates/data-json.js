require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `{
  "levels": {
    "level": {
      "categories": {
        "category": {
          "games": {
            "game": {
              "home": {
                "header": {
                  "text": ""
                },
                "footer": {
                  "text": ""
                },
                "question": {}
              },
              "menu": {
                "left": null,
                "right": true,
                "bottom": {}
              },
              "help": {
                "gameName": "<game-name>",
                "content ": "<h1>How to play?</h1><div>Add sample game instruction here....</div>"
              },
              "preload": {
                "images": {},
                "ahead": {}
              }
            }
          }
        }
      }
    }
  }
}`;
}
