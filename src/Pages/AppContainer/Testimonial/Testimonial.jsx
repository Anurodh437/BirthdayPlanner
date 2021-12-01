import { Link } from "react-router-dom";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <div className="new-bg">
      <div className="p-3">
        <Link
          to="/dashboard"
          className="flex w-20 px-3 justify-center py-1 bg-gray-400"
        >
          <span className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </span>
          <span>Back</span>
        </Link>
      </div>
      <div id="testimonials">
        <div className="flex flex-col justify-center items-center tracking-wide mt-5 p-3 ">
          <span className="text-4xl font-bold text-gray-50">TESTIMONIALS</span>
          <h4 className="font-bold text-lg text-gray-400">
            See what people say about our website.
          </h4>
        </div>

        <div className="testimonial-box-container">
          <ReviewCard
            name="Shivam"
            message="Great website. This is an amazing experience. The products and recomendations are good."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9WNPmwInOPcdWbqyG8tSQj_CsSN7VPveWg&usqp=CAU"
          />
          <ReviewCard
            name="Swastika"
            message="Actually this Website is very good in comparison to other similar websites it has intresting UI and interface is also good."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9j-zxpriV_15D_lZDAGaF15Hc572lvzx9Z8t1--eGlMnDJ8CVELc-qGxuxDBduNIwoZU&usqp=CAU"
          />
          <ReviewCard
            name="Abhinav"
            message="The best website to plan birthday found so far. The recommendations are amazing . Almost Everything at one place "
            image="https://static.vecteezy.com/system/resources/thumbnails/003/417/289/small/human-avatar-isolated-faceless-male-portrait-vector.jpg"
          />
          <ReviewCard
            name="Akshay"
            message="I think is a one of the best websites in this category out there, I personally think the advantage is a simple interface and generally balanced function, so I recommend guys."
            image="https://cdn1.vectorstock.com/i/thumb-large/04/90/handsome-and-intelligent-black-or-ethnic-teenage-vector-35610490.jpg"
          />
          <ReviewCard
            name="Sid"
            message="A very good experience with the party planner.Made a wonderful arrangement for my kids birthday. Highly recommended!!"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKu1Komq82sW3wxJEOwYIcZH9m06PMBMcb5JzLM-uLNMRWQ-XWZWVRnDM32q6nMATFVc&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
