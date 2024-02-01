import { FC } from "react";
import "./Card.css";

const Card: FC = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0 text-capitalize">Title</h5>
      </div>
      <div className="card-body">content</div>
    </div>
  );
};
export default Card;
