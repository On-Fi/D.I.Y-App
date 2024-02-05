import themes from "@/components/Themes";

export default function PlusIcon({ theme}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      height="40"
      width="40"
    >
      <path
        d="M208 80c0-17.7 14.3-32 32-32s32 14.3 32 32v144h144c17.7 0 32 14.3 32 32s-14.3 32-32 32H272v144c0 17.7-14.3 32-32 32s-32-14.3-32-32V288H80c-17.7 0-32-14.3-32-32s14.3-32 32-32h144V80z"
        fill={themes[theme].iconColor}/>
    </svg>
  );
}
