import Link from "next/link";

type CircleButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
};

const serif = { fontFamily: '"Cormorant Garamond", Georgia, serif' };

const base =
  "pointer-events-auto flex items-center justify-center rounded-full border border-[#1E2A21] bg-[#F4F1EA] text-center text-[#1E2A21] transition-colors duration-500 hover:bg-[#1E2A21] hover:text-[#F4F1EA]";

export default function CircleButton({
  label,
  href,
  onClick,
  ariaLabel,
  className = "",
}: CircleButtonProps) {
  const classes = `${base} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel ?? label}
        style={serif}
        className={classes}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? label}
      style={serif}
      className={classes}
    >
      {label}
    </button>
  );
}