export default function AlertIcon({ color = "currentColor", size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M12 10L12 13" stroke={color} strokeWidth="2" strokeLinecap="square" />
      <path
        d="M12.9316 3.55382L21.8506 19.3075C22.1533 19.8422 21.9815 20.5305 21.467 20.8449C21.3009 20.9465 21.1117 21 20.9189 21H3.08089C2.48393 21 2 20.4972 2 19.877C2 19.6767 2.05152 19.4801 2.14923 19.3075L11.0683 3.55382C11.3709 3.01921 12.0334 2.84076 12.5479 3.15523C12.7064 3.25205 12.8384 3.38923 12.9316 3.55382Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path d="M12 16V18" stroke={color} strokeWidth="2" />
    </svg>
  );
}
