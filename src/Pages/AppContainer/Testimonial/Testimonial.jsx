import ReviewCard from "../../../components/ReviewCard/ReviewCard";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <div className="new-bg bg-gradient-to-tr from-yellow-500 to-red-500">
      <div id="testimonials">
        <div className="flex flex-col justify-center items-center tracking-wide mt-5 p-5">
          <span className="text-3xl font-medium">TESTIMONIALS</span>
          <h4 className="font-medium text-base text-gray-800">
            See what people say about our website.
          </h4>
        </div>

        <div className="testimonial-box-container">
          <ReviewCard name="Name" message="lorem ipseum" image="linkToImage" />
          <ReviewCard name="Name" message="lorem" image="linkToImage" />
          <ReviewCard name="Name" message="lorem ipseum" image="linkToImage" />
          <ReviewCard name="Name" message="lorem ipseum" image="linkToImage" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
