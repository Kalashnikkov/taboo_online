import React from 'react';
import { useRouteMatch } from 'react-router-dom';


export const PlayPage = props => {
    const name = props.name;

    const route = useRouteMatch("/:id")
    console.log(name)
    return (
        <div>
            Hey
            {alert("Hello " + name + "You are here at: " + route.params.id)}
        </div>
    );
};