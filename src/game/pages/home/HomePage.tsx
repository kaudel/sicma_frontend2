import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "enrolled" | "available"
  >("all");
  return (
    <>
      <CustomJumbotron title="SICMA" description="sicma description" />
      <CustomBreadcrumbs currentPage="Home" />

      {/*Tabs */}
      <Tabs value={activeTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
            All
          </TabsTrigger>
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

        <TabsContent value="all">
          <h1>All</h1>
        </TabsContent>
        <TabsContent value="favorites">
          <h1>favorites</h1>
        </TabsContent>
        <TabsContent value="enrolled">
          <h1>enrolled</h1>
        </TabsContent>
        <TabsContent value="available">
          <h1>available</h1>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default HomePage;
