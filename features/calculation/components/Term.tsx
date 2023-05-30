import React, {ReactNode} from "react";
import NumberBox from "@/components/elements/Input/NumberBox";

type Props = {
    startYear: number,
    setStartYear: ReactNode,
    startMonth: number,
    setStartMonth: ReactNode,
    endYear: number,
    setEndYear: ReactNode,
    endMonth: number,
    setEndMonth: ReactNode,
};

const Term: React.FC<Props> = (
    {
        startYear,
        setStartYear,
        startMonth,
        setStartMonth,
        endYear,
        setEndYear,
        endMonth,
        setEndMonth}
) => {
    return (
        <div className="flex flex-row items-center">
            <NumberBox number={startYear} setNumber={setStartYear} label={"year"}/>
            <NumberBox number={startMonth} setNumber={setStartMonth} label={"month"}/>
            <p className="text-text text-2xl">〜</p>
            <NumberBox number={endYear} setNumber={setEndYear} label={"year"}/>
            <NumberBox number={endMonth} setNumber={setEndMonth} label={"month"}/>
        </div>
    );
};

export default Term;
