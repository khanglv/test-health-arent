import React from "react";
import cx from "classnames";
import { BaseButton, BaseButtonProps } from "@/app/components/BaseButton";
import { IconSpinner } from "@/app/components/icons/IconSpinner";
import { forwardRefWithAs } from "@/app/utils/forwardRefWithAs";
import { WithChildren } from "@/app/types/common";
import styles from "./Button.style";

type ButtonAppearance = "default" | "primary" | "secondary" | "link";

export interface ButtonProps extends WithChildren<BaseButtonProps> {
  appearance?: ButtonAppearance;
  fullWidth?: boolean;
  iconPosition?: "left" | "right";
  loading?: boolean;
  disabled?: boolean;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const Button = forwardRefWithAs<"button", ButtonProps>(
  (
    {
      size = "md",
      appearance = "default",
      Icon,
      iconPosition = "left",
      children: originChildren,
      loading = false,
      className,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    let children = originChildren;

    const baseClassName = styles({
      fullWidth,
      loading,
      disabled: props.disabled,
      appearance,
      size,
    });

    if (loading) {
      children = (
        <span className="flex items-center justify-center space-x-2">
          <IconSpinner />
          {children}
        </span>
      );
    } else if (Icon) {
      children = (
        <>
          {iconPosition === "left" && <Icon className="mr-1.5" />}
          <span>{children}</span>
          {iconPosition === "right" && <Icon className="ml-1.5" />}
        </>
      );
    }

    return (
      <BaseButton ref={ref} {...props} className={cx(className, baseClassName)}>
        {children}
      </BaseButton>
    );
  }
);
