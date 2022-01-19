import React,{useState} from "react";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import ShowHide from "./ShowHide"


interface JsonData {
  Id: string;
  Type: string;
  Title: string;
  State: string;
  Area: string;
  Iteration: string;
  RelationsId: string[]  | undefined;
  Relations: string;
}


interface CardPosition {
  cardid: string;
  test: any
 
 

}


const CardWrapper = styled(Paper)<CardPosition>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px 10px;
  border-radius: 10px;
  grid-area: ${(props) => (props.cardid ? props.cardid : null)};
  border-left: 10px solid green;
  background: ${(props) => (props.test ? "blue" : null)};
 
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
    data: JsonData[]
}
const Cards: React.FC<items>= ({data}) => {
  const [toggelBtn, setToggelBtn] = useState(false)
  const [id, setId] = useState<string[] | undefined >(undefined)
  const [test, setTEst] = useState<any >("")
 
 
 
  const relationsData = data.map((item, index)=>{
  return item.Id 
  })
  

let a = relationsData.forEach(i =>{
  let newid = id && id[0]
  let d = i === newid ? true: false

   return d
})


let Amin = ()=>{
  let newid = id && id[0]
  for (let i = 0; i < relationsData.length; i++) {
    const element = relationsData[i];
     if(element == newid ){
       return i
     }
  }
}

console.log(Amin())

let newid = id && id[0]


  return (
    <>
      {data.map((item:JsonData, index:number) => {
        return (
          <CardWrapper key={index} cardid={item.Title.replace(/\s/g, "")}  test={item.Id === newid ? true :false}>
            <Headers>
              <div>{item.Id}</div> <div>{item.Type}</div>
              <div>{item.Title}</div>
            </Headers>
            <div>{item.State}</div>
            <div>{item.Area}</div>
            <div>{item.Iteration}</div>
            <Relation onClick={(e)=> setId(item?.RelationsId)}> <ShowHide toggelBtn={toggelBtn} /> {item.Relations}</Relation>
          </CardWrapper>
        );
      })}
    </>
  );
};

export default Cards;
