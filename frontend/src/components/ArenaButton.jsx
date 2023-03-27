import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ArenaButton = ({ activeButton, setToggle, toggle }) => {
  const handleClick = () => {
    setToggle((prevToogle) => !prevToogle);
    console.log("test");
  };

  return (
    <>
      {toggle ? (
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
