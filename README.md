# Wordle Clone

A simple clone of the popular New York Times game [Wordle](https://www.nytimes.com/games/wordle/index.html) built in React. This project mimics the popular word-guessing game where players have six chances to guess a hidden five-letter word.

## Features
- **Word Guessing**: Guess the correct word within six attempts.
- **Color Feedback**: Letters are highlighted to indicate correctness (green for correct letter and position, yellow for correct letter but wrong position, gray for incorrect letters).
- **Responsive Design**: Play on any device with a responsive layout.
- **Simple and Clean UI**: Easy to use and visually appealing.

## Demo
Check out the live demo at [demo link](https://wordle-clone-04zv.onrender.com).

## Technologies
- **React** - Frontend library for building user interfaces.
- **CSS** - For styling the application.
- **Django** - RESTful API back-end for handling requests from the client. Repository can be found at [Wordle-Clone-API](https://github.com/dblackman95/Wordle-Clone-API).
  - **Django Rest Framework** - Django framework for configuring and hosting RESTful API endpoints. Django Rest Framework information can be found at [Django Rest Framework](https://github.com/encode/django-rest-framework).
- **JSON Server** - Can be configured to use JSON Server. Emulates a RESTful API back-end for handling requests from the client. Source code can be found at [JSON Server](https://github.com/typicode/json-server/tree/v0).
- **Create React App** - Boilerplate setup for React applications.

## Usage
1. Open the application in your browser.
2. Type your five-letter guesses into the input box and hit Enter.
3. Observe the color-coded feedback to help refine your guesses.
4. Continue guessing until you either find the correct word or exhaust your six attempts.
