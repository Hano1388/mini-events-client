import React from "react";

export const Spinner: React.FC<{ message: string; }> = ({ message }) => {
    return (
        <div className="ui segment" style={{ minHeight: "10em" }}>
            <div className="ui active inverted dimmer">
                <div className="ui text loader">{message}</div>
            </div>
            <p></p>
        </div>
    );
};