import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ArenaButton = ({ activeButton, setToggle, toogle }) => {
  const handleClick = () => {
    setToggle((toogle) => {
      console.log("toogle", toogle)
      toogle = !toogle});
    console.log("test");
  };

  return (
    <>
      {toogle ? (
        <Button
          variant="primary"
          size="lg"
          onClick={handleClick}
          disabled={!activeButton}
          active={activeButton}
        >
          Zum Start
        </Button>
      ) : (
        <Button
          variant="primary"
          size="lg"
          onClick={handleClick}
          disabled={!activeButton}
          active={activeButton}
        >
          Zur Arena
        </Button>
      )}
    </>
  );
};

export default ArenaButton;
