import PropTypes from 'prop-types';

const staffShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
});

export default { staffShape };
