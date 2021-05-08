import { Divider, Flex, Text, Stack, Icon, Link, Box } from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const socials = [
    {
      site: "Github",
      href: "https://github.com/redhaazmei",
      icon: FiGithub,
    },
    {
      site: "Linkedin",
      href: "https://www.linkedin.com/in/redhaazmei/",
      icon: FiLinkedin,
    },
    {
      site: "Twitter",
      href: "https://twitter.com/redhaazmei",
      icon: FiTwitter,
    },
  ];
  return (
    <>
      <Box mb={"8"}>
        <Divider mb={"4"} />
        <Flex direction={["column-reverse", "row"]} align="center" justify="space-between">
          <Text fontSize={"xs"}>&copy;{new Date().getFullYear()} Redha Azmei. All Rights Reserved.</Text>
          <Stack direction="row" spacing="3" mb={"2"}>
            {socials.map((social) => {
              return (
                <Link key={social.site} href={social.href} isExternal>
                  <Icon as={social.icon} w="5" h="5" _hover={{ color: "teal.300" }} />
                </Link>
              );
            })}
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
