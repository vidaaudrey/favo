// @flow
import cx from 'classnames';

export function helloWorld() {
  return 'Hello, world!';
}

// componentName is effective when use together with className
export function getUIConfigProps({ uiConfig: { componentName, style, rootClassName, className, ...rest } }) {
  const addedProps = { ...rest };
  if (style) {
    addedProps.style = style;
  }
  if (className) {
    addedProps.className = componentName ? cx(componentName, className) : className;
  } else if (rootClassName) {
    addedProps.rootClassName = rootClassName;
  }
  return addedProps;
}
