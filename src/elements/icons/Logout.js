export default function LogoutIcon({ color = "currentColor", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.79291 1H2.79291H17.7929H18.7929V3H17.7929H3.79291V21H17.7929H18.7929V23H17.7929H2.79291H1.79291V22V2V1ZM16.7929 6.58579L17.5 7.29289L21.5 11.2929L22.2071 12L21.5 12.7071L17.5 16.7071L16.7929 17.4142L15.3787 16L16.0858 15.2929L18.3787 13H8.79291H7.79291V11H8.79291H18.3787L16.0858 8.70711L15.3787 8L16.7929 6.58579Z"
      />
    </svg>
  );
}
