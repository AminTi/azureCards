import React from 'react';
import GridTemplate from './components/GridTemplate';
import { styled } from "@mui/system";
import Container from "@mui/material/Container";



const AppContainer = styled(Container)`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;


function App() {
  return (
    <AppContainer>
 
     <GridTemplate/>
    </AppContainer>
  );
}

export default App;
