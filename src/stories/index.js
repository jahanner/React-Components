import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import Counter from "../Counter";
import ImageWithPopUp from "../ImageWithPopUp";
import Thumbs from "../Thumbs";
import "../App.css";
import ThumbsUp from "../ThumbsUp";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Counter", module).add("Counter Example", () => <Counter />);

storiesOf("ImagePopper", module).add("Popper", () => <ImageWithPopUp />);

storiesOf("Thumbs", module)
  .add("Default", () => <ThumbsUp />)
  .add("ThumbsDown", () => <ThumbsUp liked={false} />)
  .add("ThumbsUp", () => <ThumbsUp liked={true} />);
