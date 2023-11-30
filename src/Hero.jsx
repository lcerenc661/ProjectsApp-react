
import heroImg from './assets/heroImg.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Pinterest la croix meh, blackbird spyplane distillery biodiesel
            keffiyeh heirloom church-key gatekeep authentic JOMO. Blackbird
            spyplane man braid direct trade YOLO kogi, tonx raclette banjo tofu
            master cleanse gluten-free authentic. Bespoke pok pok flexitarian
            vinyl crucifix pug hell of food truck.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="The browser" className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
