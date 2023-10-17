export function GuessRow({ guess }) {
  return (
    <p className="guess">
      {(guess || []).map(({ letter, status }) => (
        <span
          className={`cell ${status ? status : ""}`}
          key={crypto.randomUUID()}
        >
          {letter}
        </span>
      ))}
    </p>
  );
}
