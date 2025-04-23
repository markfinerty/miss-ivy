import PropTypes from 'prop-types';

function MyBanner({title}) {
  return (
    <h2 className="bg-miss-ivy-green text-center font-bold md:text-7xl text-miss-ivy-gold border-double border-4 border-miss-ivy-gold text-3xl md:p-12 p-8">
        {title}
      </h2>
  )
}

MyBanner.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MyBanner
