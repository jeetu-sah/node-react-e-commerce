import React from "react";
import Alert from "@mui/material/Alert";

function AlertMsg(props) {

  if (props.alert.status == 200){
      return (
        <>
          <Alert severity="success" color="success">
            {props.alert.msg}
          </Alert>
        </>
      );
  }else{
    return (
      <></>
    );

  }
}

export default AlertMsg;
