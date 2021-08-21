import { Button, Container, Grid, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default function HomePage() {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Container>
          <form>
            <TextField label="Ссылка на товар" />
            <Button variant="contained" color="default" startIcon={<AddIcon />}>
              Добавить
            </Button>
          </form>
        </Container>
      </Grid>
      <Grid item xs={12} md={8} />
    </Grid>
  );
}

export async function getStaticProps() {}
