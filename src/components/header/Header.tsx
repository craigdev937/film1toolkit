import React from "react";
import "./Header.css";
import Clap from "@public/Clapperboard.png";
import { Link, Outlet } from "react-router-dom";

export const Header = (): JSX.Element => {
    return (
        <React.Fragment>
            <section className="header">
                <Link to="/">
                    <aside 
                        className="header__logo"
                        >Film App
                    </aside>
                </Link>
                <aside className="header__aside">
                    <img 
                        className="header__image" 
                        src={Clap} 
                        alt="ClapperBoard" 
                    />
                </aside>
            </section>
            <Outlet />
        </React.Fragment>
    );
};


