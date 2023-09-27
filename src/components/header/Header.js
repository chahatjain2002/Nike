import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink, useActionData } from "react-router-dom";
import { useStateValue } from "../../redux/StateProvider";

function Header() {
  const [txt, setTxt] = useState("");
  const [, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "SEARCHED_TXT",
      value: txt,
    });
  }, [txt]);
  return (
    <div className="HeaderMain">
      <div className="HedaerLogo">
        <NavLink to={"/"} className="NavlinkCss">
          Images
        </NavLink>
      </div>

      <div className="HeaderMenu">
        <ul>
          <li>
            <NavLink to={"/man/1001"} className="NavlinkCss">
              Men
            </NavLink>
          </li>
          <li>
            <NavLink to={"/kid/1002"} className="NavlinkCss">
              Kids
            </NavLink>
          </li>
          <li>
            <NavLink to={"/accessories/1003"} className="NavlinkCss">
              Home&Accessories
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="HeaderSearch">
        <input
          type="search"
          placeholder="Search"
          value={txt}
          onChange={(e) => {
            setTxt(e.target.value);
          }}
        />
        <div className="HeaderSearchIcon">
          <NavLink to={"/cart"}>
            <img src="/cart.png" alt="Cart" className="cartImg" />
          </NavLink>

          <NavLink to={"/wishlist"}>
            <img src="/wishlist.png" alt="Wishlist" className="cartImg" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
