const quotes = [
  {
    quote: "When you think about anything, you have to start with a small task",
    author: "Bill Gates"
  },
  {
    quote: "First, Think. Second, believe. Third, dream, And finally, dare",
    author: "Walt Disney"
  },
  {
    quote: "A goal is a dream with a deadline",
    author: "Napoleon Hill"
  },
  {
    quote: "In order to succeed, your desire for success should be greater than fear of failure",
    author: "Bill Cosby"
  },
  {
    quote: "If you can imagine, you can achieve it, if you can dream it, you can become it",
    author: "William Arthur Ward"
  },
  {
    quote: "Setting goals is the first step in turning the invisible into the visible",
    author: "Tony Robins"
  },
  {
    quote: "Pleasure in the joy you puts Perfection in the Work",
    author: "Aristotle"
  },
  {
    quote: "Anything you really want, you can Attain, if you really go after it",
    author: "Wayne Dyer"
  },
  {
    quote: "Many people don't know how close they were to success when giving up",
    author: "Thomas Edison"
  },
  {
    quote: "Your willing for succeed is more important than anything else",
    
    author: "Abraham Lincoln"
  },
  


];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `${todaysQuotes.quote}`;
author.innerText = `- ${todaysQuotes.author}-`;