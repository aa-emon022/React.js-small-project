import pic from "./photo/pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);
  const [isLike, setIsLike] = useState(false);
  //comments
  const [comments, setcomments] = useState(false);
  const [commentStore, setCommentStore] = useState("");
  const [commentShow, setCommentShow] = useState("no-Comment");
  const likesHanddle = () => {
    setLikes((prevLikes) => prevLikes + 1);
    setIsLike(true);
  };
  const commentHandle = () => {
    setcomments(true);
  };

  const commentInputHandle = (e) => {
    setCommentStore(e.target.value);
  };
  const commentHanddleShow = (e) => {
    if (e.key === "Enter") {
      const trimmedComment = commentStore.trim();
      if (trimmedComment !== "") {
        setCommentShow(trimmedComment);
        setCommentStore("");
      } else {
        // Handle the case when the input has no value
        alert("Please enter a comment before pressing Enter.");
      }
    }
  };

  // Maximum number of characters/words per line

  return (
    <>
      <div className="h-screen-full flex-col flex flex-wrap  ">


  
   

        
          <div className=" py-[2rem]">
            {/* Photo section */}
            <div className=" flex justify-center items-center pb-4">
              <img className="w-[250px] h-[300px] flex justify-center items-center" src={pic} />
            </div>

            {/* Add to like */}
            <div className=" flex flex-wrap">
              {/* Add comment */}
              <div className=" ">
                <button onClick={commentHandle}>
                  {!comments ? (
                    <FontAwesomeIcon icon={faComment} className="p-3 h-7 text-gray-700" />
                  ) : (
                    <textarea
                      className="border-2"
                      rows="4"
                      cols="50"
                      value={commentStore}
                      onChange={commentInputHandle}
                      onKeyPress={commentHanddleShow}
                    />
                  )}
                </button>
              </div>

              <div>
                {/* Just use hover */}
                {/* <FontAwesomeIcon icon={faHeart} onClick={likesHanddle} className='text-black hover:text-red-600 ' /> */}
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`text-black ${isLike ? "text-red-500" : ""} text-red-600 p-3 h-7`}
                  onClick={likesHanddle}
                />
                
              </div>
              </div>
              <div className="">
                  {/* Content */}
                  <div>
                    <h1>Click to Like</h1>
                  </div>
                  <div>
                    Like: <span className="text-red-500">{likes}</span>
                  </div>
                </div>
           
          </div>
       
        <div className="">
          <div className="border-2 w-full   overflow-x-hidden overflow-y-scroll  shadow-lg ">
            <div className="w-screen h-full">
              <h1 className="r text-amber-700">Comment</h1>
              <hr className=" bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>
            <div>{commentShow}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
