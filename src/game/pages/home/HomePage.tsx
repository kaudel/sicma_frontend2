import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GameApp from "@/game/components/GameApp";
import GameGrid from "@/game/components/GameGrid";
import { useState } from "react";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "favorites" | "enrolled" | "available"
  >("favorites");
  return (
    <>
      <CustomJumbotron title="SICMA" description="sicma description" />
      <CustomBreadcrumbs currentPage="Home" />

      {/* <GameApp /> */}
      {/*Tabs */}
      <Tabs value={activeTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            value="favorites"
            onClick={() => setActiveTab("favorites")}
          >
            Favoritos
          </TabsTrigger>
          <TabsTrigger
            value="enrolled"
            onClick={() => setActiveTab("enrolled")}
          >
            Asignados
          </TabsTrigger>
          <TabsTrigger
            value="available"
            onClick={() => setActiveTab("available")}
          >
            Disponibles
          </TabsTrigger>
        </TabsList>

        <TabsContent value="favorites">
          <h1>favorites</h1>
          <GameGrid />
        </TabsContent>
        <TabsContent value="enrolled">
          <h1>enrolled</h1>
          <GameGrid />
        </TabsContent>
        <TabsContent value="available">
          <h1>available</h1>
          <GameGrid />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default HomePage;
