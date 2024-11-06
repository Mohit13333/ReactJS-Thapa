
import React from 'react';

const ParentComponent = () => {
    return (
        <section>
            <p>Hello from Parent Component</p>
            <ChildComponent data="React Js" />
        </section>
    );
};

const ChildComponent = (props) => {
    return (
        <div>
            <h1>Hello, I am Component B</h1>
            <GrandChildComponent data={props.data} />
        </div>
    );
};

const GrandChildComponent = (props) => {
    return (
        <div>
            <h1>Hello, I am Component C</h1>
            <GrandGrandChildComponent data={props.data} />
        </div>
    );
};

const GrandGrandChildComponent = (props) => {
    return (
        <div>
            <h1>Hello, I am Component D</h1>
            <p>I love: {props.data}</p> 
        </div>
    );
};

export default ParentComponent;