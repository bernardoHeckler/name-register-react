import './Input.css'

const Input = ({ placeHolderNome, value, onChange, id, error, texto }) => {
  return (
    <div className="input-container">
      <label>{texto}</label>
      <input
        type="text"
        placeholder={placeHolderNome}
        value={value}
        onChange={onChange}
        id={id}
        className={error ? 'input-error' : ''}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;