import { NUM_OF_LETTERS_ALLOWED } from "../constants";

export function GuessInput({ onSubmit, onChange, value, disabled }) {
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        onChange={onChange}
        value={value}
        pattern={`\w{${NUM_OF_LETTERS_ALLOWED},${NUM_OF_LETTERS_ALLOWED}}`}
        disabled={disabled}
      />
    </form>
  );
}
