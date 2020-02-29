import React from "react";
import Whirligig from "react-whirligig";
import Suggested from "./Suggested";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const convertCategoryName = category => {
  if(category[0] === category[0].toUpperCase()){
    return category;
  }
  let strConverted = category.replace(/([A-Z])/g, " $1");
  return (
    strConverted.charAt(0).toUpperCase() + strConverted.slice(1).toLowerCase()
  );
};

const Slider = props => {
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();
  return (
    <div style={{ display: "flex" }}>
      <FaArrowLeft
        onClick={prev}
        style={{ marginTop: 70, width: 57, height: 35, cursor: "pointer" ,color: '#A9A9A9'}}
      >
        Prev
      </FaArrowLeft>
      <Whirligig
        visibleSlides={props.countImage}
        gutter="1em"
        style={{
          width: props.widthBox,
          flexFlow: "hidden",
          overflowX: "hidden",
          overflow: "hidden"
        }}
        ref={_whirligigInstance => {
          whirligig = _whirligigInstance;
        }}
      >
        {props.category === ""
          ? props.appConventions.map(convention => {
              return (
                <Suggested
                  key={convention}
                  convention={convention}
                  user={props.user}
                />
              );
            })
          : props.appConventions
              .filter(convention => {
                return (
                  convention.category === convertCategoryName(props.category)
                );
              })
              .map(convention => {
                return (
                  <Suggested
                    key={convention}
                    convention={convention}
                    user={props.user}
                  />
                );
              })}
      </Whirligig>
      <FaArrowRight
        onClick={next}
        style={{ marginTop: 70, width: 57, height: 35, cursor: "pointer" ,color: '#A9A9A9'}}
      ></FaArrowRight>
    </div>
  );
};

export default Slider;