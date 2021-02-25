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

    date:""

  },

  {
    quote:`You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential`, 
    
    source:"David Goggins, Can't Hurt Me",

    date:""

  },

  {
    quote: `People don’t buy what you do; they buy why you do it. And what you do simply proves what you believe.`,

    source: `Simon Sinek`,

    date:""
  }

];

let usedQuotes = [];
let prevRandomNum;
let randomNumber = (highNum) => Math.floor(Math.random() * highNum);


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomQuote = quotes[randomNumber(quotes.length)];
  let quoteID = quotes.indexOf(randomQuote);
  if (quoteID !== prevRandomNum)  {
    prevRandomNum = quoteID;
    document.getElementById('source').innerHTML = randomQuote.source;
    return randomQuote;
  } else {
    return getRandomQuote();
  }
}

function changeBackgroundColor()  {
  document.getElementById('body').style.backgroundColor = `rgba(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)}, 0.3)`

}

/***
 * `printQuote` function
***/
let printQuote = () => {
  changeBackgroundColor();
  document.getElementById('quote').innerHTML = getRandomQuote().quote;
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
