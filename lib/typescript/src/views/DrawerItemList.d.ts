import { DrawerNavigationState, NavigationRoute, ParamListBase } from '@react-navigation/native';
import * as React from 'react';
import type { DrawerDescriptorMap, DrawerNavigationHelpers } from '../types';
declare type Props = {
    state: DrawerNavigationState<ParamListBase>;
    navigation: DrawerNavigationHelpers;
    descriptors: DrawerDescriptorMap;
    displayOnly?: (route: NavigationRoute<ParamListBase, string>) => boolean;
};
/**
 * Component that renders the navigation list in the drawer.
 */
export default function DrawerItemList({ state, navigation, descriptors, displayOnly, }: Props): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export {};
