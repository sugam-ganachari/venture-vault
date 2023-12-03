import "../Custom.css";
import { SwishSpinner } from "react-spinners-kit";

function Spinners() {
  return (
    <>
      <div className="spinnerContainer">
        <div className="spinner">
          <SwishSpinner size={35} frontColor="turquoise" backColor="white" />
        </div>
      </div>
    </>
  );
}

export default Spinners;
