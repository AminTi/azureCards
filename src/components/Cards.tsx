import React, { useState } from "react";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import ShowHide from "./ShowHide";

interface JsonData {
  Id: string;
  Type: string;
  Title: string;
  State: string;
  Area: string;
  Iteration: string;
  RelationsId: string[];
  Relations: string;
}

interface CardPosition {
  cardid: string;
  show: any;
}

const CardWrapper = styled(Paper)<CardPosition>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px 10px;
  border-radius: 10px;
  grid-area: ${(props) => (props.cardid ? props.cardid : null)};
  border-left: 10px solid green;
  border: ${(props) => (props.show ? " 3px solid red" : null)};
`;

const Headers = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Relation = styled("div")`
  display: flex;
  justify-content: space-between;
`;

interface items {
  data: JsonData[];
}
const Cards: React.FC<items> = ({ data }) => {
  const [id, setId] = useState<string[]>([]);
  const [b, setB] = useState(false);
  let newId: string[] = id && id;


  return (
    <>
      {data.map((item: JsonData, index: number) => {
        return (
          <CardWrapper
            key={index}
            cardid={item.Title.replace(/\s/g, "")}
            show={
              newId.some((x) => x === item.Title.slice(item.Title.length - 1))
                ? true
                : false
            }
          >
            {" "}
            <Headers>
              <div>{item.Id}</div> <div>{item.Type}</div>
              <div>{item.Title}</div>
            </Headers>
            <div>{item.State}</div>
            <div>{item.Area}</div>
            <div>{item.Iteration}</div>
            <Relation onClick={(e) => setId(item.RelationsId)}>
              <ShowHide
                toggelBtn={item.Title.slice(item.Title.length - 1) == item.Id
                  ? true
                  : false}
                btn={
                  item.RelationsId && item?.RelationsId[0] === "" ? false : true
                }
              />
              {item.Relations}
            </Relation>
          </CardWrapper>
        );
      })}
    </>
  );
};

export default Cards;
