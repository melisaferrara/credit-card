

const CreditCards = ({ type, number, expirationMonth, expirationYear, bank, owner, cssClass }) => {
    const lastNumbers = number.slice(-4);

    return (
        <div className={cssClass}>
            <i>{type === "MasterCard" ? <i className="fa-brands fa-cc-mastercard"></i> : <i className="fa-brands fa-cc-visa"></i>}</i>
            <h2>{`**** **** **** ${lastNumbers}`}</h2>
            <div className="information">
                <div className="userInfo">
                    <p>{`Expires ${expirationMonth}/${expirationYear}`}</p>
                    <p>{owner}</p>
                </div>

                <p>{bank}</p>
            </div>

        </div>

    )
}

export default CreditCards