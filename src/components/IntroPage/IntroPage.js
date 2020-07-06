import React from "react";
import { Link } from "react-router-dom";
import {Carousel} from "react-bootstrap";

function IntroPage() {
    const items = [
        { id: 1, title: 'item #1' },
        { id: 2, title: 'item #2' },
        { id: 3, title: 'item #3' },
        { id: 4, title: 'item #4' },
        { id: 5, title: 'item #5' }
    ]

    return (
        <div>
            <p>
                Welcome to GrokIt, please click <Link to="/signin">here</Link> to Sign in
    </p>
            <Carousel>
                {items.map(item => <div key={item.id}>{item.title}</div>)}
            </Carousel>
        </div>
    );
}

export default IntroPage;
