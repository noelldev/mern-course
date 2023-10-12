import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Normcore JOMO pickled 3 wolf moon. Squid disrupt small batch
            cardigan keytar distillery. Same jean shorts synth pitchfork,
            selfies gentrify ramps knausgaard etsy single-origin coffee kogi
            gluten-free. Thundercats echo park normcore kitsch prism. Yr
            cardigan gorpcore enamel pin. Knausgaard palo santo ugh franzen
            bicycle rights hella fingerstache cold-pressed kogi lo-fi bespoke
            roof party
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
