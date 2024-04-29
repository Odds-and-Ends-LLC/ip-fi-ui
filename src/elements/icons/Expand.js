export default function ExpandIcon({ color = "currentColor", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 15.344L18.879 17.465L15.707 14.293L14.293 15.707L17.465 18.879L15.344 21H21V15.344ZM3 8.656L5.121 6.535L8.293 9.707L9.707 8.293L6.535 5.121L8.656 3H3V8.656ZM21 3H15.344L17.465 5.121L14.293 8.293L15.707 9.707L18.879 6.535L21 8.656V3ZM3 21H8.656L6.535 18.879L9.707 15.707L8.293 14.293L5.121 17.465L3 15.344V21Z"
        fill={color}
      />
    </svg>
  );
}
