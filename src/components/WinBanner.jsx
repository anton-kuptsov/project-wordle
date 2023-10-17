export function WinBanner({ countOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {countOfGuesses} guesses</strong>.
      </p>
    </div>
  );
}
