/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes =  [
  {
    quote:`A leader must be attentitive to details, but not obssessed with them. They must be strong, but have endurance. A leader must be humble, but not passive. They must be close to subordinates, but not too close. A leader must exercise ‘extreme ownership’, but employ ‘decentralized command’. They must have nothing to prove, but everything to prove.`, 
    
    source:"Jocko Willink",

  },

  {
    quote:`You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential`, 
    
    source:"David Goggins, Can't Hurt Me",

  }

];

let randomNumber = () => Math.floor(Math.random() * quotes.length);

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return randomNumber;
}



// do {
//   let repeat = false;
//   if (randomNumber() === randomIndex) {
//     // console.log(randomNumber());
//     // console.log(randomIndex);
//     repeat = true;
//     // break;
//   } else if(repeat === false) {
//     return randomQuote;
//   }
// } while (repeat === true)

/***
 * `getRandomQuote` function
***/
let getRandomQuote = () => {
//   let repeat = false;
//   let randomQuote = quotes[getRandomNumber()];
//   let randomIndex = quotes.indexOf(randomQuote);
//   if (randomNumber() === randomIndex) {
//     // console.log(randomNumber());
//     // console.log(randomIndex);
//     repeat = true;
//     //break;
//   }
  
  // let repeat = false;
  // do {
  //   let randomQuote = quotes[getRandomNumber()];
  //   let randomIndex = quotes.indexOf(randomQuote);
  //   if (randomNumber() === randomIndex) {
  //     // console.log(randomNumber());
  //     // console.log(randomIndex);
  //     repeat = true;
  //     //break;
  //   } else if(repeat === false) {
  //     return randomQuote;
  //   }
  // } while (repeat === false)
  // let repeat = false;
  // do {
  //   let randomQuote = quotes[getRandomNumber()];
  //   let randomIndex = quotes.indexOf(randomQuote);
  //   if (randomNumber() === randomIndex) {
  //     // console.log(randomNumber());
  //     // console.log(randomIndex);
  //     repeat = true;
  //     //break;
  //   } else if(repeat === false) {
  //     return randomQuote;
  //   }
  // } while (repeat === false)
  for (let i = 0; i < 100; i++) {
    let repeat = false;
    let randomQuote = quotes[getRandomNumber()];
    let randomIndex = quotes.indexOf(randomQuote);
    if (randomNumber() === randomIndex) {
      console.log(randomNumber());
      console.log(randomIndex);
      repeat = true;
      break;
    } else if(repeat === false) {
      console.log(randomNumber());
      console.log(randomIndex);
      return randomQuote;
    }
  }
  // let randomQuote = quotes[getRandomNumber()];
  // let randomIndex = quotes.indexOf(randomQuote);
  // console.log(randomIndex);
  // if (randomNumber() !== randomIndex) {
  //   console.log(randomNumber());
  //   console.log(randomIndex);
  //   return randomQuote;
  // } 
};


/***
 * `printQuote` function
***/
let printQuote = () => {
  document.getElementById('quote').innerHTML = getRandomQuote().quote;
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
