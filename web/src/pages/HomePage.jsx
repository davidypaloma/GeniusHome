import PageLayout from "../components/layout/PageLayout";
import LargeWidget from "../components/widgets/LargeWidget";
import SmallWidget from "../components/widgets/SmallWidget";

function HomePage() {
  return (
    <>
      <PageLayout title="Home">

        <div className="grid grid-rows-[repeat(3,1fr)]">

          <LargeWidget title="Shopping list" date="19/04/2023">
            {/* children */}
          </LargeWidget>

          <LargeWidget title="Cleaning tasks" date="21/04/2023">
            {/* children */}
          </LargeWidget>

          <div className="py-4 px-20 grid grid-cols-2 gap-40">
            <SmallWidget title="Weather">
              {/* children */}
            </SmallWidget>

            <SmallWidget title="Calendar">
              {/* children */}
            </SmallWidget>

          </div>
          
        </div>

      </PageLayout>
    </>
  );
}

export default HomePage;