import React, { useState, useEffect} from 'react';

function Section(props) {

    return (
        <div className="section" id={props.id} onClick={() => props.click(props.id)}>
            <div className="section-title">
                <h2>Section 1</h2>
            </div>
            <div className="section-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum temporibus dicta reprehenderit tempore quisquam consequuntur porro omnis laboriosam praesentium at et sapiente, provident sit! Suscipit recusandae, ab ratione dignissimos.</p>
            </div>
        </div>
    )

}

export default Section;