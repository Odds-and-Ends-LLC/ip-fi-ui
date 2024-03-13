export default function ArrowLeftIcon({ color = "currentColor", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.75 13C17.75 13.3315 17.6183 13.6495 17.3839 13.8839C17.1495 14.1183 16.8315 14.25 16.5 14.25C16.1685 14.25 15.8505 14.1183 15.6161 13.8839C15.3817 13.6495 15.25 13.3315 15.25 13C15.25 12.6685 15.3817 12.3505 15.6161 12.1161C15.8505 11.8817 16.1685 11.75 16.5 11.75C16.8315 11.75 17.1495 11.8817 17.3839 12.1161C17.6183 12.3505 17.75 12.6685 17.75 13ZM22.5 12C22.5 17.5 18 22 12.5 22H2.5V12C2.5 6.5 7 2 12.5 2C18 2 22.5 6.5 22.5 12ZM7.5 18C8.91 19.23 10.5 20 12.5 20C16.91 20 20.5 16.41 20.5 12C20.5 11.21 20.38 10.45 20.17 9.74C19.45 9.91 18.7 10 17.92 10C15.92 10 14.07 9.4 12.5 8.39C12.5 8.39 11.04 13.76 8.53 13C7.87 12.8 7.5 13.31 7.5 14"
        fill={color}
      />
    </svg>
  );
}
