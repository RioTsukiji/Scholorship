"use client";

import NumberBox from "@/components/elements/Input/NumberBox";
import {useState} from "react";
import Term from "@/features/calculation/components/Term";
import Button from "@/components/elements/Button/Button";

export default function Home() {
    const [loanStartYear, setLoanStartYear] = useState()
    const [loanStartMonth, setLoanStartMonth] = useState()
    const [loanEndYear, setLoanEndYear] = useState()
    const [loanEndMonth, setLoanEndMonth] = useState()
    const [saving, setSaving] = useState()
    const [result, setResult] = useState(0);

    const fetchResult = async () => {
        //バックエンドを実装した後に実装する
        //const response = await fetch('../features/calculation/api/getResult');
        //const data = await response.json();
        const data = 20000
        setResult(data);
    };

    return (
    <main className="flex flex-col items-center">
        <div className="m-8">
            <h1 className="text-text text-2xl text-center">Loan-based scholarship </h1>
            <Term startYear={loanStartYear} setStartYear={setLoanStartYear} startMonth={loanStartMonth} setStartMonth={setLoanStartMonth} endYear={loanEndYear} setEndYear={setLoanEndYear} endMonth={loanEndMonth} setEndMonth={setLoanEndMonth}/>
        </div>
        <div className="m-8">
            <NumberBox number={saving} setNumber={setSaving} label={"saving"}/>
        </div>
        <div className="m-8">
            <Button onClick={fetchResult}/>
        </div>
        <div className="m-8">
            <h1 className="text-text text-2xl text-center">Debt</h1>
            <p>{result}</p>
        </div>
    </main>
  )
}
