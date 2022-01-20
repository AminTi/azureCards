import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface ShowAndHide {
  toggelBtn: boolean;
  btn: boolean;
}

const ShowHide: React.FC<ShowAndHide> = ({ toggelBtn, btn }) => {


  const RetrunElm = () => {
    if (btn) {
      return toggelBtn ? <VisibilityOffIcon /> : <VisibilityIcon />;
    }
    return null;
  };

  return <>{RetrunElm()}</>;
};

export default ShowHide;
