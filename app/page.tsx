import { AboutAs } from "@/components/about-us";
import { Banner } from "@/components/common/banner";
import { MainInfo } from "@/components/main-info";
import { SecondaryInfo } from "@/components/secondary-info";
import { AdditionaInfo } from "@/components/additional-information";

export default function Home(): JSX.Element {
  return (
    <main>
      <div>
        <MainInfo />
        <AboutAs />
        <Banner repeatCount={12} text={"lorem ipsum"} />
        <SecondaryInfo />
        <AdditionaInfo />
      </div>
    </main>
  );
}
