import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta = {
  title: "Chashell UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      control: { type: null },
    },
    iconProps: {
      control: "select",
      options: [undefined, "info", "alert-triangle", "close-circle"],
    },
    variant: {
      control: "select",
      options: Object.keys(Button.Variants),
    },
    color: {
      control: "select",
      options: Object.keys(Button.Colors),
    },
    size: {
      control: "select",
      options: Object.keys(Button.Sizes),
    },
  },
  args: {
    children: "Button",
    color: "gray",
    iconProps: "info",
    loading: false
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof Button>;

export const Try_It: Story = {};
export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2">
      <div className="flex flex-col gap-1">
        <p className="mb-2">
          Buttons comes in different <b>Sizes</b>{" "}
        </p>
        <span className="inline-flex">
          <Button size="sm" color="info" iconProps="info">
            Small Button
          </Button>
        </span>
        <span className="inline-flex">
          <Button color="info" iconProps="info">
            Regular Button
          </Button>
        </span>
        <span className="inline-flex">
          <Button size="lg" color="info" iconProps="info">
            Large Button
          </Button>
        </span>
        <span className="inline-flex">
          <Button size="xl" color="info" iconProps="info">
            Jabba the Hutt
          </Button>
        </span>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-2">
      <div className="flex flex-col gap-1">
        <p className="mb-2">
          <b>Basics</b> Buttons style{" "}
        </p>
        <Button color="success" iconProps="done-all">
          Success
        </Button>
        <Button color="danger" iconProps="close-circle">
          Error
        </Button>
        <Button color="warning" iconProps="alert-triangle">
          Warning
        </Button>
        <Button color="info" iconProps="info">
          Info
        </Button>
        <Button color="gray" iconProps="trash">
          Neutral
        </Button>
      </div>
    </div>
  ),
};

export const Light: Story = {
  render: () => (
    <div className="flex gap-2">
      <div className="flex flex-col gap-1">
        <p className="mb-2">
          <b>Light</b> Buttons style{" "}
        </p>
        <Button variant="light" color="success" iconProps="done-all">
          Success
        </Button>
        <Button variant="light" color="danger" iconProps="close-circle">
          Error
        </Button>
        <Button variant="light" color="warning" iconProps="alert-triangle">
          Warning
        </Button>
        <Button variant="light" color="info" iconProps="info">
          Info
        </Button>
        <Button variant="light" color="gray" iconProps="trash">
          Neutral
        </Button>
      </div>
    </div>
  ),
};
export const Highlighted: Story = {
  render: () => (
    <div className="flex gap-2">
      <div className="flex flex-col gap-1">
        <p className="mb-2">
          <b>Highlighted</b> Buttons for important things !{" "}
        </p>
        <Button color="success" variant="high" iconProps="done-all">
          Success
        </Button>
        <Button color="danger" variant="high" iconProps="close-circle">
          Error
        </Button>
        <Button color="warning" variant="high" iconProps="alert-triangle">
          Warning
        </Button>
        <Button variant="high" color="info" iconProps="info">
          Info
        </Button>
        <Button color="gray" variant="high" iconProps="trash">
          Neutral
        </Button>
      </div>
    </div>
  ),
};

export const Tabs_Button = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-1">
        <p className="mb-2">
          Activable button for a <b>NavBar</b>
        </p>
        <div className="flex">
          <Button
            color="info"
            active={active === "home"}
            onClick={() => setActive("home")}
            variant="tab"
            iconProps="done-all"
          >
            Home
          </Button>
          <Button
            color="info"
            active={active === "gallery"}
            onClick={() => setActive("gallery")}
            variant="tab"
            iconProps="done-all"
          >
            Gallery
          </Button>
          <Button
            color="info"
            active={active === "settings"}
            onClick={() => setActive("settings")}
            variant="tab"
            iconProps="done-all"
          >
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Side_Button = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-1 pr-[200px]">
        <p className="mb-2">
          Activable button for a <b>Sidebar</b> navigation.
        </p>
        <Button
          color="warning"
          active={active === "home"}
          onClick={() => setActive("home")}
          variant="nav"
          iconProps="done-all"
        >
          Home
        </Button>
        <Button
          color="warning"
          active={active === "gallery"}
          onClick={() => setActive("gallery")}
          variant="nav"
          iconProps="done-all"
        >
          Gallery
        </Button>
        <Button
          color="warning"
          active={active === "settings"}
          onClick={() => setActive("settings")}
          variant="nav"
          iconProps="done-all"
        >
          Settings
        </Button>
      </div>
    </div>
  );
};

export const Custom_Colors: Story = {
  render: () => (
    <div className="flex gap-2">
      <div className="flex flex-col gap-1">
        <p className="mb-2">Apply custom colors </p>
        <Button
          color="success"
          iconProps="done-all"
          className="fill-primary bg-sky-200 !text-sky-800"
        >
          Success
        </Button>
      </div>
    </div>
  ),
};
