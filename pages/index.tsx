import { Button, Container, Grid, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import prisma from "../prisma/prisma";
import { Product } from "@prisma/client";
import { useState } from "react";

interface IMainPageProps {
  products: Product[];
}

export default function HomePage(props: IMainPageProps) {
  const [newUrl, setNewUrl] = useState("");
  const handleNewUrl = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

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
        <ul>
          {props?.products.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}

export async function getStaticProps() {
  const products = await prisma.product.findMany();
  return {
    props: { products },
  };
}
