import "./Instagram.css";
import Logo from "../../images/Pin.png"


function Instagram() {
  return (
    <div className="Instagram">
      <h1>Nosso Perfil no Pinterest Para Mais</h1>
      <div>
      <a href="https://pin.it/CGM96KpvS">
        <img src={Logo} alt="" />
        <h1>Pinterest</h1>
      </a>
      </div>
    </div>
  );
}

export default Instagram;
