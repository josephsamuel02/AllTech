import "./Chart.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import "chart.js/auto";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import { incomeStats } from "../../store/actions/Stats";
const Chart = () => {
    const income = useSelector((state) => state.incomeStats);
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const [showChat, setShowChat] = useState(false);
    const [chartType, setChartType] = useState("Line");
    const [incomeDate, setIncomeDate] = useState([]);
    const [incomeValue, setIncomeValue] = useState([]);
    // console.log(income);

    const MONTH = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    );
    const [userMonth, setUserMonth] = useState();
    const [newUserCount, setNewUserCount] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        income &&
            setTimeout(() => {
                income.map((i) => setIncomeValue((prv) => [...prv, i.total]));
            }, 4000);
    }, [income]);

    useEffect(() => {
        //set the data
        setTimeout(() => {
            setData({
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sept",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: " Income ",
                        data: incomeValue,
                        backgroundColor: [
                            "yellow",
                            "rgb(72, 69, 236)",
                            "orange",
                            "rgb(42, 235, 83)",
                            "rgb(226, 48, 226)",
                            "dodgerblue",
                            "tomato",

                            "rgb(221, 234, 241)",
                        ],
                        // borderColor: ["rgb(0, 0, 0)"],
                        borderWidth: 1,
                        borderRadius: 2,
                        hoverBorderColor: "Black",
                    },
                ],
            });
        }, 15000);

        //display cart
        setTimeout(() => {
            setShowChat(true);
        }, 20000);
    }, [incomeValue]);

    // const myData = {
    //     labels: ["one", "two", "three", "four"],
    //     datasets: [
    //         {
    //             data: [34, 46, 95, 76, 57, 7, 63, 98],
    //         },
    //     ],
    // };

    useEffect(() => dispatch(incomeStats()), []);

    return (
        <div className="chartGraph">
            <div>
                <button
                    className="chartbtn"
                    onClick={() => setChartType("Bar")}
                >
                    Bar
                </button>
                <button
                    className="chartbtn"
                    onClick={() => setChartType("Line")}
                >
                    Line
                </button>
                <button
                    className="chartbtn"
                    onClick={() => setChartType("Doughnut")}
                >
                    Doughnut
                </button>
                <button
                    className="chartbtn"
                    onClick={() => setChartType("Pie")}
                >
                    Pie
                </button>
            </div>
            {showChat && (
                <>
                    {chartType == "Bar" && (
                        <Bar
                            data={data}
                            height={400}
                            width={600}
                            options={{
                                maintainAspectRatio: false,
                            }}
                            title="Average Income Chart For The Year"
                        />
                    )}
                    {chartType == "Line" && (
                        <Line
                            data={data}
                            height={400}
                            width={600}
                            options={{
                                maintainAspectRatio: false,
                            }}
                            title="Average Income Chart For The Year"
                        />
                    )}
                    {chartType == "Doughnut" && (
                        <Doughnut
                            data={data}
                            height={400}
                            width={600}
                            options={{
                                maintainAspectRatio: false,
                            }}
                            title="Average Income Chart For The Year"
                        />
                    )}
                    {chartType == "Pie" && (
                        <Pie
                            data={data}
                            height={400}
                            width={600}
                            options={{
                                maintainAspectRatio: false,
                            }}
                            title="Average Income Chart For The Year"
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default Chart;
