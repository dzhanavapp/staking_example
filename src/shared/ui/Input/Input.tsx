import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { cn } from '../../lib';
import styles from './Input.module.css';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = ({ className, ...props }: Props) => {
  return (
    <input
      className={cn(styles.input, className)}
      {...props}
    />
  );
};
