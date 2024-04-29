export default function ArrowHeadUpIcon({ color = "currentColor", size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M12 8L18 14H6L12 8Z" fill={color} />
    </svg>
  );
}
