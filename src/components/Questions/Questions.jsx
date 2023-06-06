import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import data from "../../utils/data";
import "./Questions.scss";
import arrowDown from "../../assets/arrow-down/arrow-down.svg";
import arrowUp from "../../assets/arrow-up/arrow-up.svg";

const Questions = () => {
  const [expandedItems, setExpandedItems] = useState([0]);

  const handleAccordionChange = (itemId) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  return (
    <div className="questions-wrapper">
      <div className="questions-header">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="questions">
        <Accordion
          allowZeroExpanded={true}
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded={expandedItems}
          onChange={handleAccordionChange}
        >
          {data.map((item, index) => (
            <AccordionItem className="accordionItem" key={index} uuid={index}>
              <AccordionItemHeading>
                <AccordionItemButton className="accordionButton">
                  <h2>{item.heading}</h2>
                  <AccordionItemState>
                    {({ expanded }) =>
                      expanded ? (
                        <img src={arrowUp} alt="" />
                      ) : (
                        <img src={arrowDown} alt="" />
                      )
                    }
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordionPanel">
                <p>{item.detail}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Questions;
