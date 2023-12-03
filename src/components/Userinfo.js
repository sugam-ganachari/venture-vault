import { iconsImgs } from "../../src/utils/images.js";

const Userinfo = () => {
  return (
    <div className="grid-two-item grid-common grid-c4">
      <div className="grid-c-title">
        <img src={iconsImgs.gears} alt="img" />
        <h3 className="grid-c-title-text">My Info</h3>
      </div>
      <div className="grid-c4-content bg-jet">
        <div className="grid-items">
          <div className="grid-item">
            <div className="grid-item-l">
              <p className="text text-silver-v1">Name</p>
            </div>
            <div className="grid-item-r">
              <span className="grid-item-r-span">Sugam</span>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-l">
              <p className="text text-silver-v1">Email</p>
            </div>
            <div className="grid-item-r">
              <span className="grid-item-r-span">sugam11@gmail.com</span>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-l">
              <p className="text text-silver-v1">Invested in</p>
            </div>
            <div className="grid-item-r">
              <span className="grid-item-r-span">3 Ventures</span>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-l">
              <p className="text text-silver-v1">Recent Transaction</p>
            </div>
            <div className="grid-item-r">
              <span className="grid-item-r-span">Stashfin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
