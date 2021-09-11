import React from "react";

function SectionHeader({ title, big }) {
  let css = "section-heading";
  if (big) css += " section-heading-border";
  return (
    <div>
      <h2 className={css}>{title && title}</h2>
    </div>
  );
}

export default SectionHeader;
