import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import Accordion, { AccordionSlots } from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { SyntheticEvent, useState } from "react";

const FAQAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box className="max-w-[1280px] !mt-[140px] !mx-auto">
      <Typography
        className=" !text-center !font-[500]  !mb-[16px]"
        variant="h4"
      >
        Frequently Asked Questions
      </Typography>
      <Accordion
        className=" !mt-[8px]"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        slots={{ transition: Fade as AccordionSlots["transition"] }}
        slotProps={{ transition: { timeout: 400 } }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="!text-[18px] " component="span">
            What types of stationery products do you offer?
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography className="!text-[18px] ">
            We offer a wide variety of stationery products, including premium
            pens, notebooks, journals, art supplies, office accessories, and
            much more!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className=" !mt-[8px] drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="!text-[18px] " component="span">
            Do you offer bulk discounts for businesses?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="!text-[18px] ">
            Yes! We provide bulk discounts for schools, offices, and businesses.
            Contact our sales team for a custom quote.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className=" !mt-[8px] drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography className="!text-[18px] " component="span">
            What is your return policy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="!text-[18px] ">
            We offer a 30-day hassle-free return policy. Products must be in
            their original condition and packaging. Contact customer service for
            assistance.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className=" !mt-[8px] drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]"
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography className="!text-[18px] " component="span">
            How long does shipping take?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="!text-[18px] ">
            Standard shipping typically takes 3-7 business days. Expedited
            shipping options are available at checkout.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default FAQAccordion;
