import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    disposition: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    bread: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
})

export default { dogShape };