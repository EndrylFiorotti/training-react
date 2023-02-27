import "./textField.css";

const TextField = (props) => {
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input
                onChange={event => { props.whenChanged(event.target.value) }}
                required={props.mandatory}
                placeholder={props.placeholder}
                value={props.value}
            />
        </div>
    );
}

export default TextField;