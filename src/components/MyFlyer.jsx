// This component is used to display a flyer image with specific styles.
// eslint-disable-next-line react/prop-types
function MyFlyer({imgSrc, altText}) {
  return (
    <img className="w-[30rem] bg-miss-ivy-green text-center font-bold md:text-7xl text-miss-ivy-gold border-double border-4 border-miss-ivy-gold text-3xl p-2"
      src={imgSrc}
      alt={altText}>
    </img>
  )
}

export default MyFlyer
