import { FloorLists } from "components/FloorLists";
import Navbar from "components/Navbar";
import React from "react";

interface ILayout {
    children: React.ReactNode;
}
function Layout(props: ILayout) {
    return (
        <>
            <Navbar />
            <div className="container mx-auto max-w-screen-lg pt-5">
                <div className="flex flex-row">
                    <div className="w-3/12">
                        <FloorLists />
                    </div>
                    <div className="w-9/12 pl-5">{props.children}</div>
                </div>
            </div>
        </>
    );
}

export default Layout;
