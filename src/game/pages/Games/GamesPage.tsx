import GameApp from "@/game/components/GameApp";

const GamesPage = () => {
  return (
    <div>
      GamesPage
      <hr />
      <GameApp timeSeconds={10} typeSimbol="+" numItems={2} range={10} />
    </div>
  );
};

export default GamesPage;
