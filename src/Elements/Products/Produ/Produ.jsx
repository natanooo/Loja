import "./Produ.css";

function Produ({ ImgProdu, NameProdu, PriceProdu, UrlProdu}) {
  return (
    <div className="Produ">
      <a href={UrlProdu}>
        <img src={ImgProdu} alt="Product" />
        <h1>{NameProdu}</h1>
        <h2>{PriceProdu}R$</h2>
        <div className="Cima">
          <span>Ver Produto</span>
        </div>
      </a>
    </div>
  )
}

export default Produ;
