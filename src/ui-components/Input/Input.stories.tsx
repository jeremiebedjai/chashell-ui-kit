import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta = {
  title: "Chashell UI/Input/File",
  component: Input.File,

  tags: ["autodocs"],
} satisfies Meta<typeof Input.File>;
export default meta;
type Story = StoryObj<typeof Input.File>;

export const SuccessfulUpload: Story = {
  render: () => {
    const [value, setValue] = useState<string>();
    const [status, setStatus] = useState<keyof typeof buttonProps>("empty");
    useEffect(() => {
      if (value) {
        setStatus("loading");
        setTimeout(() => setStatus("success"), 300);
      } else {
        setStatus("empty");
      }
    }, [value]);

    const buttonProps = {
      empty: {},
      success: {
        iconProps: "checkmark",
        color: "success",
      },
      loading: {
        loading: true,
      },
    };

    return (
      <Input.File
        name="success"
        buttonProps={buttonProps[status]}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    );
  },
};

export const FailedUpload: Story = {
  render: () => {
    const [value, setValue] = useState<string>();
    const [status, setStatus] = useState<keyof typeof buttonProps>("empty");
    useEffect(() => {
      if (value) {
        setStatus("loading");
        setTimeout(() => setStatus("failed"), 300);
      } else {
        setStatus("empty");
      }
    }, [value]);

    const buttonProps = {
      empty: {},
      failed: {
        iconProps: "alert-circle-outline",
        color: "danger",
      },
      loading: {
        loading: true,
      },
    };

    return (
      <Input.File
        name="fail"
        buttonProps={buttonProps[status]}
        error={status === "failed" ? "Unable to import" : undefined}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    );
  },
};
