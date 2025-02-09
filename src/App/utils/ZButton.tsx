import { Button } from "@mui/material";

const ZButton = ({ name }: { name: string }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      className="Zbutton Ztype1 Zbtn-txt !px-[24px] !py-[12px] font-raleway"
    >
      {name}
    </Button>
  );
};

export default ZButton;
