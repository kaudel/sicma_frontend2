import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";

const HomePage = () => {
  return (
    <>
      <CustomJumbotron title="SICMA" description="sicma description" />
      <CustomBreadcrumbs currentPage="Home" />
    </>
  );
};

export default HomePage;
