import { cn } from '../../utils/cn';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'disabled';
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        'h-11 rounded-lg px-4 py-3 text-sm font-medium',
        {
          'bg-yellow-400 text-black hover:bg-yellow-500 hover:underline':
            variant === 'primary',
          'text-black border border-yellow-400 hover:text-yellow-500 hover:underline':
            variant === 'secondary',
          'bg-gray-300 text-gray-900 border border-gray-300 opacity-60':
            variant === 'disabled',
        },
        disabled && 'cursor-not-allowed',
        !disabled && 'cursor-pointer hover:underline',
        className
      )}
    >
      {children}
    </button>
  );
}
