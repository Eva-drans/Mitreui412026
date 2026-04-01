interface CustomCheckboxProps {
  checked: boolean;
  onChange?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CustomCheckbox({ checked, onChange, size = 'md', className = '' }: CustomCheckboxProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const checkSizes = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3'
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${checked ? 'bg-[#0078ae] border-[#0078ae]' : 'bg-white border-[#565c65]'}
        border-2 rounded cursor-pointer flex items-center justify-center flex-shrink-0
        hover:border-[#0078ae] transition-colors
        ${className}
      `}
      onClick={onChange}
    >
      {checked && (
        <svg
          className={`${checkSizes[size]} text-white`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </div>
  );
}
