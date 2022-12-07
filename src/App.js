import "./App.css";
import { useState } from "react";
import { Box, TextField } from "@mui/material";

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="App">
      <h2 style={{ color: "goldenrod" }}>Dynamic color</h2>
      <div>
        <Box
          sx={{
            width: 200,
            height: 200,
            margin: "auto",
            border:'1px solid gray',
            backgroundColor: color,
          }}
        />
      </div>
      <TextField
        required
        id="outlined-required"
        label={color}
        placeholder="Color name/code"
        sx={{ marginTop: "20px", height: "30px" }}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
