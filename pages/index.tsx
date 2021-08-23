import { Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Product } from "@prisma/client";
import { useState } from "react";
import useSWR from "swr";
import client from "../prisma/client";
import ProductCard from "../src/components/home/ProductCard";
import { makeStyles } from "@material-ui/core/styles";

interface IMainPageProps {
  products: Product[];
}
export async function getStaticProps() {
  const products = await client.product.findMany();
  return {
    props: { products },
  };
}

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    "& > *": {
      margin: "0.5rem",
    },
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    "& > div": {
      margin: "0.5rem",
    },
  },
});

export default function HomePage(props: IMainPageProps) {
  const [newUrl, setNewUrl] = useState("");
  const handleNewUrl = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const { data } = useSWR("/api/products", { initialData: props.products });
  const { form, cardContainer } = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <form className={form} onSubmit={handleNewUrl}>
          <TextField
            label="Ссылка на товар"
            value={newUrl}
            onChange={(event) => setNewUrl(event.target.value)}
          />
          <Button variant="contained" color="default" startIcon={<AddIcon />}>
            Добавить
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} md={8}>
        <Container className={cardContainer}>
          <Typography variant="h3">Товары под наблюдением</Typography>
          {data?.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </Container>
      </Grid>
    </Grid>
  );
}
