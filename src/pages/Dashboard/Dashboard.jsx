import { Container } from "@mui/material/index";
import Image from "../../assets/images/NiñoProtesis.avif";
import Products from "./components/Products";
import "./index.css";

const Dashboard = () => {
  return (
    <Container component="main" maxWidth="lg">
      {/* <HeaderVista titulo={<h2>Shalom Tech3D</h2>} /> */}
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: "10%", width: "60%" }}>
          <img src={Image} alt="Protesis 3d" width={"100%"} height={"90%"} />
        </div>
        <div style={{ display: "flex", marginTop: "10%", width: "40%", flexDirection: "column" }}>
          <h2>Shalom tech</h2>
          <span className="descriptionLogo">
            Nuestra misión es mejorar la calidad de vida de los niños a través de soluciones innovadoras. Estamos
            expandiendo nuestra presencia en línea a través de esta página web para llegar a más familias y ofrecerles
            nuestros productos esenciales. Nuestro compromiso es claro: hacer una diferencia positiva en la vida de los
            niños.
          </span>
        </div>
      </div>

      <Products />
      <div style={{ margin: 50 }}>
        <h2 style={{ fontSize: "1.4rem" }}>Es super sencillo solicitar una mano o brazo mecanico 3D.</h2>
        <button style={{ background: "white" }}>Solicitar ahora!</button>
      </div>
    </Container>
  );
};

export default Dashboard;
