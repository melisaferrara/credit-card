import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Rating = ({rating}) => {

    const rate = [];

    for (let i = 0; i <= 5; i++) {
      const icon = i < rating ?   <FontAwesomeIcon icon={solidStar}/>: <FontAwesomeIcon icon={regularStar} />

      rate.push(icon)
        

    }

    return <div>
          <p>{rate}</p>
    </div>

}

export default Rating