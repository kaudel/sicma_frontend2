import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";
import GameStats from "@/game/components/GameStats";

const StatsPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Estadisticas"
        description="Estadisticas de juego"
      />
      <CustomBreadcrumbs
        currentPage="Estadisticas"
        breadcrumbs={[
          { label: "Home1", to: "/" },
          { label: "Home2", to: "/" },
        ]}
      />
      <GameStats />
    </>
  );
};

export default StatsPage;
