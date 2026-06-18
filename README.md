# TopSOUL Games

A growing collection of browser games — no install, no account, just open and play.

Live at: https://georgiand.github.io/browser-games/ (GitHub Pages)

---

## Games

### 🐍 Snake (v3.0)
**Path:** `games/snake/index.html`

A fully-featured Snake game built with HTML5 Canvas and Vanilla JavaScript.

- **Difficulty levels:** Slow, Medium, Fast, Insane
- **Game modes:** Wrap mode (walls wrap) and Standard mode (walls kill)
- **High scores:** Persistent, tracked separately for all 8 difficulty/mode combos
- **Day/Night toggle:** Two visual themes
- **Sound effects:** Eat and game-over audio
- **Pause/Resume:** Space bar, with blur overlay
- **Mobile:** Swipe controls on canvas

### ❌ Tic Tac Toe
**Path:** `games/tic-tac-toe/index.html`

Classic tic tac toe against an AI opponent.

- **AI difficulty:** Easy, Medium, Hard
- **Easy:** Random legal moves
- **Medium:** Tactical wins/blocks plus centre/corner preference
- **Hard:** Minimax optimal play
- **Scoreboard:** Tracks wins, losses, and draws during the session

### 🔴 4 in a Row
**Path:** `games/four-in-a-row/index.html`

Connect-four style strategy game with gravity-based disc drops.

- **AI difficulty:** Easy, Medium, Hard
- **Easy:** Random legal columns
- **Medium:** Immediate wins, blocks, and centre-column preference
- **Hard:** Alpha-beta minimax with positional evaluation
- **Responsive:** Playable on desktop and mobile-sized screens

### ⚫ Reversi
**Path:** `games/reversi/index.html`

Reversi/Othello-style disc-flipping strategy game.

- **AI difficulty:** Easy, Medium, Hard
- **Easy:** Random legal moves
- **Medium:** Corner preference and greedy flips
- **Hard:** Minimax with mobility, corner, and positional weighting
- **Rules support:** Legal-move hints, passes, and end-game scoring


### 📱 Snake II
**Path:** `games/snake-ii/index.html`

Nokia 3410-inspired Snake II homage.

- **Gameplay:** Edge collisions, self-collision, food, and timed bonus pickups
- **Controls:** Arrow keys/WASD plus on-screen direction buttons
- **Best score:** Persisted locally in the browser

### 🚀 Space Impact
**Path:** `games/space-impact/index.html`

Monochrome side-scrolling shooter inspired by the Nokia classic.

- **Gameplay:** Move vertically, fire shots, destroy incoming enemies
- **Controls:** Arrow keys/WASD, Space, and on-screen controls
- **Scoring:** Points for each enemy destroyed; three lives per sortie

### ⚪ Bumper
**Path:** `games/bumper/index.html`

Pocket pinball-style score chase.

- **Gameplay:** Paddle, ball physics, bumpers, score, and limited balls
- **Controls:** Left/right keyboard controls plus touch buttons
- **Scoring:** Bumpers and paddle saves add points

### 🫘 Bantumi
**Path:** `games/bantumi/index.html`

Mancala/Kalah-style sowing game against the phone.

- **Rules:** Extra turns from landing in your store, empty-pit captures, end-game sweeping
- **AI:** Simple heuristic phone opponent that looks for extra turns and strong pits
- **Controls:** Click/tap one of your six lower pits

### 🔳 Link5
**Path:** `games/link5/index.html`

Five-in-a-row strategy game against a compact blocking AI.

- **Goal:** Link five marks horizontally, vertically, or diagonally
- **AI:** Takes immediate wins, blocks immediate losses, then favours central/connected moves
- **Controls:** Click/tap any empty square

---

## Structure

```
index.html                    ← Games portal (main landing page)
games/
  shared/
    strategy.css              ← Shared styling for board strategy games
    nokia.css                 ← Shared Nokia 3410-inspired styling
  snake/
    index.html                ← Snake game
  tic-tac-toe/
    index.html                ← Tic Tac Toe
  four-in-a-row/
    index.html                ← 4 in a Row
  reversi/
    index.html                ← Reversi
  snake-ii/
    index.html                ← Snake II
  space-impact/
    index.html                ← Space Impact
  bumper/
    index.html                ← Bumper
  bantumi/
    index.html                ← Bantumi
  link5/
    index.html                ← Link5
README.md
```

Adding a new game:
1. Create `games/<name>/index.html`
2. Add a card to the portal `index.html` games grid
3. Increment the section count badge
4. Update this README

---

## Development

No build step — pure HTML/CSS/JS. Open any file directly in a browser.

---

*Developed by TopSOUL & Claire*
