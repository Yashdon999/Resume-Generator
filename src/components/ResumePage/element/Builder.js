import {
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import About from "./BuildSteps/About";
import Education from "./BuildSteps/Education";
import Projects from "./BuildSteps/Projects";
import Skills from "./BuildSteps/Skills";
import Work from "./BuildSteps/Work";
import Template from "./BuildSteps/Template";
import styled from "styled-components";

const BuilderWrapper = styled(Box)`
 

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const BuilderTabList = styled(TabList)`

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const BuilderTab = styled(Tab)`
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

const BuilderTabPanel = styled(TabPanel)`

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const Builder = () => {
  return (
    <BuilderWrapper>
      <Tabs isFitted variant="enclosed">
        <BuilderTabList>
          <BuilderTab>
            <Text fontWeight={"medium"}>About</Text>
          </BuilderTab>
          <BuilderTab>
            <Text fontWeight={"medium"}>Education</Text>
          </BuilderTab>
          <BuilderTab>
            <Text fontWeight={"medium"}>Skills</Text>
          </BuilderTab>
          <BuilderTab>
            <Text fontWeight={"medium"}>Work</Text>
          </BuilderTab>
          <BuilderTab>
            <Text fontWeight={"medium"}>Projects</Text>
          </BuilderTab>
          <BuilderTab>
            <Text fontWeight={"medium"}>Template</Text>
          </BuilderTab>
        </BuilderTabList>
        <TabPanels>
          <BuilderTabPanel>
            <About />
          </BuilderTabPanel>
          <BuilderTabPanel>
            <Education />
          </BuilderTabPanel>
          <BuilderTabPanel>
            <Skills />
          </BuilderTabPanel>
          <BuilderTabPanel>
            <Work />
          </BuilderTabPanel>
          <BuilderTabPanel>
            <Projects />
          </BuilderTabPanel>
          <BuilderTabPanel>
            <Template />
          </BuilderTabPanel>
        </TabPanels>
      </Tabs>
    </BuilderWrapper>
  );
};

export default Builder;
