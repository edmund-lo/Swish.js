"use strict";

function swish() {

    const _self = {}

	const myVars = {
        id: "", // each court has an id, actions are drawn on the court with certain id
        width: 0,
        types: ["make", "miss", "rebound", "steal", "block", "turnover", "foul"],
        data: [],
        teams: [],
        lines: [],
    };

    const d = {
        // Dimensions for basketball half court
        courtlength: 47,
        courtWidth: 50,

        basketRadius: 0.75,
        backboard: 6,
        basketDistance: 4, // From endline to basket

        freeThrowDistance: 19, // From endline to free throw line
        freeThrowCircleRadius: 6,

        keyLength: 19,
        keyWidth: 16,

        restrictedCircleRadius: 4,

        threePointDistance: 23.75, // From center of basket to center of three point line
        threePointEdge: 14, // From endline to where three point line is circular
        threePointWidth: 44, // Width between threePointEdges

        smallCenterCircleRadius: 2,
        largeCenterCircleRadius: 6
    };

    const scale = function(measure) {
        const scale = myVars.width / d.courtWidth;
        return measure * scale;
    }

    _self.drawCourt = function(courtID, width, courtType, divID) {
        
        // check if court already exists
        if ( $("#container" + courtID).length === 0){
            const container = $( "<div/>", {
                "class": "container",
                id: "container" + courtID
            });
    
            container.css({
                width: width
            });
    
            container.appendTo("#" + divID);
        } else {
            console.log("Court already exists");
            return;
        }

        myVars.id = courtID;
        myVars.width = width;

        if (courtType === "half") {
            const height = d.courtlength/d.courtWidth * width;

            // create court
            const court = $( "<canvas/>", {
                "class": "court",
                id: "court" + courtID
            });

            court.attr({width: width, height: height});
            court.appendTo("#container" + courtID);
            
            var c = document.getElementById("court" + courtID);
            var ctx = c.getContext("2d");
            // (0, 0) is top left of canvas, (width, height) is bottom right of canvas

            const centre = width/2;

            // draw key
            ctx.moveTo(centre - scale(d.keyWidth)/2, scale(d.freeThrowDistance));
            ctx.lineTo(centre + scale(d.keyWidth)/2, scale(d.freeThrowDistance));
            ctx.stroke();

            ctx.moveTo(centre - scale(d.keyWidth)/2, scale(d.keyLength));
            ctx.lineTo(centre - scale(d.keyWidth)/2, 0);
            ctx.stroke();

            ctx.moveTo(centre + scale(d.keyWidth)/2, scale(d.keyLength));
            ctx.lineTo(centre + scale(d.keyWidth)/2, 0);
            ctx.stroke();

            // draw free throw circle
            ctx.beginPath();
            ctx.arc(centre, scale(d.freeThrowDistance), scale(d.freeThrowCircleRadius), 0, Math.PI);
            ctx.stroke();

            ctx.setLineDash([scale(1), scale(1)]);
            ctx.beginPath();
            ctx.arc(centre, scale(d.freeThrowDistance), scale(d.freeThrowCircleRadius), Math.PI, 2 * Math.PI);
            ctx.stroke();
            ctx.setLineDash([0,0]);

            // draw basket
            ctx.beginPath();
            ctx.arc(centre, scale(d.basketDistance) + scale(d.basketRadius), scale(d.basketRadius), 0, 2 * Math.PI);
            ctx.stroke();

            ctx.moveTo(centre - scale(d.backboard)/2, scale(d.basketDistance));
            ctx.lineTo(centre + scale(d.backboard)/2, scale(d.basketDistance));
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(centre, scale(d.basketDistance) + scale(d.basketRadius), scale(d.restrictedCircleRadius), 0, Math.PI);
            ctx.stroke();

            // draw three point line
            ctx.moveTo(centre - scale(d.threePointWidth)/2, scale(d.threePointEdge));
            ctx.lineTo(centre - scale(d.threePointWidth)/2, 0);
            ctx.stroke();

            ctx.moveTo(centre + scale(d.threePointWidth)/2, scale(d.threePointEdge));
            ctx.lineTo(centre + scale(d.threePointWidth)/2, 0);
            ctx.stroke();
            
            var threePointAngle = Math.atan(d.threePointWidth/2 / (d.threePointEdge - d.basketDistance - d.basketRadius));

            ctx.beginPath();
            ctx.arc(centre, scale(d.basketDistance) + scale(d.basketRadius), 
            scale(d.threePointDistance), -1*threePointAngle + Math.PI/2, threePointAngle + Math.PI/2);
            ctx.stroke();

            // draw centre circle
            ctx.beginPath();
            ctx.arc(centre, height, scale(d.smallCenterCircleRadius), Math.PI, 2 * Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(centre, height, scale(d.largeCenterCircleRadius), Math.PI, 2 * Math.PI);
            ctx.stroke();
            
        } else if (courtType === "full") {
            const height = d.courtlength/d.courtWidth * width * 2;

            // create court
            const court = $( "<canvas/>", {
                "class": "court",
                id: "court" + courtID
            });

            court.attr({width: width, height: height});
            court.appendTo("#container" + courtID);
            
            var c = document.getElementById("court" + courtID);
            var ctx = c.getContext("2d");
            // (0, 0) is top left of canvas, (width, height) is bottom right of canvas

            const centre = width/2;

            // draw top half of court
            // draw key
            ctx.moveTo(centre - scale(d.keyWidth)/2, scale(d.freeThrowDistance));
            ctx.lineTo(centre + scale(d.keyWidth)/2, scale(d.freeThrowDistance));
            ctx.stroke();

            ctx.moveTo(centre - scale(d.keyWidth)/2, scale(d.keyLength));
            ctx.lineTo(centre - scale(d.keyWidth)/2, 0);
            ctx.stroke();

            ctx.moveTo(centre + scale(d.keyWidth)/2, scale(d.keyLength));
            ctx.lineTo(centre + scale(d.keyWidth)/2, 0);
            ctx.stroke();

            // draw free throw circle
            ctx.beginPath();
            ctx.arc(centre, scale(d.freeThrowDistance), scale(d.freeThrowCircleRadius), 0, Math.PI);
            ctx.stroke();

            ctx.setLineDash([scale(1), scale(1)]);
            ctx.beginPath();
            ctx.arc(centre, scale(d.freeThrowDistance), scale(d.freeThrowCircleRadius), Math.PI, 2 * Math.PI);
            ctx.stroke();
            ctx.setLineDash([0,0]);

            // draw basket
            ctx.beginPath();
            ctx.arc(centre, scale(d.basketDistance) + scale(d.basketRadius), scale(d.basketRadius), 0, 2 * Math.PI);
            ctx.stroke();

            ctx.moveTo(centre - scale(d.backboard)/2, scale(d.basketDistance));
            ctx.lineTo(centre + scale(d.backboard)/2, scale(d.basketDistance));
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(centre, scale(d.basketDistance) + scale(d.basketRadius), scale(d.restrictedCircleRadius), 0, Math.PI);
            ctx.stroke();

            // draw three point line
            ctx.moveTo(centre - scale(d.threePointWidth)/2, scale(d.threePointEdge));
            ctx.lineTo(centre - scale(d.threePointWidth)/2, 0);
            ctx.stroke();

            ctx.moveTo(centre + scale(d.threePointWidth)/2, scale(d.threePointEdge));
            ctx.lineTo(centre + scale(d.threePointWidth)/2, 0);
            ctx.stroke();
            
            var threePointAngle = Math.atan(d.threePointWidth/2 / (d.threePointEdge - d.basketDistance - d.basketRadius));

            ctx.beginPath();
            ctx.arc(centre, scale(d.basketDistance) + scale(d.basketRadius), 
            scale(d.threePointDistance), -1*threePointAngle + Math.PI/2, threePointAngle + Math.PI/2);
            ctx.stroke();

            // draw top half of centre circle
            ctx.beginPath();
            ctx.arc(centre, height / 2, scale(d.smallCenterCircleRadius), Math.PI, 2 * Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(centre, height / 2, scale(d.largeCenterCircleRadius), Math.PI, 2 * Math.PI);
            ctx.stroke();

            // draw bottom half of court
            // draw key
            ctx.moveTo(centre - scale(d.keyWidth)/2, height - scale(d.freeThrowDistance));
            ctx.lineTo(centre + scale(d.keyWidth)/2, height - scale(d.freeThrowDistance));
            ctx.stroke();

            ctx.moveTo(centre - scale(d.keyWidth)/2, height - scale(d.keyLength));
            ctx.lineTo(centre - scale(d.keyWidth)/2, height);
            ctx.stroke();

            ctx.moveTo(centre + scale(d.keyWidth)/2, height - scale(d.keyLength));
            ctx.lineTo(centre + scale(d.keyWidth)/2, height);
            ctx.stroke();

            // draw free throw circle
            ctx.beginPath();
            ctx.arc(centre, height - scale(d.freeThrowDistance), scale(d.freeThrowCircleRadius), Math.PI, 2 * Math.PI);
            ctx.stroke();

            ctx.setLineDash([scale(1), scale(1)]);
            ctx.beginPath();
            ctx.arc(centre, height - scale(d.freeThrowDistance), scale(d.freeThrowCircleRadius), 0, Math.PI);
            ctx.stroke();
            ctx.setLineDash([0,0]);

            // draw basket
            ctx.beginPath();
            ctx.arc(centre, height - scale(d.basketDistance) - scale(d.basketRadius), scale(d.basketRadius), 0, 2 * Math.PI);
            ctx.stroke();

            ctx.moveTo(centre - scale(d.backboard)/2, height - scale(d.basketDistance));
            ctx.lineTo(centre + scale(d.backboard)/2, height - scale(d.basketDistance));
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(centre, height - scale(d.basketDistance) - scale(d.basketRadius), scale(d.restrictedCircleRadius), Math.PI, 2 * Math.PI);
            ctx.stroke();

            // draw three point line
            ctx.moveTo(centre - scale(d.threePointWidth)/2, height - scale(d.threePointEdge));
            ctx.lineTo(centre - scale(d.threePointWidth)/2, height);
            ctx.stroke();

            ctx.moveTo(centre + scale(d.threePointWidth)/2, height - scale(d.threePointEdge));
            ctx.lineTo(centre + scale(d.threePointWidth)/2, height);
            ctx.stroke();

            var threePointAngle = Math.atan(d.threePointWidth/2 / (d.threePointEdge - d.basketDistance - d.basketRadius));

            ctx.beginPath();
            ctx.arc(centre, height - scale(d.basketDistance) - scale(d.basketRadius), 
            scale(d.threePointDistance), -1*threePointAngle - Math.PI/2, threePointAngle - Math.PI/2);
            ctx.stroke();

            // draw bottom half of centre circle
            ctx.beginPath();
            ctx.arc(centre, height / 2, scale(d.smallCenterCircleRadius), 0, Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(centre, height / 2, scale(d.largeCenterCircleRadius), 0, Math.PI);
            ctx.stroke();

            // draw halfcourt line
            ctx.moveTo(0, height / 2);
            ctx.lineTo(width, height / 2);
            ctx.stroke();
        }
    }

    _self.drawActions = function(data) {
        myVars.data = data;
        const radius = scale(0.75)/2;

        if ( $("#actionContainer" + myVars.id).length === 0){
            const actionContainer = $( "<div/>", {
                "class": "actionContainer",
                id: "actionContainer" + myVars.id
            });
            actionContainer.appendTo("#container" + myVars.id);
        }

        for (var i = 0; i < data.length; i++) {

            // if pass or dribble
            if (data[i].type === "pass" || data[i].type === "dribble") {

                // create first point
                const actionA = $( "<div/>", {
                    "class": "action",
                    id: "action" + i + "a_" + myVars.id
                });
                actionA.addClass(data[i].type);
    
                actionA.appendTo("#actionContainer" + myVars.id);

                // create second point
                const actionB = $( "<div/>", {
                    "class": "action",
                    id: "action" + i + "b_" + myVars.id
                });
                actionB.addClass(data[i].type);
    
                actionB.appendTo("#actionContainer" + myVars.id);

                // set position and size for both points
                $("#action" + i + "a_" + myVars.id).css({
                    top: scale(data[i].y) - radius,
                    left: scale(data[i].x) - radius,
                    width: 2*radius,
                    height: 2*radius
                });

                $("#action" + i + "b_" + myVars.id).css({
                    top: scale(data[i].y2) - radius,
                    left: scale(data[i].x2) - radius,
                    width: 2*radius,
                    height: 2*radius
                });

                if (data[i].team) {
                    if (!myVars.teams.includes(data[i].team)) {
                        myVars.teams.push(data[i].team);
                    }
                    // Leaderline library calls to create coloured arrows and dashed arrows if there are teams. Available at https://anseki.github.io/leader-line/
                    if (data[i].team === myVars.teams[0]) {
                        // use solid arrow for first team
                        if (data[i].type === "pass") {
                            // create red arrow for pass
                            // Leaderline library call. Available at https://anseki.github.io/leader-line/
                            window.dispatchEvent(new Event('resize'));
                            const line = new LeaderLine(
                                LeaderLine.pointAnchor(document.getElementById("action" + i + "a_" + myVars.id), {x: '50%', y: '50%'}),
                                LeaderLine.pointAnchor(document.getElementById("action" + i + "b_" + myVars.id), {x: '50%', y: '50%'}),
                                {color: "red", path: "straight", size: 0.6 * radius}
                            );
                            myVars.lines.push(line);
                        } else if (data[i].type === "dribble") {
                            // create blue arrow for dribble
                            // Leaderline library call. Available at https://anseki.github.io/leader-line/
                            window.dispatchEvent(new Event('resize'));
                            const line = new LeaderLine(
                                LeaderLine.pointAnchor(document.getElementById("action" + i + "a_" + myVars.id), {x: '50%', y: '50%'}),
                                LeaderLine.pointAnchor(document.getElementById("action" + i + "b_" + myVars.id), {x: '50%', y: '50%'}),
                                {color: "blue", path: "straight", size: 0.6 * radius}
                            );
                            myVars.lines.push(line);
                        }
                    } else {
                        // use dashed arrow for second team
                        if (data[i].type === "pass") {
                            // create red arrow for pass
                            // Leaderline library call. Available at https://anseki.github.io/leader-line/
                            window.dispatchEvent(new Event('resize'));
                            const line = new LeaderLine(
                                LeaderLine.pointAnchor(document.getElementById("action" + i + "a_" + myVars.id), {x: '50%', y: '50%'}),
                                LeaderLine.pointAnchor(document.getElementById("action" + i + "b_" + myVars.id), {x: '50%', y: '50%'}),
                                {color: "red", path: "straight", size: 0.6 * radius, dash: true}
                            );
                            myVars.lines.push(line);
                        } else if (data[i].type === "dribble") {
                            // create blue arrow for dribble
                            // Leaderline library call. Available at https://anseki.github.io/leader-line/
                            window.dispatchEvent(new Event('resize'));
                            const line = new LeaderLine(
                                LeaderLine.pointAnchor(document.getElementById("action" + i + "a_" + myVars.id), {x: '50%', y: '50%'}),
                                LeaderLine.pointAnchor(document.getElementById("action" + i + "b_" + myVars.id), {x: '50%', y: '50%'}),
                                {color: "blue", path: "straight", size: 0.6 * radius, dash: true}
                            );
                            myVars.lines.push(line);
                        };
                    }
                } else {
                    // if no teams, use solid arrows
                    if (data[i].type === "pass") {
                        // create red arrow for pass
                        // Leaderline library call. Available at https://anseki.github.io/leader-line/
                        window.dispatchEvent(new Event('resize'));
                        const line = new LeaderLine(
                            LeaderLine.pointAnchor(document.getElementById("action" + i + "a_" + myVars.id), {x: '50%', y: '50%'}),
                            LeaderLine.pointAnchor(document.getElementById("action" + i + "b_" + myVars.id), {x: '50%', y: '50%'}),
                            {color: "red", path: "straight", size: 0.6 * radius}
                        );
                        myVars.lines.push(line);
                    } else if (data[i].type === "dribble") {
                        // create blue arrow for dribble
                        // Leaderline library call. Available at https://anseki.github.io/leader-line/
                        window.dispatchEvent(new Event('resize'));
                        const line = new LeaderLine(
                            LeaderLine.pointAnchor(document.getElementById("action" + i + "a_" + myVars.id), {x: '50%', y: '50%'}),
                            LeaderLine.pointAnchor(document.getElementById("action" + i + "b_" + myVars.id), {x: '50%', y: '50%'}),
                            {color: "blue", path: "straight", size: 0.6 * radius}
                        );
                        myVars.lines.push(line);
                    }
                }
                
            } else {
                // create action
                const action = $( "<div/>", {
                    "class": "action",
                    id: "action" + i + "_" + myVars.id
                });
                action.addClass(data[i].type);
                action.addClass("circle");

                action.appendTo("#actionContainer" + myVars.id);

                // set position and size
                $("#action" + i + "_" + myVars.id).css({
                    top: scale(data[i].y) - radius,
                    left: scale(data[i].x) - radius,
                    width: 2*radius,
                    height: 2*radius
                });

                // create new class for new action type
                if (!myVars.types.includes(data[i].type)) {
                    const randomColor = Math.floor(Math.random()*16777215).toString(16);

                    $("."+data[i].type).css({
                        position: "absolute",
                        padding: "0px",
                        margin: "0px",
                        "background-color": "#"+randomColor // random colour for new class
                    });

                    myVars.types.push(data[i].type);
                }

                // create new class for new team
                if (data[i].team) {
                    action.removeClass("circle");

                    if (!myVars.teams.includes(data[i].team)) {
                        myVars.teams.push(data[i].team);
                    }
                    if (data[i].team === myVars.teams[0]) {
                        // set circle shape for first team
                        action.addClass("circle");
                    } else {
                        // set square shape for second team
                        action.addClass("square");
                    }
                }

                // push empty string to myVars.lines
                myVars.lines.push("");
            }
        }
    }

    _self.createSlider = function(divID) {
        const radius = scale(0.75)/2;

        const sliderContainer = $( "<div/>", {
            "class": "sliderContainer",
            id: "sliderContainer" + myVars.id
        });
        sliderContainer.appendTo("#" + divID);

        sliderContainer.css({
            width: myVars.width,
        });

        // create slider
        const slider = $( "<input/>", {
            "class": "slider",
            id: "slider" + myVars.id
        });
        slider.appendTo("#sliderContainer" + myVars.id);
        
        slider.attr({
            type: "range",
            min: "0",
            max: myVars.data.length,
            value: myVars.data.length
        });

        slider.css({
            width: myVars.width,
            height: "10px"
        });

        // show value of slider
        const value = $("<p/>", {
            "class": "value",
            id: "value" + myVars.id
        }).html("Action: ");
        value.appendTo("#sliderContainer" + myVars.id);
        const output = $("<span/>", {
            id: "output" + myVars.id
        });
        output.appendTo("#value" + myVars.id);

        output.html(slider.attr("value"));

        // on input, show actions up to value of slider and hide actions greater than value of slider
        slider.on("input", function() {
            output.html(this.value);

            for (var i = 0; i < myVars.data.length; i++) {
                if (i >= this.value) {
                    // hide action elements or lines on court
                    if (myVars.data[i].type === "pass" || myVars.data[i].type === "dribble") {
                        // Leaderline library call to hide the arrows. Available at https://anseki.github.io/leader-line/
                        myVars.lines[i].hide();
                    } else {
                        $("#action" + i + "_" + myVars.id).hide();
                    }

                    // hide timeline elements
                    if ($("#timelineContainer" + myVars.id).length) {
                        $("#time" + i + "_" + myVars.id).hide();
                        $("#description" + i + "_" + myVars.id).hide();
                    }                    
                } else {
                    if (myVars.data[i].type === "pass" || myVars.data[i].type === "dribble") {
                        // show line
                        // Leaderline library call to show the arrows. Available at https://anseki.github.io/leader-line/
                        myVars.lines[i].show();

                        // remove outlines from all other lines on court
                        for (var j = 0; j < myVars.lines.length; j++) {
                            if (myVars.lines[j] !== "") {
                                // Leaderline library call. Available at https://anseki.github.io/leader-line/
                                myVars.lines[j].setOptions({
                                    dropShadow: false,
                                });
                            }
                        }

                        // add outline for current line
                        // Leaderline library call to create a blue highlight around the arrow. Available at https://anseki.github.io/leader-line/
                        myVars.lines[i].setOptions({
                            dropShadow: true,
                            dropShadow: {color: 'blue', dx: 0, dy: 0, opacity: 1, blur: 5}
                        });

                        // // remove highlight from all other actions on court
                        $(".action[id$='_" + myVars.id + "']").css({
                            "box-shadow": "none"
                        });
                    } else {
                        // show action element on court
                        $("#action" + i + "_" + myVars.id).show()

                        // // remove highlight from all other actions on court
                        $(".action[id$='_" + myVars.id + "']").css({
                            "box-shadow": "none"
                        });

                        // highlight current action on court
                        $("#action" + i + "_" + myVars.id).css({
                            "box-shadow": "0 0 0 6px lightblue"
                        });

                        // remove outline from all lines on court
                        for (var j = 0; j < myVars.lines.length; j++) {
                            // Leaderline library call to remove the blue highlight around the arrow. Available at https://anseki.github.io/leader-line/
                            if (myVars.lines[j] !== "") {
                                myVars.lines[j].setOptions({
                                    dropShadow: false,
                                });
                            }
                        }
                    }

                    // show timeline elements
                    if ($("#timelineContainer" + myVars.id).length) {
                        $("#time" + i + "_" + myVars.id).show();
                        $("#description" + i + "_" + myVars.id).show();

                        // remove highlight from all other time and description in timeline
                        $(".time[id$='_" + myVars.id + "']").css({
                            "background-color": "white"
                        });
                        $(".description[id$='_" + myVars.id + "']").css({
                            "background-color": "white"
                        });

                        // highlight current time and description in timeline
                        $("#time" + i + "_" + myVars.id).css({
                            "background-color": "lightblue"
                        });
                        $("#description" + i + "_" + myVars.id).css({
                            "background-color": "lightblue"
                        });

                        // always scroll to bottom
                        $("#timelineContainer" + myVars.id).scrollTop($("#timelineContainer" + myVars.id)[0].scrollHeight);
                    }
                }
            }
        });

        if (myVars.data[myVars.data.length-1].type === "pass" || myVars.data[myVars.data.length-1].type === "dribble") {
            // highlight last line on court
            // Leaderline library call to create a blue highlight around the arrow. Available at https://anseki.github.io/leader-line/
            myVars.lines[myVars.data.length-1].setOptions({
                dropShadow: true,
                dropShadow: {color: 'blue', dx: 0, dy: 0, opacity: 1, blur: 5}
            });
        } else {
            // highlight last action on court
            $("#action" + (myVars.data.length-1) + "_" + myVars.id).css({
                "box-shadow": "0 0 0 6px lightblue"
            });
        }
    }

    _self.createTimeline = function(width, height, divID) {
        const timelineContainer = $( "<div/>", {
            "class": "timelineContainer",
            id: "timelineContainer" + myVars.id
        });
        timelineContainer.appendTo("#" + divID);

        timelineContainer.css({
            width: width,
            height: height,
        });

        const timelineHeader = $( "<div/>", {
            "class": "timelineHeader",
        }).html("<strong> Quarter | Time </strong>")
        timelineHeader.appendTo("#timelineContainer" + myVars.id);

        for (var i = 0; i < myVars.data.length; i++) {
            // create time
            const time = $( "<h3/>", {
                "class": "time",
                id: "time" + i + "_" + myVars.id
            });

            // create description
            const description = $( "<div/>", {
                "class": "description",
                id: "description" + i + "_" + myVars.id
            });

            time.html(myVars.data[i].period + " | " + myVars.data[i].time);
            description.html("<span>" + myVars.data[i].description + "</span>");

            time.appendTo("#timelineContainer" + myVars.id);
            description.appendTo("#timelineContainer" + myVars.id);
        }

        if ($("#sliderContainer" + myVars.id).length) {
            // highlight last time and description in timeline
            $("#time" + (myVars.data.length - 1) + "_" + myVars.id).css({
                "background-color": "lightblue"
            });
            $("#description" + (myVars.data.length - 1) + "_" + myVars.id).css({
                "background-color": "lightblue"
            });
        }

        // add break
        $("<br></br>").appendTo("#timelineContainer" + myVars.id);

        // always scroll to bottom
        $("#timelineContainer" + myVars.id).scrollTop($("#timelineContainer" + myVars.id)[0].scrollHeight);

    }

    _self.setColour = function(type, colour) {
        // set color of lines or actions
        if (type === "pass" || type === "dribble") {
            for (var i = 0; i < myVars.data.length; i++) {
                if (myVars.data[i].type === type) {
                    // Leaderline library call to change the colour of the arrow. Available at https://anseki.github.io/leader-line/
                    myVars.lines[i].setOptions({
                        color: colour,
                    });
                }
            }
        } else {
            $("." + type).css({
                "background-color": colour
            });
        }        
    }

    _self.setShape = function(team, shape) {
        // set shape of actions for each team (circle, square, triangle-up)
        for (var i = 0; i < myVars.data.length; i++) {
            if (myVars.data[i].type !== "pass" || myVars.data[i].type !== "dribble") {
                if (myVars.data[i].team === team) {
                    $("#action" + i + "_" + myVars.id).removeClass("circle square triangle-up");
                    $("#action" + i + "_" + myVars.id).addClass(shape);

                    // triangle-up
                    const radius = scale(0.75)/2;
                    const colour = $("#action" + i + "_" + myVars.id).css("background-color")

                    if (shape === "triangle-up") {
                        $("#action" + i + "_" + myVars.id).removeClass(myVars.data[i].type);

                        $("#action" + i + "_" + myVars.id).css({
                            width: 0,
                            height: 0,
                            "border-left": 1*radius + "px solid transparent",
                            "border-right": 1*radius + "px solid transparent",
                            "border-bottom": 2*radius + "px solid " + colour,
                        });
                    }
                }
            }
        }      
    }

    _self.createPopup = function() {
        for (var i = 0; i < myVars.data.length; i++) {
            if (myVars.data[i].type === "pass" || myVars.data[i].type === "dribble") {
                if (!myVars.data[i].team && !myVars.data[i].player) {
                    $("#action" + i + "a_" + myVars.id).addClass("popup");
                    $("#action" + i + "a_" + myVars.id).html("<span class='popuptext'>" + myVars.data[i].type  + "</span>");
                } else if (!myVars.data[i].team) {
                    $("#action" + i + "a_" + myVars.id).addClass("popup");
                    $("#action" + i + "a_" + myVars.id).html("<span class='popuptext'>" + myVars.data[i].player + 
                    "<div>" + myVars.data[i].type + "</div>" + "</span>");
                } else if (!myVars.data[i].player) {
                    $("#action" + i + "a_" + myVars.id).addClass("popup");
                    $("#action" + i + "a_" + myVars.id).html("<span class='popuptext'>" + myVars.data[i].team + 
                    "<div>" + myVars.data[i].type + "</div>" + "</span>");
                } else {
                    $("#action" + i + "a_" + myVars.id).addClass("popup");
                    $("#action" + i + "a_" + myVars.id).html("<span class='popuptext'>" + myVars.data[i].team + " | " + myVars.data[i].player + 
                    "<div>" + myVars.data[i].type + "</div>" + "</span>");
                }
            } else {
                if (!myVars.data[i].team && !myVars.data[i].player) {
                    $("#action" + i + "_" + myVars.id).addClass("popup");
                    $("#action" + i + "_" + myVars.id).html("<span class='popuptext'>" + myVars.data[i].type  + "</span>");
                } else if (!myVars.data[i].team) {
                    $("#action" + i + "_" + myVars.id).addClass("popup");
                    $("#action" + i + "_" + myVars.id).html("<span class='popuptext'>" + myVars.data[i].player + 
                    "<div>" + myVars.data[i].type + "</div>" + "</span>");
                } else if (!myVars.data[i].player) {
                    $("#action" + i + "_" + myVars.id).addClass("popup");
                    $("#action" + i + "_" + myVars.id).html("<span class='popuptext'>" + myVars.data[i].team + 
                    "<div>" + myVars.data[i].type + "</div>" + "</span>");
                } else {
                    $("#action" + i + "_" + myVars.id).addClass("popup");
                    $("#action" + i + "_" + myVars.id).html("<span class='popuptext'>" + myVars.data[i].team + " | " + myVars.data[i].player + 
                    "<div>" + myVars.data[i].type + "</div>" + "</span>");
                }
            }
        }
    }

	return _self;
}
