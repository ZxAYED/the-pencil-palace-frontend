import { Button } from "@mui/material";

const ZButton = ({
  name,
  fullWidth,
  onClick,
}: {
  name: string;
  fullWidth?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Button
      type="button"
      variant="contained"
      className="Zbutton Ztype1 Zbtn-txt !px-[24px] !py-[12px] font-raleway"
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default ZButton;
