import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router";

const GameGridCard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/game/${1}`);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
      <div className="relative h-64 " onClick={handleClick}></div>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 line-clamp-2">descripcion</p>
      </CardContent>
    </Card>
  );
};

export default GameGridCard;
