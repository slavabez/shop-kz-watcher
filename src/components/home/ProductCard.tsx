import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Product } from "@prisma/client";
import { Box, Link } from "@material-ui/core";
import { Vendor } from "@src/types";

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
  infoPanel: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: "1.25rem",
  },
  lowest: {
    fontSize: "0.75rem",
  },
  highest: {
    fontSize: "0.75rem",
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

const formatPrice = (
  product: Product,
  type: "price" | "lowestPrice" | "highestPrice" = "price",
) => {
  const formatter = new Intl.NumberFormat("ru-KZ", {
    style: "currency",
    currency: product.vendor === Vendor.Wildberries ? "RUB" : "KZT",
  });
  return formatter.format(product[type]);
};

export default function ProductCard(props: IProductCard) {
  const { product } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography>{truncate(product.title)}</Typography>
          <Box className={classes.infoPanel}>
            <Typography className={classes.price} variant="body1">
              {formatPrice(product)}
            </Typography>
            <Box>
              <Typography className={classes.lowest} variant="body1">
                {formatPrice(product, "lowestPrice")}
              </Typography>
              <Typography className={classes.highest} variant="body1">
                {formatPrice(product, "highestPrice")}
              </Typography>
            </Box>
            <Link href={product.url}>{product.vendor}</Link>
          </Box>
        </CardContent>
      </div>
      <CardMedia className={classes.cover} image={product.imageUrl} title={product.title} />
    </Card>
  );
}
