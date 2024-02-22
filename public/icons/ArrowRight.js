export default function ArrowRightIcon({ color = "currentColor", size = 24 }) {
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
        d="M12.7071 4.2928L12 3.58569L10.5858 4.99991L11.2929 5.70701L16.5858 10.9999H4V12.9999H16.5858L11.2929 18.2928L10.5858 18.9999L12 20.4141L12.7071 19.707L19.7071 12.707C20.0976 12.3165 20.0976 11.6833 19.7071 11.2928L12.7071 4.2928Z"
        fill={color}
      />
    </svg>
  );
}
