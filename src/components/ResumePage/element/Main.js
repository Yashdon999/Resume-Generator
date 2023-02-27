import { Box, Container, Stack, Heading, Button } from "@chakra-ui/react";
import Builder from "./Builder";
import ResumePreview from "./ResumePreview";
import ThemeSelect from "./Theme/ThemeSelect";
import { useReactToPrint } from "react-to-print";
import { useResume } from "../Context";
import { MdOutlineFileDownload } from "react-icons/md";

const Main = () => {
  const { printElem } = useResume();

  const handlePrint = useReactToPrint({
    content: () => printElem.current,
  });

  return (
    <Container bg={"gray.50"} minW={"full"} py={10} id="builder">
      <Heading
        as="h4"
        size="lg"
        textAlign={"center"}
        color={"gray.700"}
        style={{ fontFamily: "Poppins" }}
        fontWeight={"medium"}
      >
        Builder Dashboard
      </Heading>

      <Container maxW={"7xl"} px={8} my={3}>
        <Stack
          justifyContent={"space-between"}
          pt={4}
          direction={{ base: "column", sm: "row" }}
        >
          <ThemeSelect />
          <Button
            rightIcon={<MdOutlineFileDownload />}
            onClick={handlePrint}
            colorScheme={"blue"}
          >
            Download
          </Button>
        </Stack>
      </Container>

      <Stack
        direction={{ base: "column", md: "row" }}
        // mt={16}
        gap={4}
        mx={{ base: 2, md: 12 }}
        my={8}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <Builder />
        <ResumePreview />
      </Stack>

      {/* Add a media query for smaller screens */}
      <Box display={{ base: "block", md: "none" }} textAlign="center" mt={8}>
        <Button
          rightIcon={<MdOutlineFileDownload />}
          onClick={handlePrint}
          colorScheme={"blue"}
        >
          Download
        </Button>
      </Box>
    </Container>
  );
};

export default Main;
