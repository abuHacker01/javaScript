import React from "react";
class Student extends React.Component {
    render() {
        let { location, children } = this.props;
        return <div>
            <h1>welcome to: {location || "no location"}</h1>
            {children}
        </div>;
    }
}
export default Student;