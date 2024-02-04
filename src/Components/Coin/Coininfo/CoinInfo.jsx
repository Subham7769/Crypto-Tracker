import React, { useState } from "react";
import "./style.css";
const CoinInfo = ({ heading, desc }) => {
  const shortDesc = desc.slice(0, 300) + "<p  style='color:var(--grey)'> Read More...</p>";
  const longDesc = desc + "<p  style='color:var(--grey)'> Read Less...</p>";
  const [expand, setExpand] = useState(false);

  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      {desc.length > 300 ? (
        <p
          onClick={() => setExpand(!expand)}
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: expand ? longDesc : shortDesc }}
        />
      ) : (
        <p
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      )}
    </div>
  )
};

export default CoinInfo;
