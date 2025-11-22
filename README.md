# 🎯 Tic Tac Toe Game

A modern, responsive Tic Tac Toe game built with vanilla JavaScript, featuring a beautiful gradient background and smooth gameplay experience.

## ✨ Features

- 🎨 **Modern UI** - Beautiful gradient background with glass-morphism design
- 📱 **Fully Responsive** - Works on all device sizes
- ⚡ **Fast & Lightweight** - Pure JavaScript, no dependencies
- 🎮 **Smooth Gameplay** - Intuitive click-to-play interface
- 🏆 **Win Detection** - Automatic win and tie detection
- 🔄 **Game Reset** - One-click new game functionality
- 🎯 **Visual Feedback** - Winning combinations highlighted in green

## 🚀 How to Play

1. **Start**: Player X always goes first
2. **Take Turns**: Click any empty box to place your mark (X or O)
3. **Objective**: Get three of your marks in a row (horizontally, vertically, or diagonally)
4. **Win**: First player to get three in a row wins!
5. **Tie**: If all boxes are filled with no winner, the game is tied
6. **New Game**: Click "New Game" to restart anytime

## 🛠️ Installation

1. Clone or download the project files
2. Ensure you have the following file structure:
   ```
   tic-tac-toe/
   ├── index.html
   ├── style.css
   ├── script.js
   └── assets/
       └── gradient-bg.jpg
   ```
3. Open `index.html` in your web browser
4. Start playing!

## 📁 Project Structure

### HTML (`index.html`)
- Semantic structure with proper meta tags
- Google Fonts integration for typography
- 3x3 game grid with unique box classes
- Modular script and style linking

### CSS (`style.css`)
- Modern CSS reset with box-sizing
- Responsive grid layout
- Glass-morphism design effects
- Smooth transitions and hover states
- Winning state highlighting

### JavaScript (`script.js`)
- **DOM Manipulation**: Efficient element selection and updates
- **Game Logic**: Win detection, turn management, tie checking
- **Event Handling**: Click events for boxes and reset button
- **State Management**: Track current player and game board

## 🎮 Game Logic

### Core Functions

- `initGame()` - Initializes or resets the game state
- `handleClick(index)` - Processes player moves
- `swapTurn()` - Alternates between Player X and O
- `checkGameOver()` - Detects wins and ties
- Win detection using 8 possible winning combinations

### Winning Combinations
The game checks for wins across:
- 3 horizontal rows
- 3 vertical columns  
- 2 diagonal lines

## 🎨 Customization

### Easy Color Changes
Modify the CSS variables in `style.css`:
```css
.win {
  background-color: rgba(0, 255, 0, 0.3); /* Change highlight color */
}

.tic-tac-toe {
  background-color: rgba(255, 255, 255, 0.15); /* Change board opacity */
}
```

### Styling Adjustments
- Change fonts in the `font-family` declaration
- Modify border radii in `.game-info` and `.btn`
- Adjust spacing with padding and margin values

## 🌟 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🔧 Technical Details

- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **ES6+ Features**: Arrow functions, template literals, destructuring
- **CSS Grid**: Modern layout system for the game board
- **Event Delegation**: Efficient event handling
- **Responsive Design**: Flexbox and Grid for adaptability

## 🐛 Troubleshooting

**Game not working?**
- Check browser console for errors
- Ensure all files are in correct locations
- Verify JavaScript is enabled in browser

**Styling issues?**
- Confirm `gradient-bg.jpg` exists in assets folder
- Check CSS file path in HTML head

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 🎯 Future Enhancements

- Score tracking across multiple games
- Player name customization
- Difficulty levels (vs AI)
- Sound effects
- Animation improvements

---

**Enjoy playing!** 🎮 Built with 💙 using vanilla JavaScript.
