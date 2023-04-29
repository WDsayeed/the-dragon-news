import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
        return (
                <div>
                        <h2>Accept terms and condition</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias libero error, ipsum in vero dolore.</p>
                        <p>Go Back <Link to="/register">Register</Link></p>
                </div>
        );
};

export default Terms;