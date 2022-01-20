import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import GridHeaders from "./GridHeaders";
import Cards from "./Cards";
import Data from "../Data/Data.json";
import SerachBar from "./SerachBar";

const GridComponnets = styled(Container)`
  display: grid;
  grid-template-columns: 0.1fr 0.5fr 0.5fr 0.5fr;
  grid-template-rows: 0.1fr 0.4fr 0.4fr;
  grid-template-areas:
    "Epic New In-Progress Done"
    "Epic  Feature1  Feature2  Feature3"
    "Epic  Feature4  Feature5 null";
  height: 500px;
  background: #abceef;
  grid-gap: 10px;
  padding-top: 30px;
  border-radius: 15px;
`;

const GridTemplate = () => {
  const JsonData = Data;
  const TextData: string[] = ["Epic", "New", "In-Progress", "Done"];
  const [storage, setStorage] = useState<string>("All");
  const area = Data.filter((item) => {
    return item.Area === storage;
  });

  const iteration = Data.filter((item) => {
    return item.Iteration === storage;
  });

  const filterData = () => {
    if (area.length > 0) {
      return area;
    } else if (iteration.length) {
      return iteration;
    }
    return JsonData;
  };

  return (
    <>
      <SerachBar setStorage={setStorage} />
      <GridComponnets maxWidth="xl">
        <CssBaseline />
        {TextData.map((item: string, index: number) => {
          return <GridHeaders text={item} key={index} />;
        })}
        <Cards data={filterData()} />
      </GridComponnets>
    </>
  );
};

export default GridTemplate;
