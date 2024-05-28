import React, { useEffect, useRef, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./acordeon.css";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");
  const [selectedValues, setSelectedValues] = useState([]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }
  const handleChange = (value) => () => {
    if (props.selectedValues.includes(value)) {
      // Si el valor ya está en el arreglo, quítalo
      props.setSelectedValues((prev) => prev.filter((item) => item !== value));
    } else {
      // Si el valor no está en el arreglo, agrégalo
      props.setSelectedValues((prev) => [...prev, value]);
    }
  };
  return (
    <div className="accordion__section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title">{props.title}</p>
        <span style={{ marginLeft: "20px" }}>
          {active ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div className="accordion__text" />
        <div key="key">
          <FormGroup>
            {props.arreglo.map((item, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox onChange={handleChange(item.tag)} />}
                label={item.nombre}
              />
            ))}
          </FormGroup>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
