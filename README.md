# The Ultimate Color Matching Machine

Phorest Graduate Programme Technical Challenge

Problem:
We are going to create a virtual fruit machine. To make things easier instead of symbols we are going to use colours: black, white, green, yellow.
Each time a player plays our fruit machine we display four 'slots' each with a randomly selected colour in each slot.
If the colours in each slot are the same then the player wins the jackpot which is all of the money that is currently in the machine.
Implement a basic machine, along with the concept of a player who has a fixed amount of money to play the machine.

Solution:
You can choose between two options to complete this challenge

1. In a Javascript framework of your preference or Vanilla Javascript, implement a web client that:
a. Displays the four slots
b. Allows the user to play the game
c. Alerts the user if they won or lost.
d. Increases/Decreases money in the machine

2. Implement the game API in any backend framework(Java, Ruby etc.) of your preference which
a. Can be called to play the game
b. Returns the 4 slot colours
c. Returns a win or lose status.
d. Increases/Decreases the money in the machine

Success Criteria:
- Clean code
- Documentation
- Automated tests
- The path to your solution, please share with us your solution on Github with the history of your steps.

## Overview

Looking at the challenge requirements, I have decided to take the first approach which is built a frontend application using Vanilla JavaScript.

The project can be divided into four sections:

- Display the four slots.
- A play button to start the game.
- A popup to inform the user lose/win.
- Bank the money for each play, and display the jackpot amount when a user wins.

## [Contents](#contents)

[UX](#ux)

- [User stories](#user-stories)

- [Design](#design)

- [Wireframes](#wireframes)

[Features](#features)

[Technoloies Used](#technologies-used)

[Deployment](#deployment)

[Testing](#testing)

[Credits](#credits)

## Livesite

## UX

### User stories

Overall user expectations

- Easy to navigate/play
- Intuitive
- Visually pleasing

|As a...  |I want to... |So I can... |
|-----|---|---|
| user|Immediately understand the purpose of the site| Decide whether to stay or leave|
|  | Find the rules of how to play the game | Know how to play|
|  | Be informed win/lose after each play| Know if win/lose|
|  | Be informed how much did I win | Know the amount of the money has been won|

### Design

Color Scheme 

Although the design part of this challenge isn't very important, I still picked a main color scheme idea just to have it at the back of my mind. And also for future refenrences if I am going to develop it further.

![color-pallatte](images/color-pallatte.png)

### Wireframes

![wireframe](images/wireframe.png)

## Features

- Rules (clickable popup)
- Win/lose display
- Slots display
- play button

## Technologies Used

- HTML
- CSS
- Vanilla JavaScipt

## Deployment

- Github pages

## Testing

## Credits

- stack overflow 

[Random Color From Array](https://stackoverflow.com/questions/14949011/random-color-from-array)

[Check if all values of array are equal](https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal)

- youtube 

[Slot Machine game](https://www.youtube.com/watch?v=QdnzQTGF1xc)