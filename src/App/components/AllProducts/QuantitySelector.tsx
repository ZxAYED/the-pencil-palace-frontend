import { Button, Box, Typography } from "@mui/material";

const QuantitySelector = ({
  quantity,
  handleIncrease,
  handleDecrease,
}: {
  quantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}) => {
  return (
    <Box className="flex items-center space-x-2">
      <Button
        sx={{
          color: "#424242",
          borderColor: "#424242",
        }}
        variant="outlined"
        onClick={handleDecrease}
        disabled={quantity <= 1}
      >
        -
      </Button>

      <Typography variant="h6" className="text-[20px] font-semibold px-[16px]">
        {quantity}
      </Typography>

      <Button
        sx={{
          color: "#424242",
          borderColor: "#424242",
        }}
        variant="outlined"
        onClick={handleIncrease}
      >
        +
      </Button>
    </Box>
  );
};

export default QuantitySelector;
