import { NUM_OF_GUESSES_ALLOWED } from "../constants";
import { checkGuess } from "../game-helpers";
import { GuessRow } from "./GuessRow";

export function GuessResults({ guessResults, answer }) {
  const grid = new Array(NUM_OF_GUESSES_ALLOWED).fill("");
  const emptyRow = new Array(5).fill({ letter: "", status: "" });
  const results = grid.map((guess, i) => guessResults[i] || guess);

  return (
    <div className="guess-results">
      {results.map((guess) => {
        const guessLetters = !!guess.length
          ? checkGuess(guess, answer)
          : emptyRow;

        return <GuessRow guess={guessLetters} key={crypto.randomUUID()} />;
      })}
    </div>
  );
}
