import React from "react";
import Loading from "../loading";


export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Loading />} >
            <Component {...props} />
        </React.Suspense>
    };
}