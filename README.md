# Crypto App

Crypto App is a React Single Page application which displays a list of cryptocurrency pairings and details.

Home page ('/') displays the List of cryptocurrency markets

MarketItem page ('/marketItem') displays details specific to the cryptocurrency market chosen, Below details are displayed to the User
* `BID`
* `BID SIZE`
* `ASK`
* `ASK SIZE`
* `DAILY CHANGE`
* `LAST PRICE`
* `VOLUME`

## Technology Stack
* Bootstrap
* ReactJs

## Installation
### Requirements
* Node.Js server
* Node Package Manager

## Local Testing
```bash
npm start
# App starts on port 3000 and Opens the UI in a default browser window for local testing
```

## Unit Testing
```bash
npm test
```

## Notes
* This app displays static list of market symbols (trading and funding), Ideal approach is to fetch the list of market items from API and display as a Links.
  
