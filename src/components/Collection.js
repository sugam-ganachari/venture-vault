import { iconsImgs } from "../utils/images";

const Collection = () => {
  return (
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
        <div className="grid-item">
          <div className="grid-item-l">
            <p className="text">
              <span>Stashfin</span>
            </p>
          </div>
          <div className="grid-item-r">
            <span className="text-scarlet">1470</span>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-l">
            <p className="text">
              <span>Indifi</span>
            </p>
          </div>
          <div className="grid-item-r">
            <span className="text-scarlet">3920</span>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-l">
            <p className="text">
              <span>CRED</span>
            </p>
          </div>
          <div className="grid-item-r">
            <span className="text-scarlet">260</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
