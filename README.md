# ChatBot

Created a basic server which runs a basic chatbot
  
## Requirements
- npm and node installed
- express
- postman client

## Calling the service

- In terminal : Goto ChatBot directory
- Run : node ./server
- In Postman goto URL : localhost:8000/
- Select the request type as POST 
- In request body :Select type as "Application/Json"
- In request body :Add a JSON object as { "message" : "your_message" }
where "your_message" should replace the message you want to give to chatbot
