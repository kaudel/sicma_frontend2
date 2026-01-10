import { Label } from "@/components/ui/label";
import React from "react";

interface Props {
  remainingTime: number;
}

const GameTimer = ({ remainingTime }: Props) => {
  if (remainingTime === 0) {
    return <div className="timer">Terminado</div>;
  }
  return (
    <div className="timer">
      <div className="flex justify-center ">
        <Label className="scroll-m-20 text-5xl font-extrabold tracking-tight">
          {remainingTime}
        </Label>
      </div>
      <div className="flex justify-center text-sm">Segundos</div>
      <div className="flex justify-center text-sm">restantes</div>
    </div>
  );
};

export default GameTimer;
