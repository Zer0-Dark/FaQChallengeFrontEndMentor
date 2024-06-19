import { FaqQuestion } from "./FaqAccordion/FaqQuestions";
import star from "./FaqAccordion/icon-star.svg";
import data from "./FaqAccordion/data.json"
import plus from "./FaqAccordion/icon-plus.svg"
import mins from "./FaqAccordion/icon-minus.svg"

import { useState } from "react";

export function FaqAccordion() {
    let [items, setItems] = useState(data);
    function toggle(id) {
        setItems(oldItems => oldItems.map(item => {
            return item.id == id ?
                item.on == "on" ? { ...item, on: "off" } : { ...item, on: "on" }
                : { ...item, on: "off" }

        }))
    }
    let elements = items.map((item) =>
        <FaqQuestion
            img={item.on == "on" ? mins : plus}
            id={item.id} toggle={toggle}
            on={item.on} key={item.id}
            qes={item.question}
            p={item.res}
        ></FaqQuestion>)
    return (
        <div className="faq">
            <div className="faq-top-area">

            </div>
            <div className="faq-bottom-area">

            </div>
            <div className="faq-container">
                <div className="faq-title">
                    <img src={star} alt="here"></img>
                    <h1>FAQs</h1>
                </div>
                <div className="faq-questions">
                    {elements}
                </div>
            </div>

        </div>
    )
} 