import Character from '../Character';
import './rank.css'

const Rank = (props) => {
    return (
        (props.characters.length > 0) ? <section className='rank' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='characters'>
                {props.characters.map(character => <Character 
                backgroundColor={props.primaryColor}
                key={character.name}
                name={character.name} 
                style={character.style} 
                image={character.image} 
                />)}
            </div>
        </section>
        : ''
    );
}

export default Rank;