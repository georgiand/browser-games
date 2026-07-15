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
- **Scoreboard:** Persistent wins, losses, and draws stored locally per browser

### 🔴 4 in a Row
**Path:** `games/four-in-a-row/index.html`

Connect-four style strategy game with gravity-based disc drops.

- **AI difficulty:** Easy, Medium, Hard
- **Easy:** Random legal columns
- **Medium:** Immediate wins, blocks, and centre-column preference
- **Hard:** Alpha-beta minimax with positional evaluation
- **Record:** Persistent wins, losses, and draws stored locally per browser
- **Responsive:** Playable on desktop and mobile-sized screens

### ⚫ Reversi
**Path:** `games/reversi/index.html`

Reversi/Othello-style disc-flipping strategy game.

- **AI difficulty:** Easy, Medium, Hard
- **Easy:** Random legal moves
- **Medium:** Corner preference and greedy flips
- **Hard:** Minimax with mobility, corner, and positional weighting
- **Record:** Persistent wins, losses, and draws stored locally per browser
- **Rules support:** Legal-move hints, passes, and end-game scoring

### 🎲 Backgammon
**Path:** `games/backgammon/index.html`

Complete single-player Backgammon against a browser AI, with a responsive board and rule-aware move guidance.

- **Complete turn rules:** Opening roll with tie re-rolls, doubles as four moves, maximum-dice use, and the higher-die rule
- **Checker rules:** Bar-entry priority, blocked points, hits to the bar, bearing off, and legal oversize bear-offs
- **AI difficulty:** Easy picks a random complete legal turn; Medium scores hits, made points, safety, and bearing off; Hard searches bounded opponent replies across representative rolls
- **Scoring:** Persistent session wins and points, including normal, gammon, and backgammon results
- **Controls:** Click/tap source then highlighted destination, keyboard roll/undo/new-game shortcuts, and per-turn undo

### 💣 Minesweeper
**Path:** `games/minesweeper/index.html`

Classic Minesweeper with a sharper modern UI and the usual quiet distrust.

- **Difficulty levels:** Beginner (9×9 · 10), Intermediate (16×16 · 40), Expert (30×16 · 99)
- **Classic rules:** First click is safe, recursive empty clears, flags, and number chording
- **Pause:** Manual pause button plus blur-to-pause when the tab loses focus
- **High scores:** Persistent top 3 best times per difficulty in local storage

### ♠️ Solitaire
**Path:** `games/solitaire/index.html`

Draw-one Klondike Solitaire with full rules and a responsive card table.

- **Classic play:** Stock/waste recycling, alternating-colour tableau builds, valid multi-card runs, and ace-to-king foundations
- **Legal moves:** Invalid destinations are rejected with clear status feedback; empty tableau columns accept kings only
- **Undo:** Restores stock, waste, tableau, foundations, score, moves, and elapsed time
- **Tracking:** Classic-style score, persistent best score, timer, move count, and cards-home progress
- **Controls:** Click/tap source then destination, desktop drag-and-drop, double-click auto-foundation, and keyboard shortcuts





### 🫘 Bantumi
**Path:** `games/bantumi/index.html`

Bantumi/Mancala sowing game against selectable phone AI.

- **Rules:** Extra turns from landing in your store, empty-pit captures, end-game sweeping
- **AI difficulty:** Easy, Medium, Hard
- **Easy:** Random legal cups
- **Medium:** Prioritises extra turns, captures, then store gain
- **Hard:** Bounded minimax/alpha-beta over sowing outcomes
- **Controls:** Click/tap lower cups, number keys 1–6, or selection + OK/Enter
- **Record:** Persistent wins, draws, and losses stored locally per browser

### 🔳 Link5
**Path:** `games/link5/index.html`

Link5 five-in-a-row strategy game against selectable phone AI.

- **Goal:** Link five marks horizontally, vertically, or diagonally
- **AI difficulty:** Easy, Medium, Hard
- **Easy:** Random legal moves
- **Medium:** Immediate win/block plus shape and centre scoring
- **Hard:** Immediate tactics plus bounded alpha-beta search over strongest candidate moves
- **Controls:** Cursor + OK, arrow keys/Enter, or direct click/tap
- **Record:** Persistent wins, draws, and losses stored locally per browser

### ♟️ Chess
**Path:** `games/chess/index.html`

Full browser chess against a local Stockfish 18 WASM engine, designed to remain functional on a static GitHub Pages site.

- **Rules:** Legal movement, castling, en-passant, promotion picker, check/checkmate/stalemate/draw detection, FEN and SAN move history via chess.js
- **Modes and pause:** A launch panel selects Stockfish or a daily Easy/Medium/Hard puzzle before any clock starts; visible Pause/Resume button and `P` shortcut freeze clocks and all board input
- **Stockfish:** Local single-threaded WASM worker (Easy, Medium, Hard), engine hints, and optional position analysis
- **Clocks:** Untimed, 3-, 10-, and 15-minute games; choose White, Black, or Random
- **Daily puzzles:** One Easy, Medium, and Hard challenge, deterministically rotated from a bundled local puzzle set by UTC day; progress persists locally
- **Appearance:** Walnut, tournament-green, and midnight boards plus locally bundled Lichess Cburnett and Staunty SVG piece sets; settings stored in localStorage
- **Licensing:** Bundles chess.js BSD-2-Clause notice, Stockfish GPL-3.0-or-later source licence, and Lichess AGPL-3.0 copying notice for the piece assets

---

## Structure

```
index.html                    ← Games portal (main landing page)
games/
  shared/
    strategy.css              ← Shared styling for board strategy games
    nokia.css                 ← Shared retro screen styling for Bantumi and Link5
  snake/
    index.html                ← Snake game
  tic-tac-toe/
    index.html                ← Tic Tac Toe
  four-in-a-row/
    index.html                ← 4 in a Row
  reversi/
    index.html                ← Reversi
  backgammon/
    index.html                ← Backgammon
  minesweeper/
    index.html                ← Minesweeper
  solitaire/
    index.html                ← Klondike Solitaire
  bantumi/
    index.html                ← Bantumi
  link5/
    index.html                ← Link5
  chess/
    index.html                ← Chess game
    puzzles.json              ← Rotating local daily-puzzle set
    vendor/                   ← chess.js and Stockfish 18 WASM assets/licences
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
