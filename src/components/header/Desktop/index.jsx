import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import useMediaQuery from '@hooks/useMediaQuery';
import Master from "@images/master.jpg";
import Close from "../Close";
import { ContainerNav } from "../ContainerNav";
import { MenuSocial } from "../MenuSocial";

const Desktop = () => {

  const { menuBtn } = useContext(GlobalContext);
  const matches = useMediaQuery("(max-width: 992px)");

  return(
    <header>
      <div className={menuBtn && matches ? "navigation transform" : "navigation"}>
        <div className="container">
          { matches ? <Close /> : null }
          <div className="row-cont">
            <div className="col-img">
              <div className="pulse">
                <a href="/"><img src={Master} alt="Master" /></a>
                <span>chendo</span>
                <span className="span">@chendodev</span>
              </div>
            </div>
            <div className="col-menu">
              <ContainerNav />
            </div>
            <MenuSocial />
          </div>
        </div>
      </div>
    </header>
  );
}

export {Desktop};