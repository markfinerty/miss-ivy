import PropTypes from "prop-types";

export default function MyButton({ children, onClick, href }) {
  const baseStyles =
    "bg-miss-ivy-gold text-miss-ivy-green px-4 py-2 rounded-lg w-52 font-dancing-script font-bold text-xl hover:ring-2 hover:ring-white";

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseStyles}
    >
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}

MyButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
};
