import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { LifeMatrix } from "../service/LifeMatrix";
import { getRandomMatrix } from "../utils/random";
import { Matrix } from "./Matrix";

type Props = {
    dimensions: number;
    ticInterval: number;
}

export const Life: React.FC<Props> = ({dimensions, ticInterval}) => {
   const lifeMatrix = React.useRef<LifeMatrix>();
   const [numbers, setNumbers] = React.useState<number[][]>([]);

   function tic() {
    if (lifeMatrix.current == null) {
        lifeMatrix.current =
         new LifeMatrix(getRandomMatrix(dimensions, dimensions, 0, 1))
    }
    /// else???
    setNumbers(lifeMatrix.current.nextStep());
}

React.useEffect(() => {
    const interval = setInterval(tic, ticInterval);
    return () => clearInterval(interval);
},[ticInterval]);
    
/// when <><> (see Timer), when <> - as input?
    return <div>
        <Matrix numbers = {numbers}/>
    </div>
}
