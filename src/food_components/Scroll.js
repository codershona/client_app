import React from 'react';


const Scroll = (props) => {
    // console.log(props);
    return (
  <div style={{
    overflowY: 'scroll',
    border: '5px solid #795d737a',
    height: '800px'
        }}>
            {props.children}
        </div>
    );
    // return <h1>HI</h1>
};

export default Scroll;


