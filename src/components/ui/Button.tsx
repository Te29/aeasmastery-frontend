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
  const baseClass = 'h-11 rounded-lg px-4 py-3 text-sm font-medium';

  const variantClasses = {
    primary:
      'bg-yellow-400 text-black hover:bg-yellow-500 hover:underline cursor-pointer',
    secondary:
      'text-black border border-yellow-400 hover:text-yellow-500 hover:underline cursor-pointer',
    disabled:
      'bg-gray-300 text-gray-900 border border-gray-300 cursor-not-allowed opacity-60',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${baseClass} ${variantClasses[variant]} ${className} `}
    >
      {children}
    </button>
  );
}
