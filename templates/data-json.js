require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `{
  "currentLevel": "",
  "currentCategory": "",
  "game": {
    "home": {
      "header": {
        "text": "Lorem ipsum"
      },
      "footer": {
        "text": "Lorem ipsum"
      },
      "question": {
        "hint": {
          "text": "Lorem ipsum"
        },
        "sign": {
          "tick": {
            "path": "images/tick.svg",
            "name": "tick"
          },
          "cross": {
            "path": "images/cross.svg",
            "name": "cross"
          }
        }
      }
    },
    "menu": {
      "left": null,
      "right": true,
      "bottom": {
        "numPad": {
          "noOfButtons": 10
        }
      }
    },
    "help": {
      "gameName": "Lorem ipsum",
      "content ": "<h1>How to play?</h1><div>Add sample game instruction here....</div>"
    },
    "preload": {
      "images": {},
      "ahead": {
        "nextPath": "game"
      }
    }
  }
}`;
}
