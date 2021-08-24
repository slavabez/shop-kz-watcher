import {
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert, Color } from "@material-ui/lab";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import ProductCard from "../src/components/home/ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import theme from "@styles/theme";
import { Vendor } from "@src/types";

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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
});

export default function HomePage() {
  const [newUrl, setNewUrl] = useState("");
  const [inputError, setInputError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    isOpen: boolean;
    message: string;
    severity: Color;
  } | null>(null);

  const { data } = useSWR("/api/products");

  const sendUrlRequest = async () => {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: newUrl }),
    });
    if (response.status === 400) {
      setSnackbar({
        isOpen: true,
        severity: "error",
        message: "Ошибка. Этот товар уже есть в списке",
      });
    } else if (response.status === 200) {
      // Add to local data & cache
      mutate("/api/products");
      setSnackbar({
        isOpen: true,
        message: "Товар успешно добавлен в список",
        severity: "success",
      });
    }
    setIsLoading(false);
  };

  const handleNewUrl = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // Validate input to be a legit URL
    try {
      new URL(newUrl);
    } catch (e) {
      setInputError("Не похоже на ссылку... Ссылка должна начинатся на https://");
      return;
    }
    if (
      ![Vendor.ShopKz.toString(), Vendor.Wildberries.toString()].includes(new URL(newUrl).hostname)
    ) {
      setInputError(
        "На данный момент поддерживаются только ссылки на товары с сайтов shop.kz и kz.wildberries.ru",
      );
      return;
    }

    setInputError("");
    setIsLoading(true);
    sendUrlRequest();
  };

  const { form, cardContainer, backdrop } = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <form className={form} onSubmit={handleNewUrl}>
          <TextField
            id="new-product-input-url"
            label="Ссылка на товар"
            value={newUrl}
            error={!!inputError}
            helperText={inputError}
            onChange={(event) => setNewUrl(event.target.value)}
          />
          <Button type="submit" variant="contained" color="default" startIcon={<AddIcon />}>
            Добавить
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} md={8}>
        <Container className={cardContainer}>
          <Typography variant="h4">Товары под наблюдением</Typography>
          {data?.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </Container>
      </Grid>
      <Backdrop open={!!isLoading} className={backdrop}>
        <CircularProgress color="secondary" />
      </Backdrop>
      <Snackbar
        open={!!snackbar?.isOpen}
        autoHideDuration={4000}
        onClose={() => {
          setSnackbar(null);
        }}
      >
        <Alert severity={snackbar?.severity}>{snackbar?.message}</Alert>
      </Snackbar>
    </Grid>
  );
}
