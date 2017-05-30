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
    <div class="app">
        <work-area
                menu="menu"
                next="next"
                onnumberclick="checkClick"
                getscoreboard="getScoreboard"
                header="header">

            <!-- Game specific elements -->


        </work-area>
    </div>
</div>

<script type="text/javascript" src="index.js"></script>
</body>
</html>`;
}
