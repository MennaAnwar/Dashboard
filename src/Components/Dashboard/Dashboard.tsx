import { FC } from "react";
import Card from "../Card/Card";

const Dashboard: FC = () => {
  return (
    <div className="mx-4">
      <div className="row">
        <div className="col-8">col-8</div>
        <div className="col-4">
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
