import { Section } from "../common/section/section";
import { SectionsWrapper, ContainerSections } from "../containers";
import { Htag } from "@/components/common/Htag";

import manSmile from "@/helpers/images/man-smile.png";
import shieldTick from "@/helpers/icons/shield-tick.svg";
import dataflow from "@/helpers/icons/dataflow.svg";
import barChartCircle from "@/helpers/icons/bar-chart-circle.svg";

export const SecondaryInfo = () => {
  return (
    <ContainerSections>
      <SectionsWrapper>
        <Htag tag="h1" styles="mb-[30px]">
          lorem ipsum dolor
        </Htag>
        <Section
          title="Lorem ipsum dolor"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          icon={shieldTick}
        />
        <Section
          title="Dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          icon={dataflow}
        />
        <div className="sm:ml-[auto]">
        <Section
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          image={manSmile}
          styles={{
            container: "sm:flex sm:max-w-[850px] sm:ml-auto",
            image: "sm:max-h=[410px] sm:min-w-[410px] sm:max-w-[410px] sm:mr-[30px]",
          }}
          icon={barChartCircle}
        />
        </div>
      </SectionsWrapper>
    </ContainerSections>
  );
};
