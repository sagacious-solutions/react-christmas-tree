import React from "react";
import SetSolidPreset from "../pages/SetSolidPreset";

export default {
  title: "ChristmasTouchScreen/Page/SetSolidPreset",
  component: SetSolidPreset,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <SetSolidPreset {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Default = Template.bind({});
