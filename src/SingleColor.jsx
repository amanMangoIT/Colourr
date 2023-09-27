import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ coloritem, colorindex }) => {
  const { hex, weight } = coloritem;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color Copied to Clipboard");
      } catch (error) {
        toast.error("Copied error");
      }
    } else {
      toast.error("Clipboard not supported");
    }
  };

  return (
    <>
      <article
        className={colorindex > 10 ? "color color-light" : "color"}
        onClick={saveToClipboard}
        style={{ background: `#${hex}` }}
      >
        SingleColor
      </article>
      <p className='percent-value'>{weight}</p>
      <p className='color-value'>{`#${hex}`}</p>
    </>
  );
};

export default SingleColor;
