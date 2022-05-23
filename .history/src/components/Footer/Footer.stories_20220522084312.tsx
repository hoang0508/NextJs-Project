import React from "react";
import { storiesOf } from "@storybook/react";
// import { withKnobs } from '@storybook/addon-knobs'
import { withKnobs } from "storybook-addon-knobs-color-options";
import Footer from "@components/Footer/Footer";

storiesOf("Footer", module)
  .addDecorator(withKnobs)
  .add("plain", () => <Footer />);
