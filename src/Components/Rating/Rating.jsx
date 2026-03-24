import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faStarHalfStroke,
  faStar as starSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({ ratingsAverage }) {
  return (
    <>
      <div className="text-yellow-500">
        {[1, 2, 3, 4, 5].map((position,index) => {
            //! 4.2
        // ***  5
          if (ratingsAverage >= position) {
            return <FontAwesomeIcon icon={starSolid} key={index} />;
          }
          else if (ratingsAverage >= position -0.5) {
            return <FontAwesomeIcon icon={faStarHalfStroke} key={index} />;
          } else {
            return <FontAwesomeIcon icon={starRegular} key={index} />;
          }
        })}
      </div>
    </>
  );
}
