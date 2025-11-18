const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc

console.log("Welcome to The New York Times chat bot!")
console.log("Pick a month and year combo below: ")
console.log("2025 November","2025 October","2025 September","2025 August")

const choice = prompt("Enter month and year: ")


const url = 'https://api.nytimes.com/svc/archive/v1/2024/1.json?api-key=yourkey'

async function fetchNYT() {
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' +apiKey,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            
        })
    }
    const response = await fetch("" ,options)

    const data = await response.json()
}