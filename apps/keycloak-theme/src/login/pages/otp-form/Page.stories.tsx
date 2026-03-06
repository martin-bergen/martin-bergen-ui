import {
  createKcPageStory,
  type Meta,
  type StoryObj,
} from "../../mocks/KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "otp-form.ftl" });

const meta = {
  title: "login/otp-form.ftl",
  component: KcPageStory,
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    kcContext: {
      message: {
        type: "error",
        summary: "Invalid code. Please try again.",
      },
    },
  },
};
