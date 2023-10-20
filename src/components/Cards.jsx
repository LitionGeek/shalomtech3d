import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard({ title, description, labelButton, image }) {
  return (
    <Card sx={{ maxWidth: 480, minHeigth: 400 }}>
      <CardActionArea>
        <CardMedia component="img" sx={{ width: "100%", height: "40%" }} image={image} alt="Imagen producto" />
        <CardContent sx={{ height: "60%" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          {labelButton}
        </Button>
      </CardActions> */}
    </Card>
  );
}
