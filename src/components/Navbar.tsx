import React from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {
    currentUser: IUser | null;
    onSignOut: () => void;
}

export const Navbar: React.FC<IProps> = ({ currentUser, onSignOut }) => {
    const handleSignOutClick = (event: React.MouseEvent) => {
        // event.preventDefault();
        if (typeof onSignOut === 'function') {
            onSignOut();
        }
    }
    return (
        <div className="ui secondary pointing menu">
            <NavLink exact to="/" className="item">
                Welcome
            </NavLink>
            <NavLink exact to="/events" className="item">
                Events
            </NavLink>
            <div className="right menu">
                {!currentUser && (
                    <>
                        <NavLink exact to="/sign_in" className="item">Sign In</NavLink>
                        <NavLink exact to="/sign_up" className="item">Sign Up</NavLink>
                    </>
                )}
                {currentUser && (
                    <>
                        <button className="item" style={{ color: 'red' }} onClick={handleSignOutClick}>Sign Out</button>
                        <NavLink to="/" style={{ color: 'blue' }} className="item">{currentUser && currentUser.first_name}</NavLink>
                    </>
                )}

            </div >
        </div >
    )
}