import React from "react";
import "./Sidebar.css";
import Logo from "../assete/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="sidebar__tools">
        <div className="tool">
          <SearchIcon />
          <p>Explore</p>
        </div>
        <div className="tool">
          <SwapHorizIcon />
          <p>Exchange</p>
        </div>
        <div className="tool">
          <CurrencyExchangeIcon />
          <p>Staking</p>
        </div>
        <div className="tool">
          <AccountBalanceWalletIcon />
          <p>My wallet</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
