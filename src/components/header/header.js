import { Link } from "react-router-dom";
import { firebaseApp } from "../../api/firebase";
import {
  Button,
  Container,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import styles from "./header.module.css";

const pages = [{ title: "Home", to: "/" }];

const pagesWithSession = [
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
  { title: "Gists", to: "/gists" },
];

const pagesWithoutSession = [
  { title: "Login", to: "/login" },
  { title: "Sign up", to: "/sign-up" },
];

const signOut = () => {
  firebaseApp.auth().signOut();
};

export function Header({ session }) {
  return (
    <AppBar position="static" color="primary" className={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {pages.map(({ to, title }) => (
              <Button
                key={title}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link className={styles.link} to={to}>
                  {title}
                </Link>
              </Button>
            ))}
            {session &&
              pagesWithSession.map(({ to, title }) => (
                <Button
                  key={title}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link className={styles.link} to={to}>
                    {title}
                  </Link>
                </Button>
              ))}
            {!session &&
              pagesWithoutSession.map(({ to, title }) => (
                <Button
                  key={title}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link className={styles.link} to={to}>
                    {title}
                  </Link>
                </Button>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={signOut}
            >
              Exit
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
