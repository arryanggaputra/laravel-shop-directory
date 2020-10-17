import React from "react";
import { InertiaApp } from "@inertiajs/inertia-react";
import ReactDOM from "react-dom";
import "./bootstrap";

const el = document.getElementById("app");
ReactDOM.render(
    <InertiaApp
        initialPage={JSON.parse(el?.dataset?.page || "")}
        resolveComponent={(name: any) =>
            import(`./src/Pages/${name}`).then(module => module.default)
        }
    />,
    el
);
