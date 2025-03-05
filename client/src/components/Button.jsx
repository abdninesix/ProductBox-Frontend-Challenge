import { Link } from "react-router-dom";

const Button = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="flex w-fit px-4 py-2 rounded-md hover:bg-black hover:text-white transition duration-200">
      {children}
    </Link>
  );
};

export default Button;
