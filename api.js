const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc

console.log("Welcome to The New York Times chat bot!")
console.log("choose a year and month combo below: ")

const choice = prompt("Enter a year: ")
const choice2 = prompt("Enter a month: ")

const url = 'https://api.nytimes.com/svc/archive/v1'

async function fetchNYT() {
    
    const response = await fetch(`https://api.nytimes.com/svc/archive/v1/${choice}/${choice2}.json?api-key=h7b6Zwq7GQYxuJUQ4GfIv3xkVT9Jcxyn`)
    const data = await response.json()
console.log(data)
    }

    fetchNYT()
   