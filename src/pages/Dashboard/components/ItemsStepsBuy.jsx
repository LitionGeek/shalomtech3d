import diseñoImage from "../../../assets/images/diseño-removebg-preview.png";
import delivery from "../../../assets/images/delivery.png";
import compraSegura from "../../../assets/images/images__1_-removebg-preview.png";
import ItemStepBuy from "./ItemStepBuy";

const ItemsStepsBuy = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <ItemStepBuy
        image={diseñoImage}
        title={"Selecciona tu Estilo"}
        description={
          "  Ofrecemos diseños únicos que combinan comodidad y funcionalidad, dándote la confianza para enfrentar la vidacon determinación."
        }
      />

      <ItemStepBuy
        image={compraSegura}
        title={"Compra segura"}
        description={
          "Nuestra prioridad es tu confianza, ofreciendo productos de calidad superior y un proceso de compra protegido."
        }
      />
      <ItemStepBuy
        image={delivery}
        title={"Envios a domicilio"}
        description={
          "Te llevamos calidad directamente a tu puerta. Nuestro servicio de entrega rápido y seguro garantiza que tu prótesis 3D personalizada llegue cómodamente a tu hoga"
        }
      />
    </div>
  );
};

export default ItemsStepsBuy;
