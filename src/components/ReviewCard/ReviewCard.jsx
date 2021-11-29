import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewCard = (props) => {
  return (
    <div className="testimonial-box">
      <div className="box-top">
        <div className="profile">
          <div className="profile-img">
            <img src={props.image} alt={props.name} />
          </div>
          <div className="name-user">
            <strong>{props.name}</strong>
            <span>@{props.name}</span>
          </div>
        </div>
        <div className="flex text-xl">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      </div>
      <div className="client-comment">
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
