import React from "react";
import App from "next/app";
import "../public/static/css/appp.scss";
import { Helmet } from "react-helmet";

class MyApp extends App {
    render() {

        const { Component, pageProps } = this.props;

        return (
            <div className="main">
                <Component {...pageProps}/>
                <Helmet>
                    <meta/>
                    <title>Pokedex</title>
                    <meta name="description" content="Pokedex created with Next JS and SSR"/>
                </Helmet>
            </div>
        )
    }
}

export default MyApp;