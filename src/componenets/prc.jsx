
import React, { useState } from "react";
import {
  faArrowRight,
  faArrowLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Prc = () => {
  const [isVisible, setVisible] = useState(false);

  const handlePage = () => {
    setVisible(!isVisible);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
   <>
   


   </>
  )
}

export default Prc