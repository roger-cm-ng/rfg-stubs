require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `@import "../../common/styles/_colors.scss";
@import "../../common/styles/_common.scss";
@import "../../common/styles/_game.scss";

@font-face {
  font-family: poppins;
  src: url('https://west.cdn.mathletics.com/html/fonts/poppins-regular.ttf') format('truetype');
}

@font-face {
  font-family: medium-poppins;
  src: url('https://west.cdn.mathletics.com/html/fonts/poppins-medium.ttf') format('truetype');
}

@font-face {
  font-family: semi-bold-poppins;
  src: url('https://west.cdn.mathletics.com/html/fonts/poppins-semi-bold.ttf') format('truetype');
}

@font-face {
  font-family: bryant-bold;
  src: url('https://west.cdn.mathletics.com/html/fonts/bryant-bold.ttf') format('truetype');
}

@font-face {
  font-family: bryant-medium;
  src: url('https://west.cdn.mathletics.com/html/fonts/bryant-medium.ttf') format('truetype');
}

@font-face {
  font-family: ABeeZee-Italic;
  src: url('https://west.cdn.mathletics.com/html/fonts/a-bee-zee-italic.ttf') format('truetype');
}

@font-face {
  font-family: ABeeZee;
  src: url('https://west.cdn.mathletics.com/html/fonts/a-bee-zee-regular.ttf') format('truetype');
}

@mixin poppins {
  font-family: 'poppins';
}

@mixin medium-poppins {
  font-family: 'medium-poppins';
}

@mixin semi-bold-poppins {
  font-family: 'semi-bold-poppins';
}

@mixin bryant-bold {
  font-family: "bryant-bold";
}

@mixin bryant-medium {
  font-family: "bryant-medium";
}

@mixin ABeeZee-Italic {
  font-family: 'ABeeZee-Italic';
}

@mixin ABeeZee {
  font-family: 'ABeeZee';
}

body {
  margin: 0;
  font-family: poppins;
}

.app {

}
`;
}
