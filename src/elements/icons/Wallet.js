export default function WalletIcon({ color = "#FDFDFE", size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Change-Color"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 0H0V1V17V18H1H19H20V17V13H21H22V12V6V5H21H20V1V0H19H1ZM18 5V2H2V16H18V13H13H12V12V6V5H13H18ZM14 11V7H20V11H14Z"
        fill={color}
      />
    </svg>
  );
}
