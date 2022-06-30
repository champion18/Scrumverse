import "./Card.css";
import { Rating } from "react-simple-star-rating";

const Card = () => {
  return (
    <div className="card">
      <img
        alt="an office"
        src="https://s3-alpha-sig.figma.com/img/d4cb/945c/8ab1cd9528c4ba07bc7a827e4807de80?Expires=1657497600&Signature=evMtrVoN9-uJzd6i2-gY~4gLiOttL9WLqxGgAzuOzc2PWqcK4JmhfZU8qF7TNRBsIuiaphqxj-W6feqzOOYfTJZdCSHx2HTGUBTEzJv7SHF-RhWRAP-5LdDnKHm1Ha9WG0T1z~qHAM-z1X3JSphpqIsrPM-Nmx-yA9jWIx5sd8IYyjjb8hdnYcgDaYmh5HLrlgT2c6S5j1rJAkAuaR6FDBQ412-IlxLCPFNDuGfI3CMV7hg4TBcADe2jBJ4h9q36OgB4PeNiry3dfywDZ8QgLk1eAGzLIYo3INzvj5urDsSV54sRwOuTF4R3EamswHjlSq2ZhgDYLDX48E35mQELtg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      ></img>
      <div className="courseDetails">
        <div className="title">
          <a href="/">Learn SCRUM: The Complete Beginner Course</a>
          <span>
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.99999 4.41001C7.38699 2.98501 10.854 5.48001 5.99999 8.68701C1.14599 5.48001 4.61299 2.98601 5.99999 4.41201V4.41001Z"
                fill="#0D0D0D"
              />
              <path
                d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L10 0C10.5304 0 11.0391 0.210714 11.4142 0.585786C11.7893 0.960859 12 1.46957 12 2V15.5C12 15.5904 11.9754 15.6792 11.9289 15.7568C11.8824 15.8343 11.8157 15.8979 11.736 15.9405C11.6563 15.9832 11.5664 16.0035 11.4761 15.9992C11.3858 15.9948 11.2983 15.9661 11.223 15.916L6 13.101L0.777 15.916C0.701705 15.9661 0.61423 15.9948 0.523891 15.9992C0.433553 16.0035 0.343733 15.9832 0.263999 15.9405C0.184266 15.8979 0.117604 15.8343 0.0711141 15.7568C0.024624 15.6792 4.67204e-05 15.5904 0 15.5V2ZM2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V14.566L5.723 12.084C5.80506 12.0294 5.90143 12.0003 6 12.0003C6.09857 12.0003 6.19494 12.0294 6.277 12.084L11 14.566V2C11 1.73478 10.8946 1.48043 10.7071 1.29289C10.5196 1.10536 10.2652 1 10 1H2Z"
                fill="#0D0D0D"
              />
            </svg>
          </span>
        </div>
        <p className="instructorName">Samay Jain, Ex-KPMG</p>
        <div className="ratings">
          <span className="rating">4.5</span>
          <Rating
            size={20}
            initialValue={4.5}
            allowHover={false}
            fillColor="rgba(95, 114, 190, 1)"
          />
        </div>
        <button href="#" className="enrollNow">
          ENROLL NOW
        </button>
      </div>
    </div>
  );
};

export default Card;
