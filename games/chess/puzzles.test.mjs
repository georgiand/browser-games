import assert from 'node:assert/strict';
import fs from 'node:fs';
import { Chess } from './vendor/chess.js';

const puzzles = JSON.parse(fs.readFileSync(new URL('./puzzles.json', import.meta.url), 'utf8'));
const levels = ['easy', 'medium', 'hard'];

assert.equal(new Set(puzzles.map(puzzle => puzzle.id)).size, puzzles.length, 'puzzle ids must be unique');
assert.ok(puzzles.some(puzzle => puzzle.solutions.length > 1), 'at least one puzzle must exercise alternate accepted solutions');
for (const level of levels) {
  const pool = puzzles.filter(puzzle => puzzle.level === level);
  assert.ok(pool.length >= 3, `${level} needs at least three puzzles for meaningful daily rotation`);
  assert.equal(new Set(pool.map(puzzle => puzzle.fen)).size, pool.length, `${level} must not repeat positions`);
}

const allPositions = puzzles.map(puzzle => puzzle.fen);
assert.equal(new Set(allPositions).size, allPositions.length, 'difficulty pools must not reuse a position');
for (const puzzle of puzzles) {
  assert.ok(Array.isArray(puzzle.solutions) && puzzle.solutions.length > 0, `${puzzle.id} needs one or more accepted solution lines`);
  assert.ok(puzzle.solutions.every(line => Array.isArray(line) && line.length % 2 === 1), `${puzzle.id} solution lines must end on the player move`);
  const playerMoves = puzzle.solutions.map(line => line.length);
  if (puzzle.level === 'easy') assert.ok(playerMoves.every(length => length === 1), `${puzzle.id} should be a one-move introduction`);
  if (puzzle.level === 'medium') assert.ok(playerMoves.every(length => length >= 3), `${puzzle.id} needs a continuation, not a hanging-piece grab`);
  if (puzzle.level === 'hard') assert.ok(playerMoves.every(length => length >= 5), `${puzzle.id} needs at least a three-move calculation`);

  for (const line of puzzle.solutions) {
    const game = new Chess(puzzle.fen);
    for (const uci of line) {
      const move = game.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] });
      assert.ok(move, `${puzzle.id} contains an illegal move: ${uci}`);
    }
  }
}

console.log(`Validated ${puzzles.length} puzzle lines across ${levels.join(', ')}.`);
