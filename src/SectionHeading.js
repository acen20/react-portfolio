import React from "react";

function SectionHeader({ title, big }) {
  return (
    <div>
      <h2 className="section-heading">
        <div className={big ? "section-heading-border" : ""}></div>
        {title && title}
      </h2>
    </div>
  );
}

export default SectionHeader;
