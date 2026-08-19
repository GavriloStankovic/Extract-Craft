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
  return (
    <section className="questions-wrapper" aria-labelledby="questions-heading">
      <div className="questions-header">
        <h2 id="questions-heading">Frequently Asked Questions</h2>
      </div>
      <div className="questions">
        <Accordion
          allowZeroExpanded={true}
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded={[0]}
        >
          {data.map((item, index) => (
            <AccordionItem className="accordionItem" key={item.heading} uuid={index}>
              {/* The heading role and level live on AccordionItemHeading, so the
                  question itself must not be another heading element. */}
              <AccordionItemHeading aria-level={3}>
                <AccordionItemButton className="accordionButton">
                  <span className="accordion-title">{item.heading}</span>
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
    </section>
  );
};

export default Questions;
