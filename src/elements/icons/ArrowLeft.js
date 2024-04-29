export default function ArrowLeftIcon({ color = "currentColor", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2071 5.70701L12.9142 4.99991L11.5 3.58569L10.7929 4.2928L3.79289 11.2928C3.40237 11.6833 3.40237 12.3165 3.79289 12.707L10.7929 19.707L11.5 20.4141L12.9142 18.9999L12.2071 18.2928L6.91421 12.9999H19.5H20.5V10.9999H19.5H6.91421L12.2071 5.70701Z"
        fill={color}
      />
    </svg>
  );
}
