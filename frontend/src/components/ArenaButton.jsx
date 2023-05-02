import React from "react";
import Button from "react-bootstrap/Button";

const ArenaButton = ({ activeButton, setToggle, toggle }) => {
  const handleClick = () => {
    setToggle((prevToogle) => !prevToogle);
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
          style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translateX(-50%)' }}
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
          style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translateX(-50%)' }}
        >
          Zur Arena
        </Button>
      )}
    </>
  );
};

export default ArenaButton;
