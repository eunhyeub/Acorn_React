import React from "react";
import "../mycss/DeptTemplate.css";

const DeptListTemplate = ({form, children}) => {
    return (
        <main className="dept-list-template">
            <div className="title">
                <h2>거래처 정보 입력</h2>
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="depts-wrapper">
                {children}
            </section>
        </main>
        );
};

export default DeptListTemplate;