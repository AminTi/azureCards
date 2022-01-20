import React from 'react';
import GridTemplate from './components/GridTemplate';
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';



const AppContainer = styled(Container)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: #f5f5f5;
height: 100vh;
`;

const NavBAr = styled(AppBar)`
background: #f5f5f5;
`;
function App() {
  return (
    <AppContainer  maxWidth="xl">
      <NavBAr>
        <Toolbar/>
      </NavBAr>
     <GridTemplate/>
    </AppContainer>
  );
}

export default App;
