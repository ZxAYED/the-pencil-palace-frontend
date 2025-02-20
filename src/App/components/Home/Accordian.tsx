import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { SyntheticEvent, useState } from "react";

const FAQAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box className="!max-w-[1280px] !mx-auto !mt-[80px] !px-[20px] !py-[80px]">
      <Typography
        className="!text-center !font-[600] !text-[36px] !mb-[40px] !text-[#424242]"
        variant="h2"
      >
        Frequently Asked Questions
      </Typography>

      <Box className="!space-y-[16px]">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className="!rounded-[8px] !shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:!shadow-[0_6px_8px_rgba(0,0,0,0.15)] !transition-all !duration-300"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="!text-[#4a4a4a]" />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="!bg-gradient-to-r !from-[#f0f4ff] !to-[#e8f0ff] hover:!from-[#e0e8ff] hover:!to-[#d8e0ff] !transition-all !duration-300"
          >
            <Typography className="!text-[18px] !font-[500] !text-[#424242]">
              What types of stationery products do you offer?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="!bg-[#ffffff]">
            <Typography className="!text-[16px] !text-[#4a4a4a]">
              We offer a wide variety of stationery products, including premium
              pens, notebooks, journals, art supplies, office accessories, and
              much more!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          className="!rounded-[8px] !shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:!shadow-[0_6px_8px_rgba(0,0,0,0.15)] !transition-all !duration-300"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="!text-[#4a4a4a]" />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="!bg-gradient-to-r !from-[#f0f4ff] !to-[#e8f0ff] hover:!from-[#e0e8ff] hover:!to-[#d8e0ff] !transition-all !duration-300"
          >
            <Typography className="!text-[18px] !font-[500] !text-[#424242]">
              Do you offer bulk discounts for businesses?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="!bg-[#ffffff]">
            <Typography className="!text-[16px] !text-[#4a4a4a]">
              Yes! We provide bulk discounts for schools, offices, and
              businesses. Contact our sales team for a custom quote.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          className="!rounded-[8px] !shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:!shadow-[0_6px_8px_rgba(0,0,0,0.15)] !transition-all !duration-300"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="!text-[#4a4a4a]" />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="!bg-gradient-to-r !from-[#f0f4ff] !to-[#e8f0ff] hover:!from-[#e0e8ff] hover:!to-[#d8e0ff] !transition-all !duration-300"
          >
            <Typography className="!text-[18px] !font-[500] !text-[#424242]">
              What is your return policy?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="!bg-[#ffffff]">
            <Typography className="!text-[16px] !text-[#4a4a4a]">
              We offer a 30-day hassle-free return policy. Products must be in
              their original condition and packaging. Contact customer service
              for assistance.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          className="!rounded-[8px] !shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:!shadow-[0_6px_8px_rgba(0,0,0,0.15)] !transition-all !duration-300"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="!text-[#4a4a4a]" />}
            aria-controls="panel4-content"
            id="panel4-header"
            className="!bg-gradient-to-r !from-[#f0f4ff] !to-[#e8f0ff] hover:!from-[#e0e8ff] hover:!to-[#d8e0ff] !transition-all !duration-300"
          >
            <Typography className="!text-[18px] !font-[500] !text-[#424242]">
              How long does shipping take?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="!bg-[#ffffff]">
            <Typography className="!text-[16px] !text-[#4a4a4a]">
              Standard shipping typically takes 3-7 business days. Expedited
              shipping options are available at checkout.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQAccordion;
