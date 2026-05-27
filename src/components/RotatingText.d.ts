import type {
  CSSProperties,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from "react";

type PresenceMode = "sync" | "wait" | "popLayout";
type SplitByOption = "characters" | "words" | "lines" | string;

export type RotatingTextProps = {
  texts: string[];
  rotationInterval?: number;
  initial?: Record<string, string | number>;
  animate?: Record<string, string | number>;
  exit?: Record<string, string | number>;
  animatePresenceMode?: PresenceMode;
  animatePresenceInitial?: boolean;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  transition?: Record<string, string | number>;
  loop?: boolean;
  auto?: boolean;
  splitBy?: SplitByOption;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

declare const RotatingText: ForwardRefExoticComponent<
  RotatingTextProps & RefAttributes<HTMLSpanElement>
>;

export default RotatingText;
