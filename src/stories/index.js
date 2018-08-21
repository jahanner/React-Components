/* global module:false */
import React from "react";

import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import Counter from "../Counter";
import ImageWithPopUp from "../ImageWithPopUp";
import "../App.css";
import ThumbsUp from "../ThumbsUp";
import BreadCrumbs from "../BreadCrumbs";
import Test from "../Test";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Counter", module).add("Counter Example", () => <Counter />);

storiesOf("ImagePopper", module).add("Popper", () => <ImageWithPopUp />);

storiesOf("Thumbs", module)
  .add("Default", () => <ThumbsUp />)
  .add("ThumbsDown", () => <ThumbsUp liked={false} />)
  .add("ThumbsUp", () => <ThumbsUp liked={true} />);

const steps = ["foo", "bar", "test", "yup", "nope"];
const stepChanged = step => {
  console.log(step);
};

storiesOf("Crumbs", module).add("Of Bread", () => (
  <BreadCrumbs steps={steps} stepChanged={stepChanged} />
));
