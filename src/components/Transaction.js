import { iconsImgs } from "../../src/utils/images.js";

const Transaction = (data1) => {
  // console.log(data1.data1.purchArr);
  // const data = data1.data1.purchArr;
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
                Indifi <span>23/12/23</span>
              </p>
            </div>
            <div className="grid-item-r">
              <span className="text-scarlet">27000 INR</span>
            </div>
          </div>
        </div>
        {/* {data.map((item, index) => (
          <div className="grid-items" key={index}>
            <div className="grid-item">
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.check} alt="img" />
                </div>
                <p className="text text-silver-v1">
                  {item.venture_id} <span>{item.date}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-scarlet">
                  {item.price * item.quantity} INR
                </span>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Transaction;
