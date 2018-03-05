// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, color, css } from '@coursera/coursera-ui';

type Props = {
  style?: Object,
  htmlAttributes?: Object,
  imgSrc: string,
  imgAlt?: string,
  backgroundColor?: string,
  color?: string,
  children?: React.Node,
  size?: number,
};

const styles = StyleSheet.create({
  Avatar: {
    color: color.textIcon,
    backgroundColor: color.primary,
    userSelect: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  icon: {
    color: color.primary,
  },
  text: {
    lineHeight: '100%',
    margin: 0,
    padding: 0,
  },
});

// Dynamic styles
function getStyles({ size, backgroundColor, propColor }) {
  return {
    Avatar: {
      backgroundColor,
      propColor,
      fontSize: size / 2,
      height: size,
      width: size,
    },
    icon: {
      width: size * 0.6,
      height: size * 0.6,
      fontSize: size * 0.6,
      margin: size * 0.2,
    },
  };
}

/**
 * A generic Avatar that accepts children, imgSrc and icon.
 * Sample Usage:
 * <Avatar imgSrc="https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg" size={80} />
 * <Avatar backgroundColor="#000" color="#123" size={80} ><h4>HL</h4> </Avatar>
 */
const Avatar = ({
  style = {},
  htmlAttributes = {},
  imgSrc,
  imgAlt = 'Avatar',
  iconName,
  backgroundColor,
  color: propColor,
  children,
  size = 44,
  ...props
}: Props): React.Node => {
  const dynamicStyles = getStyles({ size, backgroundColor, propColor });
  const mergedStyles = { ...dynamicStyles.Avatar, ...style };
  if (imgSrc) {
    return <img {...htmlAttributes} {...css(styles.Avatar)} style={mergedStyles} src={imgSrc} alt={imgAlt} />;
  }
  return (
    <div {...htmlAttributes} {...css(styles.Avatar)} style={mergedStyles}>
      {children}
    </div>
  );
};

Avatar.propTypes = {
  // Override the inline-styles of the root element
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types

  // Attributes overwrite.
  htmlAttributes: PropTypes.object, // eslint-disable-line react/forbid-prop-types

  // The backgroundColor of the avatar. Does not apply to image avatars.
  backgroundColor: PropTypes.string,

  // Can use to letters inside the avatar.
  children: PropTypes.node,

  // The icon or letter's color.
  color: PropTypes.string,

  // The size of the avatar in pixels
  size: PropTypes.number,

  // If passed in, the component will render an img element. Otherwise, a div will be rendered.
  imgSrc: PropTypes.string,

  imgAlt: PropTypes.string,

  iconName: PropTypes.string,

  // If passed in, the component will render an img element. Otherwise, a div will be rendered.
  // bordered: PropTypes.bool,
  // shadow: PropTypes.bool
};

// Explicity declare the default props for documentation purpose,
// as we only hoist a limit set of statics
Avatar.defaultProps = {
  style: {},
  htmlAttributes: {},
  imgAlt: 'Avatar',
  size: 44,
};

export default Avatar;
