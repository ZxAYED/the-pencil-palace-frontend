import { Button } from "@mui/material";

const ZButton = ({
  name,
  fullWidth,
}: {
  name: string;
  fullWidth?: boolean;
}) => {
  return (
    <Button
      type="submit"
      variant="contained"
      className="Zbutton Ztype1 Zbtn-txt !px-[24px] !py-[12px] font-raleway"
      fullWidth={fullWidth}
    >
      {name}
    </Button>
  );
};

export default ZButton;
