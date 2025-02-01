import { Box } from "@mui/material";

const Card = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "360px",
          md: "420px",
        },
      }}
      className="flex flex-col  gap-4 h-[500px] w-[420px] border-2 border-[#2e2e2e] Zcard  rounded-[8px] !box-border"
    >
      <div className="bg-white w-[384px] shadow-xl rounded-[16px] overflow-hidden  p-[20px] space-y-[16px] Ztitle">
        <figure className="relative">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="w-[100%] h-[224px] object-cover Zimage"
          />
        </figure>
        <div className="p-[20px] space-y-[16px] Ztitle">
          <h2 className="text-[24px] font-[700] flex items-center Ztitle">
            Shoes!
            <span className="bg-[#29b6f6] text-white ml-[12px] px-[8px] py-[4px] text-[12px] rounded-[8px] Ztitle">
              NEW
            </span>
          </h2>
          <p className="text-[14px] text-[#757575] Ztitle">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="flex justify-end space-x-[8px] pt-[12px]">
            <span className="text-[12px] font-[500] px-[12px] py-[4px] border border-[#cccccc] rounded-[50px]">
              Fashion
            </span>
            <span className="text-[12px] font-[500] px-[12px] py-[4px] border border-[#cccccc] rounded-[50px]">
              Products
            </span>
            <span className="text-[12px] font-[500] px-[12px] py-[4px] border border-[#cccccc] rounded-[50px] Zprice">
              price 200
            </span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Card;
