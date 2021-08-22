import { Button, Container, Grid, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Product } from "@prisma/client";
import { useState } from "react";
import useSWR from "swr";
import client from "../prisma/client";
import ProductCard from "../components/home/ProductCard";

interface IMainPageProps {
  products: Product[];
}
export async function getStaticProps() {
  const products = await client.product.findMany();
  return {
    props: { products },
  };
}

export default function HomePage(props: IMainPageProps) {
  const [newUrl, setNewUrl] = useState("");
  const handleNewUrl = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const { data } = useSWR("/api/products", { initialData: props.products });

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Container>
          <form onSubmit={handleNewUrl}>
            <TextField
              label="Ссылка на товар"
              value={newUrl}
              onChange={(event) => setNewUrl(event.target.value)}
            />
            <Button variant="contained" color="default" startIcon={<AddIcon />}>
              Добавить
            </Button>
          </form>
        </Container>
      </Grid>
      <Grid item xs={12} md={8}>
        {data?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Grid>
    </Grid>
  );
}
