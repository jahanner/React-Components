/* global module:false */
import React from "react";

import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import Counter from "../Components/Counter";
import ImageWithPopUp from "../Components/ImageWithPopUp";
import "../App.css";
import ThumbsUp from "../Components/ThumbsUp";
import BreadCrumbs from "../Components/BreadCrumbs";
import PhotoSwipe from "../Components/PhotoSwipe";
import PhotoSwipe2 from "../Components/PhotoSwipe2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Counter", module).add("Counter", () => <Counter />);

storiesOf("ImagePopper", module).add("Popper", () => <ImageWithPopUp />);

storiesOf("Thumbs", module)
  .add("Default", () => <ThumbsUp />)
  .add("Down", () => <ThumbsUp liked={false} />)
  .add("Up", () => <ThumbsUp liked={true} />);

const steps = ["foo", "bar", "test", "yup", "nope"];
const stepChanged = step => {
  console.log(step);
};

storiesOf("Crumbs", module).add("Of Bread", () => (
  <BreadCrumbs steps={steps} stepChanged={stepChanged} />
));

storiesOf("Photo", module).add("Swipe", () => (<PhotoSwipe/>));

storiesOf("Test Photo", module).add("Swipe", () => <PhotoSwipe2/>);
