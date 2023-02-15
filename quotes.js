const quotes = [
    {
        quote : "Derive happiness in oneself from a good day's work, from illuminating the fog that surrounds us.",
        author : "Henri Emile-Benoit Mattise",
    },

    {
        quote : "Creativity takes courage.",
        author : "Henri Emile-Benoit Mattise",
    },
    
    {
        qoute : "Everything we see hides another thing, we alwys want to see what is hidden by what we see.",
        author : "Rene Magritte",
    },

    {
        quote : "Sometimes when you innovate, you make Mistakes. It is nest to admit them Quickyl and get on with Improving your other Innovations.",
        author : "Steve Jobs",
    },

    {
        quote : "If you fell Down Yesterday, Stand up Today.",
        author : "H.G.Wells", 
    },

    {
        quote : "Everything you can imagine is real.",
        author : "Pablo Picasso",
    },

    {
        quote : "Nothing is more despicable than respect based on fear.",
        author : "Albert Camus",
    },

    {
        quote : "You can learn a little from victory.You can learn everything from defeat.",
        author : "Christy Mathewson",
    },

    {
        quote : "三人行, 必有我師焉",
        author : "孔子",
    },

    {
        quote : "Don't be so humble. You're not that great.",
        author : "Golda Meir",
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

