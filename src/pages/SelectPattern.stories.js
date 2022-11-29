import React from 'react';
import SelectPattern from './SelectPattern';

export default {
    title: 'ChristmasTouchScreen/Page/SelectPattern',
    component: SelectPattern,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <SelectPattern {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const ButtonPage = Template.bind({});
