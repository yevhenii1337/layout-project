import * as React from "react";
import { Section } from "../common/section/section";
import { SectionsWrapper, ContainerSections } from "../containers";
import { Htag } from "@/components/common/Htag";

import women from "@/helpers/images/women.png";
import man from "@/helpers/images/man.png";
import usersPlus from "@/helpers/icons/users-plus.svg";
import server from "@/helpers/icons/server.svg";
import target from "@/helpers/icons/target.svg";
import percent from "@/helpers/icons/percent.svg";
import cpuChip from "@/helpers/icons/cpu-chip.svg";
import cube from "@/helpers/icons/cube.svg";

export const MainInfo: React.FC = (): JSX.Element => {
  return (
    <ContainerSections>
      <SectionsWrapper>
        <Htag tag="h1" styles="mb-[44px] sm:mb-[30px]">
          Lorem ipsum
        </Htag>
        <Section
          title="Dolor sit"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          icon={usersPlus}
        />
        <Section
          title="Lorem ipsum dolor"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          icon={server}
        />
        <Section
          title="Lorem ipsum dolor sit"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image={women}
          icon={target}
        />
        <Section
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          icon={percent}
        />
        <Section
          title="Dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
          icon={cpuChip}
        />
        <div className="sm:ml-[auto]">
        <Section
          title="Lorem ipsum dolor"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          image={man}
          styles={{
            container: "sm:flex sm:max-w-[850px]",
            image: "sm:max-h=[410px] sm:min-w-[410px] sm:max-w-[410px] sm:mr-[30px]",
          }}
          icon={cube}
        />
        </div>
      </SectionsWrapper>
    </ContainerSections>
  );
};
