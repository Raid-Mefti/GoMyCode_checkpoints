var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
}
console.log(data);
});

/*
Calling the figlet object as a function is shorthand for calling the text function. 
This method allows you to create ASCII Art from text. 
It takes in 3 parameters:

Input Text - A string of text to turn into ASCII Art.
Options - Either a string indicating the font name or an options object (description below).
Callback - Optional function to execute with the generated ASCII Art.
Return value is a promise that resolves to generated ASCII Art.
*/

/*
figlet.text(
    "Boo!",
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );
*/

/*




// Car ASCII art
const car1 = `
     ______
    /|_||_\\'__. 
   (   _    _ _\\
   ='-(_)--(_)-'
`;

const car2 = `
     ______
    /|_||_\\'__. 
   (   o    o _\\
   ='-(_)--(_)-'
`;

// Dancing winner ASCII frames
const dancerFrames = [
    `
     O  
    /|\\ 
    / \\ 
   WINNER!`,
    `
     \\O/ 
      |  
     / \\ 
   WINNER!`,
    `
     O  
    /|\\ 
    / \\ 
   WINNER!`,
    `
    \\O/ 
     |  
    / \\ 
   WINNER!`
];

let car1Position = 0;
let car2Position = 0;

const raceAnimation = setInterval(() => {
    console.clear();

    // Race Title
    console.log(figlet.textSync('Car Race!', { font: 'Standard' }));

    car1Position += 2;  
    car2Position += 1; 

    // Display the cars at their respective positions
    console.log("Raid" + `- `.repeat(Math.floor(car1Position)) + car1);
    console.log("Moh" + '- '.repeat(Math.floor(car2Position)) + car2);

    // Check for a winner
    if (car1Position >= 50 || car2Position >= 50) {
        clearInterval(raceAnimation); // Stop the race animation
        const winner = car1Position > car2Position ? 'Car 1' : 'Car 2';
        startDancing(winner);
    }
}, 200); // Frame interval (200ms)

// Winner's dancing animation
function startDancing(winner) {
    let frameIndex = 0;
    const danceAnimation = setInterval(() => {
        console.clear();

        // Winner Announcement
        console.log(figlet.textSync(`Raid Wins!`, { font: 'Standard' }));
        console.log(figlet.textSync(`Moh sucks!`, { font: 'Standard' }));

        // Dancing Winner
        console.log(dancerFrames[frameIndex]);

        frameIndex = (frameIndex + 1) % dancerFrames.length; // Loop through frames

    }, 300); // Frame interval for dancing (300ms)

    setTimeout(() => {
        clearInterval(danceAnimation);
        console.clear();
        console.log(figlet.textSync('Race Over!', { font: 'Standard' }));
    }, 10000); // Stop dancing after 5 seconds
}
*/