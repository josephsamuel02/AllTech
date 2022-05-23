import "./Analytics.css";

import IncomeChart from "./IncomeChart";
import UsersChart from "./UsersChart";

const Analytics = () => {
    return (
        <div className="analytics">
            <IncomeChart />
            <br />
            <UsersChart />
        </div>
    );
};

export default Analytics;
