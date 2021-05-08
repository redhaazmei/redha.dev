import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";

const Hackathons = () => {
  const hackathons = [
    {
      title: "Microsoft Azure Virtual Hackathon 2021",
      description: "Providing innovative solutions in advanced data analytics and AI for booming industries",
    },
    {
      title: "MyHackathon Kuching 2020",
      description: "Presented on waste management solution through IoT and route optimization",
    },
    {
      title: "Maxis IoT Challenge 2019",
      description: "Presented on waste management solution through IoT and route optimization",
    },
    {
      title: "Teraju SUPERB 2019",
      description: "Presented on waste management solution through IoT and route optimization",
    },
  ];
  return (
    <>
      <SimpleGrid columns={[1, 2]} spacing={4} mb={"8"}>
        {hackathons.map((hackathon) => {
          return (
            <Box border="1px" borderRadius={"lg"} p={"4"}>
              <Heading size={"md"} mb={"2"}>
                {hackathon.title}
              </Heading>
              <Text>{hackathon.description}</Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Hackathons;
