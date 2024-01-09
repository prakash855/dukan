import "./SidebarUser.css";

import UserLogo from "../../assets/user.svg";
import DownArrow from "../../assets/down.svg";

const SidebarUser = () => {
  return (
    <div className="user">
      <div className="user-data">
        <div className="user-logo">
          <img src={UserLogo} alt="UserLogo" />
        </div>
        <div className="profile">
          <div className="user-name">Nishyan</div>
          <div className="visit-store">Visit store</div>
        </div>
      </div>
      <div className="down-menu">
        <img src={DownArrow} alt="DownArrow" />
      </div>
    </div>
  );
};

export default SidebarUser;
