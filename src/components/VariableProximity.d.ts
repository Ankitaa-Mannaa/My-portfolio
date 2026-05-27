import type { CSSProperties, ForwardRefExoticComponent, RefAttributes, RefObject } from "react";

type FalloffType = "linear" | "exponential" | "gaussian";

export type VariableProximityProps = {
  label?: string;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  containerRef?: RefObject<HTMLDivElement | null>;
  radius?: number;
  falloff?: FalloffType;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
  active?: boolean;
};

declare const VariableProximity: ForwardRefExoticComponent<
  VariableProximityProps & RefAttributes<HTMLSpanElement>
>;

export default VariableProximity;
