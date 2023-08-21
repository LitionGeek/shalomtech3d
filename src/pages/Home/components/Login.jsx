import { Grid } from "@mui/material";
import { Input } from "../../../components";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../../redux/api/endpoints/authSlice";
import { useNavigate } from "react-router-dom/dist/index";
import { Button } from "@mui/material/index";
import { PrivateRoutes } from "../../../models/routes";
import "../../../assets/css/Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [authUser, responseAuth] = useLoginMutation();
  const [error, seterror] = useState("");
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (value, key) => {
    setcredentials((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authUser(credentials);
  };

  useEffect(() => {
    if (responseAuth.isSuccess) {
      sessionStorage.setItem("token", responseAuth?.data?.token);
      navigate(`/${PrivateRoutes.MISACCIONES}`);
    }
    if (responseAuth.isError) {
      if (responseAuth?.error?.status === 400 || responseAuth?.error?.status === 404)
        seterror("usuario o clave invalida");
    }
  }, [responseAuth.isSuccess, responseAuth.isError]);

  return (
    <Grid container className="containerLogin" sx={{ height: "70vh" }}>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Grid item xs={12} sm={12}>
          <Input placeholder="Usuario" value={credentials?.email} onChange={(e) => handleChange(e, "email")} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Input
            placeholder="Contraseña"
            value={credentials?.password}
            onChange={(e) => handleChange(e, "password")}
            type="password"
          />
        </Grid>
        {error && (
          <Grid item xs={12} sm={12}>
            <span style={{ color: "red" }}>{error}</span>
          </Grid>
        )}
        <Grid item xs={12} sm={12}>
          <Button variant="outlined" type="submit">
            Ingresar
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default Login;
