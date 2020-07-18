import React from 'react';
import { useRouteMatch } from 'react-router-dom';


export const PlayPage = () => {
    const route = useRouteMatch("/:id")
    return (
        <div>
            Hey
            {alert("You are here at: " + route.params.id)}
        </div>
    );
};