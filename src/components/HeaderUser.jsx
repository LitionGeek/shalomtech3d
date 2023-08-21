import { Container } from "@mui/material/index";
import { HeaderVista, Loading } from "../components";
import { useEffect, useState } from "react";
import { useSelfMutation } from "../redux/api/endpoints/authSlice";

const HeaderUser = () => {
  const [getSelf, responseSelf] = useSelfMutation();
  const [credentials, setcredentials] = useState("");
  useEffect(() => {
    getSelf();
  }, []);

  useEffect(() => {
    if (responseSelf.isSuccess) {
      setcredentials(responseSelf?.data.username);
    }
  }, [responseSelf.isSuccess]);

  return (
    <Container>
      {responseSelf?.isLoading ? <Loading /> : <HeaderVista start="Mis acciones" end={`Usuario: ${credentials}`} />}
    </Container>
  );
};

export default HeaderUser;
