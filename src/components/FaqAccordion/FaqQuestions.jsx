/* eslint-disable react/prop-types */



export function FaqQuestion(props) {

    return (
        <div className="faq-question">
            <div className="question-title" onClick={() => props.toggle(props.id)}>
                <h3>
                    {props.qes}
                </h3>
                <img src={props.img} >
                </img>
            </div>
            <p className={props.on} >
                {props.p}
            </p>
        </div>
    )
}