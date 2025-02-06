import PropTypes from 'prop-types';

const PrimaryButton = ({ text = 'Click Me', onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default PrimaryButton;
