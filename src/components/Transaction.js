import { iconsImgs } from "../../src/utils/images.js";

const Transaction = () => {
  return (
    <div className="grid-two-item grid-common grid-c4">
      <div className="grid-c-title">
        <img src={iconsImgs.transaction} alt="img" />
        <h3 className="grid-c-title-text">Your Transactions</h3>
      </div>
      <div className="grid-c4-content bg-jet">
        <div className="grid-items">
          <div className="grid-item">
            <div className="grid-item-l">
              <div className="icon">
                <img src={iconsImgs.check} alt="img" />
              </div>
              <p className="text text-silver-v1">
                Indifi <span>23/12/23</span>
              </p>
            </div>
            <div className="grid-item-r">
              <span className="text-scarlet">27000 INR</span>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-l">
              <div className="icon">
                <img src={iconsImgs.check} alt="img" />
              </div>
              <p className="text text-silver-v1">
                Stashfin <span>11/12/23</span>
              </p>
            </div>
            <div className="grid-item-r">
              <span className="text-scarlet">13000 INR</span>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-l">
              <div className="icon">
                <img src={iconsImgs.check} alt="img" />
              </div>
              <p className="text text-silver-v1">
                CRED <span>09/12/23</span>
              </p>
            </div>
            <div className="grid-item-r">
              <span className="text-scarlet">2000 INR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
