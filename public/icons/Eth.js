export default function Eth({ color = "currentColor", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1.3125L4.3125 9.1875L9 12L13.6875 9.1875L9 1.3125ZM4.3125 10.125L9 16.6875L13.6875 10.125L9 12.9375L4.3125 10.125Z"
        fill={color}
      />
    </svg>
  );
}
