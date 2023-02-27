import "./form.css"
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {

    const [name, setName] = useState('');
    const [style, setStyle] = useState('');
    const [image, setImage] = useState('');
    const [rank, setRank] = useState('');

    const whenSaving = (event) => {
        event.preventDefault()
        props.whenCharacterCreate({
            name, style, image, rank
        })
        setName('')
        setStyle('')
        setImage('')
        setRank('')
        console.log(name, style, image, rank)
    }

    return (
        <section className="form">
            <form onSubmit={whenSaving}>
                <h2>Fill in the data to create the character card</h2>
                <TextField
                    mandatory={true}
                    label="Name"
                    placeholder="Write the character's Name"
                    value={name}
                    whenChanged={value => setName(value)}
                />
                <TextField
                    mandatory={true}
                    label="Style"
                    placeholder="Write the character's fighting Style"
                    value={style}
                    whenChanged={value => setStyle(value)}
                />
                <TextField
                    mandatory={true}
                    label="Image"
                    placeholder="Write image path"
                    value={image}
                    whenChanged={value => setImage(value)}
                />
                <Dropdown
                    mandatory={true}
                    label="Ranks"
                    itens={props.ranks}
                    value={rank}
                    whenChanged={value => setRank(value)}
                />
                <Button>Create card</Button>
            </form>
        </section>
    );
}

export default Form;