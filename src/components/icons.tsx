import {
  AirplaneTilt, Bank, Binoculars, Brain, Briefcase, Broadcast, Camera, ChartLineUp, ChatsCircle, Cpu, Database,
  Drone, Flask, GameController, GraduationCap, Handshake, Lightbulb, Medal, Microphone, Newspaper, Planet,
  Presentation, Robot, Rocket, RocketLaunch, Sparkle, Star, Storefront, Target, Trophy, UsersThree, VideoCamera,
  type IconProps,
} from "@phosphor-icons/react";

export const ICONS = {
  AirplaneTilt, Bank, Binoculars, Brain, Briefcase, Broadcast, Camera, ChartLineUp, ChatsCircle, Cpu, Database,
  Drone, Flask, GameController, GraduationCap, Handshake, Lightbulb, Medal, Microphone, Newspaper, Planet,
  Presentation, Robot, Rocket, RocketLaunch, Sparkle, Star, Storefront, Target, Trophy, UsersThree, VideoCamera,
} satisfies Record<string, React.ComponentType<IconProps>>;

export type IconName = keyof typeof ICONS;

export function Icon({ name, ...props }: { name: IconName } & IconProps) {
  const C = ICONS[name];
  return <C {...props} />;
}
