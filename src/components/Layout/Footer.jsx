import React from 'react'

const Footer = () => {
    return (
        <footer className="bd-footer p-3 p-md-5 mt-5 bg-light text-center text-sm-left">
            <div className="container">
                <ul className="bd-footer-links pl-0 mb-3">
                    <li className="d-inline-block">
                        <a href="/">GitHub</a>
                    </li>
                    <li className="d-inline-block ml-3">
                        <a href="/">Twitter</a>
                    </li>
                    <li className="d-inline-block ml-3">
                        <a href="/">Examples</a>
                    </li>
                    <li className="d-inline-block ml-3">
                        <a href="/">
                            About
                        </a>
                    </li>
                </ul>
                <p className="mb-0">
                    Designed and built with all the love in the world by the{" "}
                    <a href="/">
                        Bootstrap team
                    </a>{" "}
                    with the help of{" "}
                    <a href="/">our contributors</a>
                    .
                </p>
                <p className="mb-0">
                    Currently v{"{"}
                    {"{"} .Site.Params.current_version {"}"}
                    {"}"}. Code licensed{" "}
                    <a
                        href="/"
                        target="_blank"
                        rel="license noopener"
                    >
                        MIT
                    </a>
                    , docs{" "}
                    <a
                        href="/"
                        target="_blank"
                        rel="license noopener"
                    >
                        CC BY 3.0
                    </a>
                    .
                </p>
            </div>
        </footer>

    )
}

export default Footer