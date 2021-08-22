import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Product } from "@prisma/client";
import { Link } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
}));

interface IProductCard {
  product: Product;
}

const truncate = (input: string, maxLength = 50) => {
  if (input.length >= maxLength) {
    const truncated = input.substring(0, maxLength);
    return `${truncated}...`;
  } else {
    return input;
  }
};

export default function ProductCard(props: IProductCard) {
  const { product } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography>{truncate(product.title)}</Typography>
          <Link href={product.url}>{product.vendor}</Link>
        </CardContent>
      </div>
      <CardMedia className={classes.cover} image={product.imageUrl} title={product.title} />
    </Card>
  );
}
