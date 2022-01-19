import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface ShowAndHide {
toggelBtn: boolean,

}

const ShowHide: React.FC<ShowAndHide> = ({toggelBtn}) => {
  return <>
{ toggelBtn ? <VisibilityOffIcon/> :  <VisibilityIcon/> }
  </>;
};

export default ShowHide;
