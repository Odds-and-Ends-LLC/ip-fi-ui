export default function CloseIcon({ color = "#FDFDFE", size = 24 }) {
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
        d="M6.75 5.33582L7.45711 6.04292L12 10.5858L16.5429 6.04292L17.25 5.33582L18.6642 6.75003L17.9571 7.45714L13.4142 12L17.9571 16.5429L18.6642 17.25L17.25 18.6642L16.5429 17.9571L12 13.4142L7.45711 17.9571L6.75 18.6642L5.33579 17.25L6.04289 16.5429L10.5858 12L6.04289 7.45714L5.33579 6.75003L6.75 5.33582Z"
        fill={color}
      />
    </svg>
  );
}
