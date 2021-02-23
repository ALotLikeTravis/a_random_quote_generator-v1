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

let usedQuotes = [];
let prevRandomNum;
let randomNumber = () => Math.floor(Math.random() * quotes.length);

/***
 * `getRandomQuote` function
***/
// let getRandomQuote = () => {
//   for (let i = 0; i < quotes.length; i++) {
//     let repeat = false;
//     let randomQuote = quotes[randomNumber()];
//     let randomIndex = quotes.indexOf(randomQuote);
//     if (randomQuote.indexOf === randomIndex) {
//       console.log(randomQuote.indexOf);
//       console.log(randomIndex);
//       repeat = true;
//       if (repeat === true) {
//         continue;
//       }
//     } else if(repeat === false) {
//       console.log(randomNumber());
//       console.log(randomIndex);
//       console.log(repeat);
//       return randomQuote;
//     }
//   }
// };
//console.log(quotes)

// let getRandomQuote = () => {
//   let randomQuote = quotes[randomNumber()];
//   //let quoteID = quotes.indexOf(randomQuote);
//   for (let i = 0; i < 10; i++) {
//     quotes = quotes;
//     let quoteID = quotes.indexOf(randomQuote);
//     console.log(quotes);
//     if(quotes.length == 0)  {
//       quotes += usedQuotes.push();
//     } else if (quotes.length !== 0) {
//       usedQuotes = quotes.splice(quoteID, quotes.length );
//       return randomQuote;
//     }
//   } 
// }

function getRandomQuote() {
  let randomQuote = quotes[randomNumber()];
  let quoteID = quotes.indexOf(randomQuote);
  console.log(quoteID);
  if (quoteID !== prevRandomNum)  {
    prevRandomNum = quoteID;
    return randomQuote;
  } else {
    console.log(`You're failing, Travis. Please do better.`);  
    getRandomQuote();
  }
}

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
