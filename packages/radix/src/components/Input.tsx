import styled from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';
import css from '@styled-system/css';
import { get } from '../utils/get';

type VariantProps = 'ghost' | 'fade';
type SizeProps = 'medium';

// TODO: Fix `size` typing
export type InputProps = ColorProps &
  SpaceProps &
  WidthProps &
  MaxWidthProps &
  TextAlignProps & { variant?: VariantProps; size?: SizeProps & any };

const placeholderStyle = {
  color: 'grays.4',
  opacity: 1,
};

// TODO: Fix color typings
// @ts-ignore
export const Input = styled('input')<InputProps>(
  ({ variant, size }: InputProps) =>
    css({
      appearance: 'none',
      backgroundColor: 'transparent',
      borderRadius: 0,
      color: get({ fade: 'grays.5' }, variant, 'grays.8'),
      fontFamily: 'normal',
      fontSize: size === 'medium' ? 3 : 2,
      height: size === 'medium' ? 6 : 5,
      lineHeight: size === 'medium' ? 3 : 1,
      outline: 'none',
      padding: 0,
      verticalAlign: 'middle',
      width: '100%',
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      border: 0,
      borderBottom: '1px solid',
      borderColor: variant === 'ghost' ? 'transparent' : 'grays.3',
      '&:focus': {
        borderColor: variant === 'ghost' ? 'transparent' : 'blues.4',
      },
      '&:read-only': {
        borderColor: 'grays.2',
        color: 'grays.5',
      },
      '&:disabled': {
        borderColor: 'grays.2',
        color: 'grays.4',
        cursor: 'not-allowed',
      },
      '&::-webkit-input-placeholder': placeholderStyle,
      '&::-moz-placeholder': placeholderStyle,
      '&:-ms-input-placeholder': placeholderStyle,
    }),
  color,
  space,
  textAlign,
  width,
  maxWidth
);

Input.defaultProps = { type: 'text' };
