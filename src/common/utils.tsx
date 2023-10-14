import { DrawerProps, IRedirect } from "./types";

export const redirect = ({ navProps, to }: IRedirect) =>
  navProps.navigation.navigate(to);

export const openDrawer = (navProps: DrawerProps) =>
  navProps.navigation.openDrawer();
