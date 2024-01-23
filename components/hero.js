const Hero = ({ title, subtitle, imageOn = false }) => {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle}
      {imageOn && <figure> [画像] </figure>}
    </div>
  )
}

export default Hero
