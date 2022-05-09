"use strict";
const log = console.log

const data = [
    // x coordinates must have value between 0-50 for half court (0-50 for full court)
    // y coordinates must have a value between 0-47 for half court (0-94 for full court)
    // required data: type, x, y

    {
        type: "make", // make, miss, pass, rebound, steal, block, etc...
        x: 25, // x coordinate of action
        y: 10, // y coordinate of action
        x2: 0, // end x coordinate of action
        y2: 0, // end y coordinate of action
        period: "1st",
        time: "10:00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed massa at dui sollicitudin lobortis a efficitur dui. Nulla est turpis, pharetra at ligula et, sagittis maximus lectus. Nullam facilisis sapien nec purus tincidunt maximus. Aliquam accumsan dignissim accumsan. Nullam maximus risus sit amet lorem facilisis luctus ut sit amet dui. Nunc sed auctor mi. Morbi vel dignissim dolor.",
        team: "team1", // data can contain two teams
        player: "player1",
    },
    {
        type: "miss",
        x: 6,
        y: 20,
        x2: 20,
        y2: 15,
        period: "1st",
        time: "8:00",
        description: "Shot miss",
        team: "team1",
        player: "player4",
    },
    {
        type: "rebound",
        x: 28,
        y: 5,
        x2: 20,
        y2: 15,
        period: "1st",
        time: "5:00",
        description: "Rebound",
        team: "team1",
        player: "player4",
    },
    {
        type: "steal",
        x: 40,
        y: 30,
        x2: 20,
        y2: 15,
        period: "2nd",
        time: "7:00",
        description: "Steal",
        team: "team2",
        player: "player4",
    },
    {
        type: "block",
        x: 30,
        y: 8,
        x2: 20,
        y2: 15,
        period: "2nd",
        time: "5:00",
        description: "Block",
        team: "team2",
        player: "player2",
    },
    {
        type: "turnover",
        x: 10,
        y: 25,
        x2: 20,
        y2: 15,
        period: "3rd",
        time: "10:00",
        description: "Turnover",
        team: "team2",
        player: "player1",
    },
    {
        type: "foul",
        x: 20,
        y: 15,
        x2: 20,
        y2: 15,
        period: "3rd",
        time: "4:00",
        description: "Foul",
        team: "team1",
        player: "player3",
    },
    {
        type: "random",
        x: 35,
        y: 35,
        x2: 20,
        y2: 15,
        period: "4th",
        time: "10:00",
        description: "Random",
        team: "team1",
        player: "player2",
    },
    {
        type: "pass",
        x: 21,
        y: 24,
        x2: 25,
        y2: 22,
        period: "4th",
        time: "8:00",
        description: "Pass from player 2 to player 1",
        team: "team1",
        player: "player2",
    },
    {
        type: "dribble",
        x: 40,
        y: 40,
        x2: 38,
        y2: 38,
        period: "4th",
        time: "6:00",
        description: "Dribble",
        team: "team1",
        player: "player2",
    },
    {
        type: "foul",
        x: 49,
        y: 46,
        x2: 20,
        y2: 15,
        period: "3rd",
        time: "4:00",
        description: "Foul",
        team: "team1",
        player: "player3",
    },
    {
        type: "pass",
        x: 10,
        y: 40,
        x2: 13,
        y2: 20,
        period: "4th",
        time: "2:00",
        description: "Pass from player 4 to player 3",
        team: "team2",
        player: "player4",
    },
    {
        type: "foul",
        x: 1,
        y: 46,
        x2: 20,
        y2: 15,
        period: "3rd",
        time: "4:00",
        description: "Foul",
        team: "team1",
        player: "player3",
    },
];

const data2 = [
    // x coordinates must have value between 0-50
    // y coordinates must have a value between 0-47

    {
        type: "rebound", // shot, pass, rebound, steal, block, etc...
        x: 5, // x coordinate of action
        y: 5, // y coordinate of action
        x2: 0, // end x coordinate of action
        y2: 0, // end y coordinate of action
    },
    {
        type: "turnover",
        x: 22,
        y: 38,
        x2: 20,
        y2: 15,
    },
    {
        type: "make",
        x: 40,
        y: 10,
        x2: 20,
        y2: 15,
    },
    {
        type: "steal",
        x: 25,
        y: 40,
        x2: 20,
        y2: 15,
    },
    {
        type: "random",
        x: 33,
        y: 8,
        x2: 20,
        y2: 15,
    },
    {
        type: "foul",
        x: 20,
        y: 25,
        x2: 20,
        y2: 15,
    },
    {
        type: "miss",
        x: 18,
        y: 30,
        x2: 20,
        y2: 15,
    },
    {
        type: "block",
        x: 28,
        y: 18,
        x2: 20,
        y2: 15,
    },
    {
        type: "make",
        x: 22,
        y: 18,
        x2: 20,
        y2: 15,
    },
    {
        type: "make",
        x: 38,
        y: 42,
        x2: 20,
        y2: 15,
    },
    {
        type: "block",
        x: 28,
        y: 90,
        x2: 20,
        y2: 15,
    },
    {
        type: "make",
        x: 22,
        y: 75,
        x2: 20,
        y2: 15,
    },
    {
        type: "make",
        x: 38,
        y: 80,
        x2: 20,
        y2: 15,
    },
    {
        type: "dribble",
        x: 30,
        y: 40,
        x2: 35,
        y2: 36,
    },
    {
        type: "pass",
        x: 21,
        y: 24,
        x2: 25,
        y2: 22,
    },
    {
        type: "dribble",
        x: 40,
        y: 40,
        x2: 38,
        y2: 38,
    },
];

// first court
const s = swish();
s.drawCourt(0, 800, "half", "example1Court"); // set a court ID using first parameter, set court size using second parameter, set half or full court using third parameter
s.drawActions(data); // parameter for data
s.createSlider("example1Court");
s.createTimeline(200, 400, "example1Timeline"); // set width, height using parameters
// s.setShape("team1", "square")
// s.setShape("team2", "triangle-up")
s.createPopup();

// second court
const s2 = swish();
s2.drawCourt(1, 600, "full", "example2Court");
s2.drawActions(data2);
s2.createSlider("example2Court");
s2.createTimeline(400, 400, "example2Timeline");
s2.setColour("dribble", "green")
s2.createPopup();