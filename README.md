# TopSOUL Games

A growing collection of browser games — no install, no account, just open and play.

Live at: https://georgiand.github.io/snake_game (GitHub Pages)

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

---

## Structure

```
index.html              ← Games portal (main landing page)
games/
  snake/
    index.html          ← Snake game
README.md
```

Adding a new game:
1. Create `games/<name>/index.html`
2. Add a card to the portal `index.html` games grid
3. Increment the section count badge

---

## Development

No build step — pure HTML/CSS/JS. Open any file directly in a browser.

---

*Developed by TopSOUL & Claire*
