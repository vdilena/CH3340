import React from 'react';

const TermAndCondition = (props) => {

    const goHome = () => {
        props.history.push("/")
    }

    return (
        <div className="terms-content">
            <div>
                { props.terms }
            </div>
            <div>
                Numero: {props.params.termId}
            </div>
            <div >
                <button onClick = {() => goHome()}>Go Home</button>
            </div>
        </div>
    )
}

export default TermAndCondition