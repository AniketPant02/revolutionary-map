import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";


export default function About() {
    return (
        <div>
            <Link to={process.env.PUBLIC_URL + '/'}><button>Back to home page</button></Link>
        </div>
    )
}