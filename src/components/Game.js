import React, { useState } from "react";

import { sample } from "../utils";
import { WORDS } from "../data";
import { GuessInput } from "./GuessInput";
import { GuessResults } from "./Guessresults";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";
import { WinBanner } from "./WinBanner";
import { LoseBanner } from "./LoseBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guessResults, setGuessResults] = useState([]);
  const [isGameOver, setGameOver] = useState(false);
  const [isWin, setWin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guess) return;

    const attempts = guessResults.length;
    if (attempts < NUM_OF_GUESSES_ALLOWED) {
      setGuessResults((state) => [...state, guess]);
    }

    if (guess === answer) {
      setWin(true);
      setGameOver(true);
    }

    if (attempts + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
    }

    setGuess("");
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput
        onChange={(e) =>
          !!e.target.value && setGuess(e.target.value.toUpperCase())
        }
        onSubmit={handleSubmit}
        value={guess}
        disabled={isGameOver}
      />
      {isGameOver && (
        <>
          {isWin ? (
            <WinBanner countOfGuesses={guessResults.length} />
          ) : (
            <LoseBanner answer={answer} />
          )}
        </>
      )}
    </>
  );
}

export default Game;
