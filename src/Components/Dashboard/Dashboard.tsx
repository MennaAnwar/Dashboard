import { FC } from "react";
import ControlPanel from "./Control_Panel/Control_Panel";

const Dashboard: FC = () => {
  return (
    <div className="mx-4">
      <div className="row">
        <div className="col-8">col-8</div>
        <div className="col-4">
          <ControlPanel />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
