export default function WarningIcon({ color = "currentColor", size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M7.3715 0.33C7.47582 0.225437 7.59973 0.14247 7.73615 0.0858447C7.87256 0.0292196 8.0188 4.83658e-05 8.1665 0L17.1665 0C17.465 0 17.75 0.1185 17.9615 0.33L24.3365 6.705C24.548 6.915 24.6665 7.2015 24.6665 7.5V16.5C24.6665 16.6477 24.6373 16.7939 24.5807 16.9304C24.524 17.0668 24.4411 17.1907 24.3365 17.295L17.9615 23.67C17.8572 23.7746 17.7333 23.8575 17.5969 23.9142C17.4604 23.9708 17.3142 24 17.1665 24H8.1665C8.0188 24 7.87256 23.9708 7.73615 23.9142C7.59973 23.8575 7.47582 23.7746 7.3715 23.67L0.996504 17.295C0.891941 17.1907 0.808974 17.0668 0.752349 16.9304C0.695724 16.7939 0.666552 16.6477 0.666504 16.5L0.666504 7.5C0.666504 7.2015 0.785004 6.9165 0.996504 6.705L7.3715 0.33ZM8.6315 2.25L2.9165 7.965V16.035L8.6315 21.75H16.7015L22.4165 16.035V7.965L16.7015 2.25H8.6315ZM12.6665 6C12.9649 6 13.251 6.11853 13.462 6.3295C13.673 6.54048 13.7915 6.82663 13.7915 7.125V12.375C13.7915 12.6734 13.673 12.9595 13.462 13.1705C13.251 13.3815 12.9649 13.5 12.6665 13.5C12.3681 13.5 12.082 13.3815 11.871 13.1705C11.66 12.9595 11.5415 12.6734 11.5415 12.375V7.125C11.5415 6.82663 11.66 6.54048 11.871 6.3295C12.082 6.11853 12.3681 6 12.6665 6ZM12.6665 18C12.2687 18 11.8871 17.842 11.6058 17.5607C11.3245 17.2794 11.1665 16.8978 11.1665 16.5C11.1665 16.1022 11.3245 15.7206 11.6058 15.4393C11.8871 15.158 12.2687 15 12.6665 15C13.0643 15 13.4459 15.158 13.7272 15.4393C14.0085 15.7206 14.1665 16.1022 14.1665 16.5C14.1665 16.8978 14.0085 17.2794 13.7272 17.5607C13.4459 17.842 13.0643 18 12.6665 18Z"
        fill={color}
      />
    </svg>
  );
}
