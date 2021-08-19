import { AppBar, Container, IconButton, Toolbar, Typography } from "@material-ui/core";

export default function HomePage() {
  return (
    <Container maxWidth="sm">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" aria-label="menu">
            Menu
          </IconButton>
        </Toolbar>
        <Typography variant="h6">Mooo</Typography>
      </AppBar>
    </Container>
  );
}
