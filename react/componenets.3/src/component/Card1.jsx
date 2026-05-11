const Card1 = ({
    name = 'maaz', age = '18', experience = '2.5', city = 'karachi', profession = 'Developer', imageURL = src='https://images.unsplash.com/photo-1770026741420-4f4322c19739?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D'
}) => {
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{experience}</p>
            <p>{city}</p>
            <p>{profession}</p>
            <img src={imageURL = ""} />
        </div>
    )
}

export default Card1