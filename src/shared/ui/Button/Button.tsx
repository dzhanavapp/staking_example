import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './Button.module.css';
import { cn } from '../../lib';
type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({ className, ...props }: Props) => {
  return (
    <button
      className={cn(styles.button, className)}
      {...props}
    />
  );
};
