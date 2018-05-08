require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `<!DOCTYPE html>

<html ng-app="app">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <meta charset="UTF-8">

    <title>RainForest</title>
</head>

<body>

<div ng-controller="controller">
    <div class="app" ng-if="auth">
        <work-area
            menu="menu"
            header="header"
            getscoreboard="getScoreboard"
            next="next"
            onnumberclick="onNumberClick"
            plus="plus"
            minus="minus"
        >

            <!-- Game specific elements -->


        </work-area>
    </div>
</div>

</body>
</html>`;
}
