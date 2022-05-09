# Swish.js

## Landing Page:
https://sleepy-refuge-18198.herokuapp.com

## Getting Started:
Load Swish.js into your webpage by adding the following to the head of your HTML file:
- swish.css containing styles for the library
- jQuery from the Google CDN
- leader-line.min.js for an external library, LeaderLine, available at https://anseki.github.io/leader-line/
- swish.js 

Note: LeaderLine is used to create the arrows in the visualizations

```html
<link rel="stylesheet" type="text/css" href="css/swish.css">

<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script defer type="text/javascript" src='js/leader-line.min.js'></script>
<script defer type="text/javascript" src='js/swish.js'></script>
```

## How to Use
Create <&zwj;div> elements for the court and the timeline and set their ids

Create a swish object and use its functions

```html
<!-- Create <div> elements and set ids -->
<div id="example1Court"></div>
<div id="example1Timeline"></div>
```

```javascript
// Create a swish object
const s1 = swish();
// Draw a court and place it in the element with id "example1Court"
s1.drawCourt(1, 400, "full", "example1Court");
// Draw the actions in "data1"
s1.drawActions(data1);
// Create a slider and place it in the element with id "example1Court"
s1.createSlider("example1Court");
// Create a timeline and place it in the element with id "example1Timeline"
s1.createTimeline(200, 400, "example1Timeline");
// Create a popup for each action
s1.createPopup();
```

## Documentation:
 https://sleepy-refuge-18198.herokuapp.com/api.html
