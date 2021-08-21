import { Grid, Paper } from "@material-ui/core";

export default function HomePage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper>Form</Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper>Data</Paper>
      </Grid>
    </Grid>
  );
}
