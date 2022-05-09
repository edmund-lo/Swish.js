"use strict";
const log = console.log

function redirectAPI() {
    location.replace("https://sleepy-refuge-18198.herokuapp.com/api.html")
}

function redirectDownload() {
    location.replace("https://github.com/edmund-lo/Swish.js")
}

// x coordinates must have value between 0-50 for half court (0-50 for full court)
// y coordinates must have a value between 0-47 for half court (0-94 for full court)
// required data: type, x, y

const data1 = [
    { type: "make", x: 10, y: 10 },
    { type: "make", x: 15, y: 18 },
    { type: "make", x: 22, y: 18 },
    { type: "make", x: 25, y: 12 },
    { type: "make", x: 34, y: 45 },
    { type: "make", x: 36, y: 36 },
    { type: "make", x: 40, y: 11 },
    { type: "make", x: 48, y: 26 },
    { type: "make", x: 42, y: 20 },
    { type: "make", x: 26, y: 13 },
    { type: "make", x: 32, y: 20 },
    { type: "make", x: 14, y: 29 },
    { type: "make", x: 13, y: 26 },
    { type: "make", x: 28, y: 12 },
    { type: "make", x: 30, y: 5 },
    { type: "make", x: 48, y: 8 },
    { type: "miss", x: 20, y: 10 },
    { type: "miss", x: 25, y: 8 },
    { type: "miss", x: 32, y: 18 },
    { type: "miss", x: 15, y: 22 },
    { type: "miss", x: 34, y: 35 },
    { type: "miss", x: 36, y: 16 },
    { type: "miss", x: 20, y: 21 },
    { type: "miss", x: 38, y: 36 },
    { type: "miss", x: 12, y: 10 },
    { type: "miss", x: 26, y: 23 },
    { type: "miss", x: 42, y: 20 },
    { type: "miss", x: 24, y: 9 },
    { type: "miss", x: 13, y: 16 },
    { type: "miss", x: 8, y: 22 },
    { type: "miss", x: 20, y: 15 },
    { type: "miss", x: 18, y: 8 },
]

// first court
const s1 = swish();
s1.drawCourt(1, 600, "half", "example1Court");
s1.drawActions(data1);

const data2 = [
    // team 1
    { type: "make", x: 10, y: 10, team: "team1" },
    { type: "make", x: 15, y: 18, team: "team1" },
    { type: "make", x: 22, y: 18, team: "team1" },
    { type: "make", x: 25, y: 12, team: "team1" },
    { type: "make", x: 34, y: 45, team: "team1" },
    { type: "make", x: 36, y: 36, team: "team1" },
    { type: "make", x: 40, y: 11, team: "team1" },
    { type: "make", x: 48, y: 26, team: "team1" },
    { type: "make", x: 42, y: 20, team: "team1" },
    { type: "make", x: 26, y: 13, team: "team1" },
    { type: "make", x: 32, y: 20, team: "team1" },
    { type: "make", x: 14, y: 29, team: "team1" },
    { type: "make", x: 13, y: 26, team: "team1" },
    { type: "make", x: 28, y: 12, team: "team1" },
    { type: "make", x: 30, y: 5, team: "team1" },
    { type: "make", x: 48, y: 8, team: "team1" },
    { type: "miss", x: 20, y: 10, team: "team1" },
    { type: "miss", x: 25, y: 8, team: "team1" },
    { type: "miss", x: 32, y: 18, team: "team1" },
    { type: "miss", x: 15, y: 22, team: "team1" },
    { type: "miss", x: 34, y: 35, team: "team1" },
    { type: "miss", x: 36, y: 16, team: "team1" },
    { type: "miss", x: 20, y: 21, team: "team1" },
    { type: "miss", x: 38, y: 36, team: "team1" },
    { type: "miss", x: 12, y: 10, team: "team1" },
    { type: "miss", x: 26, y: 23, team: "team1" },
    { type: "miss", x: 42, y: 20, team: "team1" },
    { type: "miss", x: 24, y: 9, team: "team1" },
    { type: "miss", x: 13, y: 16, team: "team1" },
    { type: "miss", x: 8, y: 22, team: "team1" },
    { type: "miss", x: 20, y: 15, team: "team1" },
    { type: "miss", x: 18, y: 8, team: "team1" },

    // team 2
    { type: "make", x: 10, y: 50, team: "team2" },
    { type: "make", x: 15, y: 68, team: "team2" },
    { type: "make", x: 22, y: 78, team: "team2" },
    { type: "make", x: 25, y: 52, team: "team2" },
    { type: "make", x: 34, y: 65, team: "team2" },
    { type: "make", x: 36, y: 86, team: "team2" },
    { type: "make", x: 40, y: 81, team: "team2" },
    { type: "make", x: 48, y: 66, team: "team2" },
    { type: "make", x: 42, y: 60, team: "team2" },
    { type: "make", x: 26, y: 93, team: "team2" },
    { type: "make", x: 32, y: 80, team: "team2" },
    { type: "make", x: 14, y: 79, team: "team2" },
    { type: "make", x: 13, y: 86, team: "team2" },
    { type: "make", x: 28, y: 72, team: "team2" },
    { type: "make", x: 30, y: 55, team: "team2" },
    { type: "make", x: 48, y: 82, team: "team2" },
    { type: "miss", x: 20, y: 90, team: "team2" },
    { type: "miss", x: 25, y: 83, team: "team2" },
    { type: "miss", x: 32, y: 68, team: "team2" },
    { type: "miss", x: 15, y: 62, team: "team2" },
    { type: "miss", x: 34, y: 75, team: "team2" },
    { type: "miss", x: 36, y: 66, team: "team2" },
    { type: "miss", x: 20, y: 81, team: "team2" },
    { type: "miss", x: 38, y: 56, team: "team2" },
    { type: "miss", x: 12, y: 80, team: "team2" },
    { type: "miss", x: 26, y: 73, team: "team2" },
    { type: "miss", x: 42, y: 70, team: "team2" },
    { type: "miss", x: 24, y: 69, team: "team2" },
    { type: "miss", x: 13, y: 86, team: "team2" },
    { type: "miss", x: 8, y: 72, team: "team2" },
    { type: "miss", x: 20, y: 65, team: "team2" },
    { type: "miss", x: 18, y: 83, team: "team2" },
]

// second court
const s2 = swish();
s2.drawCourt(2, 400, "full", "example2Court");
s2.drawActions(data2);

const data3 = [
    // team 1
    { type: "make", x: 10, y: 10, team: "team1", player: "player3" },
    { type: "miss", x: 15, y: 18, team: "team1", player: "player2" },
    { type: "make", x: 22, y: 18, team: "team1", player: "player1" },
    { type: "miss", x: 25, y: 12, team: "team1", player: "player4" },
    { type: "foul", x: 34, y: 45, team: "team1", player: "player5" },
    { type: "turnover", x: 36, y: 36, team: "team1", player: "player3" },
    { type: "steal", x: 40, y: 11, team: "team1", player: "player2" },
    { type: "miss", x: 48, y: 26, team: "team1", player: "player1" },
    { type: "make", x: 42, y: 20, team: "team1", player: "player4" },
    { type: "rebound", x: 26, y: 13, team: "team1", player: "player5" },
    { type: "steal", x: 32, y: 20, team: "team1", player: "player3" },
    { type: "turnover", x: 14, y: 29, team: "team1", player: "player3" },
    { type: "pass", x: 13, y: 26, x2: 18, y2: 30, team: "team1", player: "player2" },
    { type: "pass", x: 28, y: 12, x2: 34, y2: 20, team: "team1", player: "player1" },
    { type: "dribble", x: 30, y: 25, x2: 31, y2: 10, team: "team1", player: "player4" },
    { type: "dribble", x: 48, y: 54, x2: 38, y2: 64, team: "team1", player: "player5" },

    // team 2
    { type: "make", x: 10, y: 50, team: "team2", player: "player3" },
    { type: "make", x: 15, y: 68, team: "team2", player: "player2" },
    { type: "foul", x: 22, y: 78, team: "team2", player: "player1" },
    { type: "turnover", x: 25, y: 52, team: "team2", player: "player5" },
    { type: "steal", x: 34, y: 65, team: "team2", player: "player4" },
    { type: "foul", x: 36, y: 86, team: "team2", player: "player3" },
    { type: "block", x: 40, y: 81, team: "team2", player: "player2" },
    { type: "rebound", x: 48, y: 66, team: "team2", player: "player1" },
    { type: "block", x: 42, y: 60, team: "team2", player: "player5" },
    { type: "steal", x: 26, y: 93, team: "team2", player: "player4" },
    { type: "miss", x: 32, y: 80, team: "team2", player: "player1" },
    { type: "miss", x: 14, y: 79, team: "team2", player: "player3" },
    { type: "make", x: 13, y: 86, team: "team2", player: "player2" },
    { type: "make", x: 28, y: 72, team: "team2", player: "player5" },
    { type: "make", x: 30, y: 55, team: "team2", player: "player3" },
    { type: "make", x: 48, y: 82, team: "team2", player: "player2" },
    { type: "pass", x: 20, y: 90, x2: 28, y2: 84, team: "team2", player: "player1" },
    { type: "pass", x: 25, y: 83, x2: 38, y2: 94, team: "team2", player: "player3" },
    { type: "pass", x: 32, y: 68, x2: 28, y2: 64, team: "team2", player: "player1" },
    { type: "dribble", x: 15, y: 62, x2: 10, y2: 76, team: "team2", player: "player4" },
    { type: "dribble", x: 34, y: 75, x2: 38, y2: 53, team: "team2", player: "player2" },
]

// third court
const s3 = swish();
s3.drawCourt(3, 400, "full", "example3Court");
s3.drawActions(data3);
s3.createPopup();

const data4 = [
    // team 1
    { type: "make", x: 10, y: 10, team: "team1", player: "player3" },
    { type: "miss", x: 15, y: 18, team: "team1", player: "player2" },
    { type: "make", x: 22, y: 18, team: "team1", player: "player1" },
    { type: "pass", x: 13, y: 26, x2: 18, y2: 30, team: "team1", player: "player2" },
    { type: "miss", x: 25, y: 12, team: "team1", player: "player4" },
    { type: "foul", x: 34, y: 45, team: "team1", player: "player5" },
    { type: "turnover", x: 36, y: 36, team: "team1", player: "player3" },
    { type: "dribble", x: 30, y: 5, x2: 31, y2: 10, team: "team1", player: "player4" },
    { type: "steal", x: 40, y: 11, team: "team1", player: "player2" },
    { type: "miss", x: 48, y: 26, team: "team1", player: "player1" },
    { type: "dribble", x: 48, y: 44, x2: 38, y2: 34, team: "team1", player: "player5" },
    { type: "pass", x: 28, y: 12, x2: 34, y2: 20, team: "team1", player: "player1" },
    { type: "make", x: 42, y: 20, team: "team1", player: "player4" },
    { type: "rebound", x: 26, y: 13, team: "team1", player: "player5" },
    { type: "steal", x: 32, y: 20, team: "team1", player: "player3" },
    { type: "turnover", x: 14, y: 29, team: "team1", player: "player3" },
]

// fourth court
const s4 = swish();
s4.drawCourt(4, 600, "half", "example4Court");
s4.drawActions(data4);
s4.createSlider("example4Court");

const data5 = [
    { type: "pass", x: 25, y: 47, x2: 40, y2: 55, period: "4th", time: "0:48", description: "James Harden passes to Tobias Harris", team: "76ers", player: "James Harden" },
    { type: "dribble", x: 40, y: 57, x2: 42, y2: 70, period: "4th", time: "0:42", description: "Tobias Harris dribbles it up", team: "76ers", player: "Tobias Harris" },
    { type: "pass", x: 42, y: 72, x2: 34, y2: 90, period: "4th", time: "0:35", description: "Tobias Harris passes to Joel Embiid in the post", team: "76ers", player: "Joel Embiid" },
    { type: "miss", x: 32, y: 90, x2: 34, y2: 90, period: "4th", time: "0:28", description: "Joel Embiid misses the hook shot", team: "76ers", player: "Joel Embiid" },
    { type: "rebound", x: 18, y: 86, x2: 34, y2: 90, period: "4th", time: "0:24", description: "Precious Achiuwa gets the rebound", team: "Raptors", player: "Precious Achiuwa" },
    { type: "pass", x: 18, y: 84, x2: 10, y2: 60, period: "4th", time: "0:20", description: "Precious Achiuwa passes to Fred VanVleet", team: "Raptors", player: "Precious Achiuwa" },
    { type: "dribble", x: 11, y: 59, x2: 22, y2: 39, period: "4th", time: "0:15", description: "Fred VanVleet dribbles it up", team: "Raptors", player: "Fred VanVleet" },
    { type: "pass", x: 23, y: 38, x2: 40, y2: 34, period: "4th", time: "0:11", description: "Fred VanVleet passes to Pascal Siakam", team: "Raptors", player: "Fred VanVleet" },
    { type: "dribble", x: 40, y: 33, x2: 38, y2: 11, period: "4th", time: "0:05", description: "Pascal Siakam drives into the lane", team: "Raptors", player: "Pascal Siakam" },
    { type: "make", x: 38, y: 10, x2: 38, y2: 18, period: "4th", time: "0:01", description: "Pascal Siakam makes the turnaround jumpshot for the game winner", team: "Raptors", player: "Pascal Siakam" },
]

// fifth court
const s5 = swish();
s5.drawCourt(5, 400, "full", "example5Court");
s5.drawActions(data5);
s5.createSlider("example5Court");
s5.createTimeline(200, 400, "example5Timeline");
s5.createPopup();

const data6 = [
    // team 1
    { type: "make", x: 10, y: 10, team: "team1" },
    { type: "make", x: 15, y: 18, team: "team1" },
    { type: "make", x: 22, y: 18, team: "team1" },
    { type: "make", x: 25, y: 12, team: "team1" },
    { type: "make", x: 34, y: 45, team: "team1" },
    { type: "make", x: 36, y: 36, team: "team1" },
    { type: "make", x: 40, y: 11, team: "team1" },
    { type: "miss", x: 48, y: 26, team: "team1" },
    { type: "miss", x: 42, y: 20, team: "team1" },
    { type: "miss", x: 26, y: 13, team: "team1" },
    { type: "miss", x: 32, y: 20, team: "team1" },
    { type: "miss", x: 14, y: 29, team: "team1" },
    { type: "rebound", x: 13, y: 26, team: "team1" },
    { type: "rebound", x: 28, y: 12, team: "team1" },
    { type: "rebound", x: 30, y: 5, team: "team1" },
    { type: "rebound", x: 48, y: 8, team: "team1" },
    { type: "rebound", x: 20, y: 10, team: "team2" },
    { type: "rebound", x: 25, y: 8, team: "team2" },
    { type: "rebound", x: 32, y: 18, team: "team2" },
    { type: "rebound", x: 15, y: 22, team: "team2" },
    { type: "rebound", x: 34, y: 35, team: "team2" },
    { type: "rebound", x: 36, y: 16, team: "team2" },
    { type: "make", x: 20, y: 21, team: "team2" },
    { type: "make", x: 38, y: 36, team: "team2" },
    { type: "make", x: 12, y: 10, team: "team2" },
    { type: "make", x: 26, y: 23, team: "team2" },
    { type: "make", x: 42, y: 20, team: "team2" },
    { type: "make", x: 24, y: 9, team: "team2" },
    { type: "miss", x: 13, y: 16, team: "team2" },
    { type: "miss", x: 8, y: 22, team: "team2" },
    { type: "miss", x: 20, y: 15, team: "team2" },
    { type: "miss", x: 18, y: 8, team: "team2" },
]

// sixth court
const s6 = swish();
s6.drawCourt(6, 600, "half", "example6Court");
s6.drawActions(data6);
s6.setColour("rebound", "blue");
s6.setShape("team1", "square");
s6.setShape("team2", "circle");
s6.createPopup();