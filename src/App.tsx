import {
  Box,
  Button,
  Card,
  Grid,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./App.css";
import Hint from "./Hint";
import BarChart from "./components/Bar.jsx";
import Map from "./components/Map";
import Table from "./components/Table";

const style = {
  width: 500,
  marginLeft: "25%",
  marginTop: "5%",
  border: "2px solid #000",
  boxShadow: 24,
  background: "white",
  pt: 2,
  px: 4,
  pb: 3,
  zIndex: 5000,
};

function App() {
  const [challengeNumber, setChallengeNumber] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const challengeText: any = {
    0: [
      "Start",
      "Please help us improve our train app UI by improving features and squashing bugs :) Click a challenge, read the description and try and figure out what to do. Try to use as few hints as you can",
    ],
    1: [
      "Challenge A:",
      <p>
        <strong>User feedback:</strong>
        <br />
        <br /> The train timetable doesn't fit on the screen very well.
        <br />
        <br />
        Go to <strong>components/Table.jsx</strong> and change the default
        pagination on the table from <strong>15</strong> to <strong>5</strong>.
      </p>,
    ],
    2: [
      "Challenge B:",
      <p>
        <strong>UI Designer request:</strong>
        <br />
        Make the bar chart 3-dimensional with the following properties:
        <br />
        <br />
        <strong>alpha:</strong> 15, <br />
        <strong>beta:</strong> 20, <br />
        <strong>depth:</strong> 30, <br />
        <strong>viewDistance:</strong> 40
        <br />
        <br />
        Go to <strong>components/Bar.jsx</strong> and add these properties
      </p>,
    ],
    3: [
      "Challenge C:",
      <p>
        <strong>Bug Report:</strong>
        <br />
        <br /> When I hover (or click) over a cancelled train, the red colour
        dissappears. <br />
        <br />
        Find the bug and squash it.
      </p>,
    ],
    4: [
      "Challenge D:",
      <p>
        <strong>Bug Report:</strong>
        <br />
        <br /> The map should zoom into the AutoRek Glasgow office when the page
        loads.
        <br />
        <br />
        Go to <strong>components/Map.jsx</strong> and fix the{" "}
        <strong>FlyTo</strong> function
      </p>,
    ],
    5: [
      "Challenge E:",
      <p>
        <strong>Product/UX Requests:</strong>
        <br />
        <br />
        If you have time, try and do as many of the following as you can:
        <br />
        <br />
        <ul>
          <li>
            The name of the app is rubbish. Make it something more interesting.
          </li>
          <li>
            The <strong>red</strong> and <strong>yellow</strong> colours on the
            table are quite garish. Try something softer or maybe match some
            colours from the charts.
          </li>
          <li>Same for the colour of the trains on the map.</li>
        </ul>
      </p>,
    ],
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="App">
        <Modal
          open={modalOpen}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          onClose={handleClose}
          style={{ overflow: "scroll" }}
        >
          <Box sx={{ ...style, width: 500 }}>
            <Hint challengeNumber={challengeNumber} />
          </Box>
        </Modal>
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            width: "1200px",
            marginTop: "20px",
            marginBottom: "50px",
            marginLeft: "500px",
          }}
        >
          <Grid item xs={9} alignContent="center">
            <Paper elevation={16}>
              <Box display="flex" justifyContent="center" marginTop="10px">
                <Typography
                  variant="h2"
                  style={{
                    fontSize: "25px",
                    fontFamily: "Myanmar Khay, sans-serif",
                    fontWeight: "bold",
                    background: "linear-gradient(to right,  #575aab, #2595c1)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    marginTop: "25px",
                    marginBottom: "25px",
                  }}
                >
                  Train App
                </Typography>
              </Box>
              <Table />
              <Grid container spacing={2} sx={{ alignContent: "center" }}>
                <Grid
                  item
                  xs={6}
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <BarChart />
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <Map />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              right: "500px",
            }}
          >
            <div
              style={{
                marginBottom: "30px",
                marginRight: "20px",
              }}
            >
              <img
                src="trainlogo.png"
                alt="Logo"
                style={{
                  maxWidth: "130px",
                  maxHeight: "130px",
                  marginLeft: "75px",
                  top: "0",
                  marginBottom: "2px",
                }}
              />
            </div>
            <Stack
              sx={{
                alignItems: "flex-end",
                marginLeft: "100%",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  visibility: challengeNumber > 0 ? "block" : "hidden",
                  "&:hover": { backgroundColor: "orange" },
                  align: "center",
                  backgroundColor: "white",
                  width: "140px",
                  padding: "10px",
                }}
                onClick={handleOpen}
              >
                View Hints
              </Button>
              <Button
                variant="outlined"
                sx={{
                  marginTop: "10px",
				  width: "140px",
                  backgroundColor:
                    challengeNumber === 1 ? "lightblue" : "white",
                  "&:hover": { backgroundColor: "lightblue" },
                }}
                onClick={() => setChallengeNumber(1)}
              >
                Challenge A
              </Button>
              <Button
                variant="outlined"
                sx={{
                  marginTop: "10px",
				  width: "140px",
                  backgroundColor:
                    challengeNumber === 2 ? "lightblue" : "white",
                  "&:hover": { backgroundColor: "lightblue" },
                }}
                onClick={() => setChallengeNumber(2)}
              >
                Challenge B
              </Button>

              <Button
                variant="outlined"
                sx={{
                  marginTop: "10px",
				  width: "140px",
                  backgroundColor:
                    challengeNumber === 3 ? "lightblue" : "white",
                  "&:hover": { backgroundColor: "lightblue" },
                }}
                onClick={() => setChallengeNumber(3)}
              >
                Challenge C
              </Button>

              <Button
                variant="outlined"
                sx={{
                  marginTop: "10px",
				  width: "140px",
                  backgroundColor:
                    challengeNumber === 4 ? "lightblue" : "white",
                  "&:hover": { backgroundColor: "lightblue" },
                }}
                onClick={() => setChallengeNumber(4)}
              >
                {" "}
                Challenge D
              </Button>

              <Button
                variant="outlined"
                sx={{
                  marginTop: "10px",
				  width: "140px",
                  backgroundColor:
                    challengeNumber === 5 ? "lightblue" : "white",
                  "&:hover": { backgroundColor: "lightblue" },
                }}
                onClick={() => setChallengeNumber(5)}
              >
                {" "}
                Challenge E
              </Button>
              <Box sx={{ textAlign: "left", marginTop: "50px" }}>
                <Card
                  sx={{
                    padding: "25px",
                    backgroundColor: "#f0fdfad",
                    top: "400x",
                    zIndex: "1000",
                    maxHeight: "1200px",
                    maxWidth: "100%",
                    width: "200px",
                    marginRight: "1px",
                    marginLeft: "30%",
                  }}
                >
                  <h3>{challengeText[challengeNumber][0]}</h3>
                  <div>
                    <p>{challengeText[challengeNumber][1]}</p>
                  </div>
                </Card>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
