import { iconsImgs } from "../../src/utils/images.js";
import { useState, useEffect } from "react";
const Transaction = (props) => {
  const [data, setData] = useState();
  const [purch, setPurchData] = useState();
  // console.log("prop data")
  // console.log(props)
  // useEffect(() => {
  //   setData(props.data)
  //   setPurchData(props.purchdata)
  //   console.log("below is data");
  //   console.log(data);
  //   console.log("below is purchdata");
  //   console.log(purch);
  // }, []);
  useEffect(() => {
    setData(props.data.purchArr);
    setPurchData(props.purchdata);
  }, [props.data, props.purchdata]);
  console.log(data, purch);
  // console.log(data,purch)
  const calculateInvestment = (shares, quantity) => {
    const parsedShares = parseFloat(shares);
    const parsedQuantity = parseFloat(quantity);
    return parsedShares * parsedQuantity;
  };
  return (
    <>
      <div className="grid-two-item grid-common grid-c4">
        <div className="grid-c-title">
          <img src={iconsImgs.transaction} alt="img" />
          <h3 className="grid-c-title-text">Your Transactions</h3>
        </div>
        <div className="grid-c4-content bg-jet">
          <div className="grid-items">
            {purch &&
              data &&
              data.map((innerArray, key) => (
                <div key={key}>
                  <div className="grid-item">
                    <div className="grid-item-l">
                      <div className="icon">
                        <img src={iconsImgs.check} alt="img" />
                      </div>
                      <p className="text text-silver-v1">
                        {purch[key]?.[0]?.data1[0]?.name}
                        <span>{innerArray.date.slice(0, 10)}</span>
                      </p>
                    </div>
                    <div className="grid-item-r">
                      <span className="text-scarlet">
                        {calculateInvestment(
                          purch[key]?.[0]?.data1[0]?.shareprice,
                          innerArray.quantity
                        )}{" "}
                        INR
                      </span>
                    </div>
                  </div>
                </div>
              ))}

            {/* <div className="grid-item">
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

          </div> */}
            {/* <div className="grid-item">
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
          </div> */}
            {/* <div className="grid-item">
            <div className="grid-item-l">
              <div className="icon">
                <img src={iconsImgs.check} alt="img" />
              </div>
              <p className="text text-silver-v1">
                Indifi <span>23/12/23</span>
              </p>
            </div>
            <div className="grid-item-r">
              <span className="text-scarlet">2000 INR</span>
            </div>
          </div> */}
          </div>
        </div>
      </div>

      <div className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
          <img src={iconsImgs.wealth} alt="img" />
          <h3 className="grid-c-title-text">Your Collections</h3>
        </div>

        <div className="grid-items">
          <div className="grid-item">
            <div className="grid-item-l">
              <p className="text">
                <span className="text-heading">Company</span>
              </p>
            </div>
            <div className="grid-item-r">
              <span className="text-heading">Shares</span>
            </div>
          </div>

          {purch &&
            data &&
            data.map((innerArray, key) => (
              <div key={key}>
                <div className="grid-item">
                  <div className="grid-item-l">
                    <p className="text">{purch[key]?.[0]?.data1[0]?.name}</p>
                  </div>
                  <div className="grid-item-r">
                    <span className="text-scarlet">{innerArray.price}</span>
                  </div>
                </div>
              </div>
            ))}
          {!purch && <h2>No Investment</h2>}
          {/* <div className="grid-item">
          <div className="grid-item-l">
            <p className="text">
              <span>Stashfin</span>
            </p>
          </div>
          <div className="grid-item-r">
            <span className="text-scarlet">1470</span>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Transaction;
