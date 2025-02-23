import { Box, Card, CardContent, Typography } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar"; // Nivo Bar Chart
import { useGenerateRevenueQuery } from "../../Redux/features/orders/orderApi";
import SocialSection from "../../utils/SocialSection";

function AdminDashboard() {
  const { data: revenueData, isLoading } = useGenerateRevenueQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  console.log(revenueData);

  const stats = [
    { title: "Total Orders", value: 1250 },
    { title: "Total Users", value: 3478 },
    { title: "Total Products", value: 142 },
    { title: "Monthly Revenue", value: `$${revenueData?.totalRevenue || 0}` },
  ];

  return (
    <Box
      sx={{
        textAlign: {
          xs: "center",
          md: "left",
        },
      }}
      className="flex  justify-center flex-col p-[16px]  mt-[16px]"
    >
      <Typography variant="h4" fontWeight="bold" color="#424242" mb={2}>
        Welcome to Pencil Palace Website
      </Typography>
      <Typography variant="body1" color="#757575" mb={3}>
        Pencil Palace is your go-to destination for premium stationery. Join our
        thousands of followers and stay updated with the latest products and
        offers!
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "repeat(4, 1fr)" }}
        gap={3}
      >
        {stats.map((stat, index) => (
          <Card
            key={index}
            sx={{
              textAlign: "center",
              p: 3,
              backgroundColor: "#FFF3E0",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {stat.title}
              </Typography>
              <Typography variant="h5" color="primary" fontWeight="bold">
                {stat.value}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box
        mt={5}
        p={3}
        bgcolor="white"
        borderRadius="8px"
        boxShadow="0px 4px 10px rgba(0,0,0,0.1)"
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
          Monthly Revenue
        </Typography>
        {isLoading ? (
          <Typography textAlign="center">Loading revenue data...</Typography>
        ) : (
          <Box height={350}>
            <ResponsiveBar
              data={revenueData?.monthlyRevenue || []}
              keys={["revenue"]}
              indexBy="month"
              margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
              padding={0.3}
              colors={["#FF7043"]}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Month",
                legendPosition: "middle",
                legendOffset: 40,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Revenue ($)",
                legendPosition: "middle",
                legendOffset: -50,
              }}
              enableLabel={false}
              tooltip={({ id, value, color }) => (
                <Box
                  sx={{
                    backgroundColor: color,
                    color: "#fff",
                    p: 1,
                    borderRadius: "5px",
                    fontSize: "14px",
                  }}
                >
                  {id}: ${value}
                </Box>
              )}
            />
          </Box>
        )}
      </Box>

      <SocialSection />
    </Box>
  );
}

export default AdminDashboard;
