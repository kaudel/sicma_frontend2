import GameGridCard from "./GameGridCard";

interface Props {}
const GameGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <GameGridCard />
    </div>
  );
};

export default GameGrid;
