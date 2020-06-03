//define routes here for react-navigation
//define routes here for react-navigation
import * as React from 'react';

export const isMountedRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  } else {
    console.log('Navigation Failed!');
  }
}
