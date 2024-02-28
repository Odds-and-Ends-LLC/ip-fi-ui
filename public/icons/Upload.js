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
        d="M7 9.41421L7.70711 8.70711L11 5.41421V17V18H13V17V5.41421L16.2929 8.70711L17 9.41421L18.4142 8L17.7071 7.29289L12.7071 2.29289C12.3166 1.90237 11.6834 1.90237 11.2929 2.29289L6.29289 7.29289L5.58579 8L7 9.41421ZM4 20H3V22H4H20H21V20H20H4Z"
        fill={color}
      />
    </svg>
  );
}
