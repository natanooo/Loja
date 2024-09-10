import "./Products.css";
import Produ from "./Produ/Produ";
import P1 from "../../images/P1.png";
import P2 from "../../images/P2.png";
import P3 from "../../images/P3.png";
import P4 from "../../images/P4.png";
import P5 from "../../images/P5.png";
import P6 from "../../images/P6.png";

function Products() {
  return (
    <div className="CountennerP">
      <h1 className="center">Melhores produtos com <br/> Melhores preços</h1>
      <div className="Products">
        <Produ UrlProdu={"https://s.shopee.com.br/1LMavj6siv"}ImgProdu={P1} NameProdu={"Fone Bluetooth"} PriceProdu={"20,00"}></Produ>
        <Produ UrlProdu={"https://s.shopee.com.br/LU3jvRLGj"}ImgProdu={P2} NameProdu={"Headphone Bluetooth"} PriceProdu={"33,80"}></Produ>
        <div className="displayNone"><Produ UrlProdu={"https://s.shopee.com.br/50FtIXqlWd"}ImgProdu={P3} NameProdu={"Projetor 4K"} PriceProdu={"315,99"}></Produ></div>
      </div>
      <div className="Products">
        <Produ UrlProdu={"https://s.shopee.com.br/8ACv4FlwCo"}ImgProdu={P4} NameProdu={"SmartWatch"} PriceProdu={"155,00"}></Produ>
        <Produ UrlProdu={"https://s.shopee.com.br/5AZJUt2B8i"}ImgProdu={P5} NameProdu={"Conjunto Fitness"} PriceProdu={"56,90"}></Produ>
        <div className="displayNone"><Produ UrlProdu={"https://s.shopee.com.br/700zMPIHky"}ImgProdu={P6} NameProdu={"Console de Mão"} PriceProdu={"112,99"}></Produ></div>
      </div>
    </div>
  );
}

export default Products;
