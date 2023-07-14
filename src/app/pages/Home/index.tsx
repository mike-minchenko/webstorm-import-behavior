import React from "react";
import {mapConstants} from "./utils/getTime";
import {TEST_CONSTANT} from "../../common/constants";



const Home = () => {
  const mappedConstants = mapConstants(TEST_CONSTANT)
  return <div>
    {mappedConstants.map(item => (<div>{item}</div>))}
  </div>;
};

export default Home;
