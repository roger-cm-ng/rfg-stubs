require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `{
  "currentLevel": "a",
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
      "left": {
        "buttons": [
          {
            "path": "",
            "state": "",
            "params": "",
            "href": ""
          },
          {
            "path": "",
            "state": "",
            "params": "",
            "href": ""
          }
        ]
      },
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
