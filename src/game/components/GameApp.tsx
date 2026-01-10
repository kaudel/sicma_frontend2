import { CountdownCircleTimer } from "react-countdown-circle-timer";
import GameTimer from "./GameTimer";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast, Toaster } from "sonner";

interface Props {
  timeSeconds: number;
  typeSimbol: string;
  numItems: number;
  range: number;
}
const GameApp = ({ timeSeconds, typeSimbol, numItems, range }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const [operationLabel, setOperationLabel] = useState("");
  const [arrayNums, setArrayNums] = useState<number[]>([]);
  const [counterCorrect, setCounterCorrect] = useState(0);
  const [counterOperations, setCounterOperations] = useState(0);
  const [result, setResult] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [focusCSS, setFocusCss] = useState("focusNormal");

  function randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const ProcessOperation = () => {
    const sum = arrayNums.reduce((sum, n) => sum + n, 0);

    if (sum.toString() === result) {
      console.log(counterCorrect);
      setCounterCorrect(counterCorrect + 1);
    }
    initializeOperation();
  };

  const initializeOperation = () => {
    setIsPlaying(true);

    const arrayNums = Array.from({ length: numItems }, () =>
      randomBetween(1, range)
    );

    setArrayNums(arrayNums);
    const resultLabel = arrayNums.join(typeSimbol);
    setOperationLabel(resultLabel);
    setResult("");
  };

  const handleStart = () => {
    setIsPlaying(true);
    //everytime when the key changes, the game starts again
    setKey((prevKey) => prevKey + 1);
    initializeOperation();
    setCounterCorrect(0);
    inputRef.current?.focus();
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    ProcessOperation();
    setCounterOperations(counterOperations + 1);
  };

  const handleChange = (e) => {
    if (e.key === "enter") {
      ProcessOperation();
    } else {
      setResult(e.target.value);
    }
  };

  const handleFinish = () => {
    if (counterOperations > 1) {
      toast.success(<div>Juego guardado</div>);
    }
  };
  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="flex items-center justify-center">
        <Button onClick={handleStart}>
          {isPlaying ? "Reiniciar" : "Iniciar"}
        </Button>
      </div>
      <hr />
      {isPlaying && (
        <div className="flex items-center justify-center">
          <CountdownCircleTimer
            key={key}
            isPlaying
            duration={timeSeconds}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => {
              handleFinish();
              return { shouldRepeat: false, delay: 1 };
            }}
          >
            {GameTimer}
          </CountdownCircleTimer>
        </div>
      )}

      {isPlaying && (
        <div className="flex items-center justify-center">
          <form className="grid gap-4 max-w-sm" onSubmit={handleSubmit}>
            <div className="grid ">
              <Label htmlFor="name" className="text-lg font-semibold">
                {operationLabel}
              </Label>
              <Input
                id="result"
                type="text"
                placeholder=""
                onChange={handleChange}
                ref={inputRef}
                pattern="[0-9]{0,5}"
                value={result}
                autoComplete="off"
                className="border-destructive focus:border-destructive focus:ring-destructive"
                autoFocus
              />
              <Button type="submit" disabled={!isPlaying && result.trim()}>
                Enviar
              </Button>
            </div>
          </form>
          <div>
            Num operaciones: {counterOperations}
            <br />
            Aciertos: {counterCorrect}
          </div>
        </div>
      )}
    </>
  );
};

export default GameApp;
