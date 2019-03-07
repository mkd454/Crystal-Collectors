# unit-4-game: CrystalsCollector Game

**What the project does**  
This project creates a game where the user must add up four crystals with random values to equal the value of the random number generated.

**Why the project is useful**  
This game can be enjoyed by people of all ages.

**How users can get started with the project**  
Users should read the instructions and then click on the crystals to begin the game.

**Where users can get help with your project**  
If you need assistance, please reach out to this email with your questions and concerns: <dangmaryk@gmail.com>.

**Who maintains and contributes to the project**  
Mary Dang  
Github Repository link: <https://github.com/mkd454/unit-4-game>  
Github page link: <https://mkd454.github.io/unit-4-game/>  
Bootstrap Portfolio link: <https://mkd454.github.io/Bootstrap-Portfolio/>

### Task List

Photo Reference: ![Crystal Collector](Images/1-CrystalCollector.jpg)

1. [Watch the demo](https://youtu.be/yNI0l2FMeCk).

2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

3. Here's how the app works:

   - [x] There will be four crystals displayed as buttons on the page.

   - [x] The player will be shown a random number at the start of the game.

   - [x] When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     - [x] Your game will hide this amount until the player clicks a crystal.
     - [x] When they do click one, update the player's score counter.

   - [x] The player wins if their total score matches the random number from the beginning of the game.

   - [x] The player loses if their score goes above the random number.

   - [x] The game restarts whenever the player wins or loses.

     - [x] When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   - [x] The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

   - [x] Add finished project to bootstrap portfolio.

##### Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.

- - -