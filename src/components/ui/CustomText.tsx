import React from 'react';

interface CustomTextProps {
  tag?: TextTag;
  text: string;
  styles?: string;
  variant?: Variant;
}

type Variant = 'default' | 'error' | 'success' | 'warning';
type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';

const stylesByTag: Record<TextTag, string> = {
  h1: 'text-4xl font-bold text-center',
  h2: 'text-3xl font-bold text-center',
  h3: 'text-2xl font-bold text-center',
  h4: '',
  h5: '',
  p: '',
  span: '',
};

const variants: Record<Variant, string> = {
  default: '',
  error: 'text-destructive',
  success: 'text-green-500',
  warning: 'text-yellow-500',
};

export default function CustomText({
  tag = 'p',
  text,
  styles = '',
  variant = 'default',
}: CustomTextProps) {
  const tagStyle = stylesByTag[tag] || '';
  const variantStyle = variants[variant] || '';

  return React.createElement(tag, { className: `${tagStyle} ${styles} ${variantStyle}` }, text);
}

CustomText.defaultProps = {
  tag: 'p',
  styles: '',
  text: '',
};
