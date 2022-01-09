import React from "react";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";


interface CardPosition {
  cardid: string;
}

const CardWrapper = styled(Paper)<CardPosition>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px 10px;
  border-radius: 10px;
  grid-area: ${(props) => (props.cardid ? props.cardid : null)};
  border-left: 10px solid green;
`;

const Headers = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Relation = styled("div")`
  margin-left: auto;
`;

interface JsonData {
  Id: string;
  Type: string;
  Title: string;
  State: string;
  Area: string;
  Iteration: string;
  Relations: string;
}

interface items {
    data: JsonData[]
}
const Cards: React.FC<items>= ({data}) => {
  return (
    <>
      {data.map((item:JsonData, index:number) => {
        return (
          <CardWrapper key={index} cardid={item.Title.replace(/\s/g, "")}>
            <Headers>
              <div>{item.Id}</div> <div>{item.Type}</div>
              <div>{item.Title}</div>
            </Headers>
            <div>{item.State}</div>
            <div>{item.Area}</div>
            <div>{item.Iteration}</div>
            <Relation>{item.Relations}</Relation>
          </CardWrapper>
        );
      })}
    </>
  );
};

export default Cards;
