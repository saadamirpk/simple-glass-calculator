import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { equal } from "assert";
import { evaluate } from "mathjs";

function App() {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");

    function clear() {
        setExpression("");
        setResult("");
    }

    function numPress(e: any) {
        setExpression((prev) => {
            if (e.target.value == ".") {
                var hasNumber = /\d/;
                if (
                    prev == "" ||
                    !hasNumber.test(
                        prev.substring(prev.length - 1, prev.length)
                    )
                ) {
                    return "0.";
                } else if (prev.includes(".")) {
                    return prev;
                }
            }
            if (result != "") {
                return e.target.value;
            } else {
                return prev + e.target.value;
            }
        });
    }

    function operationPress(e: any) {
        setExpression((prev) => prev + " " + e.target.value + " ");
    }

    function equalPress() {
        setResult(evaluate(expression));
    }

    return (
        <div className="holder">
            <div className="calculator">
                <button onClick={clear}>C</button>
                <div className="textitem">
                    <p>{expression}</p>
                    <p>{result}</p>
                </div>
                <button onClick={numPress} value={"("}>
                    (
                </button>
                <button onClick={numPress} value={")"}>
                    )
                </button>
                <button onClick={numPress} value={"^"}>
                    ^
                </button>
                <button className="op" onClick={numPress} value={"sqrt("}>
                    sq
                </button>
                <button onClick={numPress} value={"1"}>
                    1
                </button>
                <button onClick={numPress} value={"2"}>
                    2
                </button>
                <button onClick={numPress} value={"3"}>
                    3
                </button>
                <button className="op" onClick={operationPress} value={"/"}>
                    /
                </button>
                <button onClick={numPress} value={"4"}>
                    4
                </button>
                <button onClick={numPress} value={"5"}>
                    5
                </button>
                <button onClick={numPress} value={"6"}>
                    6
                </button>
                <button className="op" onClick={operationPress} value={"*"}>
                    *
                </button>
                <button onClick={numPress} value={"7"}>
                    7
                </button>
                <button onClick={numPress} value={"8"}>
                    8
                </button>
                <button onClick={numPress} value={"9"}>
                    9
                </button>
                <button className="op" onClick={operationPress} value={"-"}>
                    -
                </button>
                <button onClick={numPress} value={"0"}>
                    0
                </button>
                <button onClick={numPress} value={"."}>
                    .
                </button>
                <button onClick={equalPress}>=</button>
                <button className="op" onClick={operationPress} value={"+"}>
                    +
                </button>
            </div>
        </div>
    );
}

export default App;
