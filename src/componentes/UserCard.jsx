import Ratings from "./Rating"

const UserCard = ({ name, rating, gender, job, city }) => {

    return <div className="UserCard">
        <div>
            <h2>{name}</h2>
            <Ratings rating={rating} />
            <p>{gender}</p>
            <p>{job}</p>
            <p>{city}</p>
        </div>

    </div>
}

export default UserCard