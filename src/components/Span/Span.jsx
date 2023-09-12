import React, { useState } from "react";

const Span = () => {
  const [buttonText, setButtonText] = useState("+");
  const onClick1 = () => {
    setButtonText("-");
  };

  return (
    <span onClick={() => onClick1} className="plusWatchlist">
      {buttonText}
    </span>
  );
};

export default Span;
