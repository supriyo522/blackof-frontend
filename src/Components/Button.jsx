// Getting props from parent component
const Button = ({ text, className, onClick }) => {
  return (
    // Passing conditional tailwindcss as props to add additional styling
    <div
      className={`max-w-fit px-6 py-2 hover:cursor-pointer rounded-full border-1 
        ${className ? className : ""} `} onClick={onClick}
    >
      <span className={"font-primary"}>{text}</span> {/*text as children*/}
    </div>
  );
};

export default Button;
