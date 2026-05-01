interface Props {
  className?: string;
  variant?: "red" | "gold";
}

const BullSilhouette = ({ className, variant = "red" }: Props) => {
  const fill = variant === "gold" ? "hsl(var(--gold))" : "hsl(var(--primary))";
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M256 96c-22 0-42 6-58 16-14-22-40-44-78-52-12-2-22 8-18 20 8 22 18 44 38 60-10 16-16 36-16 56 0 28 14 54 36 72 4 18 14 36 30 50 18 16 42 26 66 26s48-10 66-26c16-14 26-32 30-50 22-18 36-44 36-72 0-20-6-40-16-56 20-16 30-38 38-60 4-12-6-22-18-20-38 8-64 30-78 52-16-10-36-16-58-16zm-72 168c8 0 14 8 14 18s-6 18-14 18-14-8-14-18 6-18 14-18zm144 0c8 0 14 8 14 18s-6 18-14 18-14-8-14-18 6-18 14-18zm-72 80c20 0 38 8 50 22-12 14-30 22-50 22s-38-8-50-22c12-14 30-22 50-22z"
      />
    </svg>
  );
};

export default BullSilhouette;
