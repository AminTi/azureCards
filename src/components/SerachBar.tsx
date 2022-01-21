import React from "react";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Serachbar = styled(Paper)`
  background: white;
  margin: 5%;
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  width: 700px;
 
`;
const Space = styled("div")`
  padding: 5px;
`;

interface SearchData {
  setStorage: React.Dispatch<React.SetStateAction<string>>;
}

const SerachBar: React.FC<SearchData> = ({ setStorage }) => {
  const [area, setArea] = React.useState<string>("All");
  const [iteration, setIteration] = React.useState<string>("All");

  const handleChange = (event: SelectChangeEvent) => {
    setStorage(event.target.value);
    setArea(event.target.value as string);
  };

  const clickHandeler = (event: SelectChangeEvent) => {
    setStorage(event.target.value);
    setIteration(event.target.value as string);
  };

  return (
    <Serachbar>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Area</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={area}
          label="area"
          onChange={handleChange}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Red"}>Red</MenuItem>
          <MenuItem value={"Blue"}>Blue</MenuItem>
        </Select>
      </FormControl>
      <Space />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Iteration</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={iteration}
          label="iteration"
          onChange={clickHandeler}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Sprint 1"}>Sprint 1</MenuItem>
          <MenuItem value={"Sprint 2"}>Sprint 2</MenuItem>
          <MenuItem value={"Sprint 3"}>Sprint 3</MenuItem>
        </Select>
      </FormControl>
    </Serachbar>
  );
};

export default SerachBar;
function setSaveIteration(value: string) {
  throw new Error("Function not implemented.");
}
