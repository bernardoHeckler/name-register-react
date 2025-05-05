import './Button.css';

const Button = ({ textButton, onClick, type = "button", disabled = false, id }) => {
  return (
    <div className="button-container">
      <button 
        type={type}
        onClick={onClick}
        disabled={disabled}
        id={id}
      >
        {textButton}
      </button>
    </div>
  );
};

export default Button;