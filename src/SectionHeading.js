import React from "react";

function SectionHeader({ title }) {
  return (
    <div>
      <h2 className="section-heading">{title && title}</h2>
    </div>
  );
}

export default SectionHeader;
