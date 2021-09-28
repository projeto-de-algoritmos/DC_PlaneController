import { useState } from "react";
import "./App.css";

import plane from "./assets/plane-solid.svg";
import { Coord, parDePontosMaisProximos } from "./utils/ClosestPairOfPoints";
import Map from "./Map";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function App() {
  const [coords, setCoords] = useState([]);
  const [alert, setAlert] = useState(false);
  const [verifed, setVerifed] = useState(false);
  const [error, setError] = useState(false);

  const calcularMenorDistancia = () => {
    if (coords.length <= 2) {
      setError(true);
      return;
    }

    const distance = parDePontosMaisProximos(coords, coords.length);

    if (distance < 30) {
      setAlert(true);
    } else {
      setVerifed(true);
    }
  };

  const limparPostosSelecionados = () => {
    const canvas = document.getElementById("sandbox");
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
    setCoords([]);
  };

  const handleCanvasClick = (e) => {
    const canvas = document.getElementById("sandbox");
    const image = document.querySelector("img");
    const context = canvas.getContext("2d");

    image.style.width = 5;
    image.style.height = 5;

    var x = e.clientX;
    var y = e.clientY;

    context.drawImage(image, x, y, 8, 8);

    setCoords([...coords, new Coord(x, y)]);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="App">
      <div className="map-context">
        <Map id="map" />
        <canvas
          onClick={handleCanvasClick}
          width={window.innerWidth * 0.8}
          height={window.innerHeight}
          className="canvas"
          id="sandbox"
        />
      </div>
      <div className="sidebar">
        <Button
          onClick={limparPostosSelecionados}
          className="button"
          variant="contained"
        >
          Limpar destinos
        </Button>
        <Button
          onClick={calcularMenorDistancia}
          className="button"
          variant="contained"
        >
          menor distância
        </Button>
      </div>
      <Modal
        open={verifed}
        onClose={() => setVerifed(false)}
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Não há risco de colisão! :D
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={error}
        onClose={() => setError(false)}
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Selecione algum local
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={alert}
        onClose={() => setAlert(false)}
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            CUIDADO! Há risco de colisão!
          </Typography>
        </Box>
      </Modal>
      <span className="span">
        <img src={plane} alt="plane" />
      </span>
    </div>
  );
}

export default App;
