import Logo from '../../images/shopee.png'
import Menu from '../../images/Menu.png'
import X from '../../images/X.png'
import './Navbar.css'

function Navbar({scrollToProduct, scrollToInstagram, scrollToCompras}) {
  function Open(){
    document.getElementById('OpenMenu').style.display = 'none'
    document.getElementById('CloseMenu').style.display = 'flex'
    document.getElementById('Menu').style.display = 'flex'
    document.getElementById('EMenu').style.display = 'flex'
  }
  function Close(){
    document.getElementById('OpenMenu').style.display = 'flex'
    document.getElementById('CloseMenu').style.display = 'none'
    document.getElementById('Menu').style.display = 'none'
    document.getElementById('EMenu').style.display = 'none'
  }

    return (
      <div>
        <div id='Menu' className='Menu'>
        <img onClick={Close} className='Close-menu' id='CloseMenu' src={X} alt="" />
            <li className='lli' onClick={scrollToProduct}>Produtos</li>
            <li onClick={scrollToInstagram}>Pinterest</li>
        </div>
        <div id='EMenu' className='EMenu'></div>
        <div className='Navbar'>
          <div className='Content-Nav'>
          <img className='Logo' src={Logo} alt="Logo" />
          <p>Melhores Achados</p>
          </div>
          <ul>
            <li onClick={scrollToProduct}>Produtos</li>
            <li className='lli' onClick={scrollToInstagram}>Pinterest</li>
          </ul>
          <img onClick={Open} className='Button-menu' id='OpenMenu' src={Menu} alt="" />
        </div>
      </div>
    )
  }
  
  export default Navbar