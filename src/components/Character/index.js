import './character.css'

const Character = ({ name, image, style, backgroundColor }) => {
    return (
        <div className='character'>
            <div className='header' style={{ backgroundColor: backgroundColor }}>
                <img src={image} alt={name}/>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{style}</h5>
            </div>
        </div>
    );
}

export default Character;