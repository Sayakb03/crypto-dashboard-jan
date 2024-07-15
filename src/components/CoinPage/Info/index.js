import React, { useState } from "react";
import "./styles.css";

function Info({ title, desc }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortDescription = (
    <>
      {desc.slice(0, 300)}
      <br />
      <p style={{ color: "var(--grey)", cursor: "pointer" }}>Read More...</p>
    </>
  );

  const longDescription = (
    <>
      {desc}
      <br />
      <p style={{ color: "var(--grey)", cursor: "pointer" }}>Read Less...</p>
    </>
  );

  return (
    <div className="grey-wrapper info-component">
      <h1>{title}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: desc.length >= 300 ? (isExpanded ? longDescription : shortDescription) : desc,
        }}
        className="info-p"
        onClick={() => setIsExpanded(!isExpanded)}
      />
    </div>
  );
}

export default Info;

