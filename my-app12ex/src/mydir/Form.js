import "../mycss/Form.css";

const Form = ({value, onChange, onCreate}) => {
    return (
        <div className="form">
            거래처 이름 : <input 
            type="text"
            value={value.clientName}
            name="clientName"
            onChange={onChange}/><br/>
            주소 : <input 
            value={value.address}
            name="address"
            onChange={onChange}/><br/>
            방문일 : <input 
            value={value.visitDate}
            name="visitDate"
            onChange={onChange}/><br/>
            <div className="create-button" onClick={onCreate}>등 록</div>
        </div>
    );
};

export default Form;