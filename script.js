function displayGif() {
    var input = document.getElementById("input").value;
    var gifContainer = document.getElementById("gif-container");
    gifContainer.innerHTML = "";

    var sum = 0;
    if (typeof input === "number") {
        input = input.toString();
    }
    for (var i = 0; i < input.length; i++) {
        sum += parseInt(input[i]);
    }
    
    var validInputs = [
    "7", 
    "Dhoni", "DHONI", "dhoni", 
    "THALA", "thala", "Thala",
    "MSD", "msd", "Msd",
    "Sakshi", "sakshi", "SAKSHI", 
];
    if (validInputs.includes(input)) {
        gifContainer.innerHTML = '<video width="500px" height="500px" controls="controls" src="bolejokoyal.mp4">'
        var audio = new Audio('thala.mp3');
        audio.play();
    } else {
        gifContainer.innerHTML = '<img src="gg_dhoni.gif">';
    }
}