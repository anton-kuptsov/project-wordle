export function GuessInput({ onSubmit, onChange, value, disabled }) {
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        onChange={onChange}
        value={value}
        pattern="\w{5,5}"
        disabled={disabled}
      />
    </form>
  );
}
