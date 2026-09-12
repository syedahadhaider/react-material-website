import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EditorialButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href as never} className={`editorial-button ${className}`}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={17} strokeWidth={1.25} />
    </Link>
  );
}

export function EditorialAction({
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`editorial-button ${className}`}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={17} strokeWidth={1.25} />
    </button>
  );
}
