const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc

console.log("Welcome to the Chat GPT chat bot!")
console.log("What can I help you with?")

const choice = prompt("Ask me anything: ")

// console.log('Fetching response_id')

const url = 'https://api.openai.com/v1/responses'

async function fetchAI() {
    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' +apiKey,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            "model": "gpt-4.1",
            "input": choice
        })
    }
    const response = await fetch("https://api.openai.com/v1/responses" ,options)

    const data = await response.json()
}