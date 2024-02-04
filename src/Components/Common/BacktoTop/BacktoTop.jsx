import React from "react";
import "./style.css";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const BacktoTop = () => {
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    let myBtn = document.getElementById("myBtn");
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      if(myBtn) myBtn.style.display = "block";
    } else {
      if(myBtn) myBtn.style.display = "none";
    }
  }
  

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="backtotop" id="myBtn" onClick={() => topFunction()}>
      <ArrowUpwardRoundedIcon />
    </div>
  );
};

export default BacktoTop;
