import React from "react";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ color }) => {
  return (
    <>
      <section className="colors">
        {color.map((coloritem, colorindex) => {
          return (
            <>
              <SingleColor
                key={nanoid()}
                coloritem={coloritem}
                colorindex={colorindex}
              />
            </>
          );
        })}
      </section>
    </>
  );
};

export default ColorList;
