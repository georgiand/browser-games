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





### 🫘 Bantumi
**Path:** `games/bantumi/index.html`

Nokia 3410-style Mancala/Kalah sowing game against the phone, with a handset-like UI.

- **Rules:** Extra turns from landing in your store, empty-pit captures, end-game sweeping
- **AI:** Simple heuristic phone opponent that looks for extra turns and strong pits
- **Controls:** Click/tap lower pits, number keys 1–6, or Nokia-style navigation + OK

### 🔳 Link5
**Path:** `games/link5/index.html`

Link5 five-in-a-row strategy game against selectable phone AI.

- **Goal:** Link five marks horizontally, vertically, or diagonally
- **AI difficulty:** Easy, Medium, Hard
- **Easy:** Random legal moves
- **Medium:** Immediate win/block plus shape and centre scoring
- **Hard:** Immediate tactics plus bounded alpha-beta search over strongest candidate moves
- **Controls:** Cursor + OK, arrow keys/Enter, or direct click/tap

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
