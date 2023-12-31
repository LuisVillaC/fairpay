import type { LucideProps } from "lucide-react";
import {
  Cookie,
  Edit,
  FilePlus2,
  Laptop,
  Moon,
  Sun,
  Trash2,
  X,
} from "lucide-react";
import React from "react";
export const Icons = {
  Sun,
  Moon,
  Logo: Cookie,
  Laptop,
  FilePlus2,
  Trash2,
  Edit,
  X,
  Spinner: (props: LucideProps): React.JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 100 101"
      {...props}
    >
      <path
        fill="currentColor"
        d="M100 50.59c0 27.615-22.386 50.001-50 50.001s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50Zm-90.919 0c0 22.6 18.32 40.92 40.919 40.92 22.599 0 40.919-18.32 40.919-40.92 0-22.598-18.32-40.918-40.919-40.918-22.599 0-40.919 18.32-40.919 40.919Z"
      />
      <path
        fill="currentFill"
        d="M93.968 39.04c2.425-.636 3.894-3.128 3.04-5.486A50 50 0 0 0 41.735 1.279c-2.474.414-3.922 2.919-3.285 5.344.637 2.426 3.12 3.849 5.6 3.484a40.916 40.916 0 0 1 44.131 25.769c.902 2.34 3.361 3.802 5.787 3.165Z"
      />
    </svg>
  ),
  Cloud: (props: LucideProps): React.JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      viewBox="-1 -2 380 244"
      {...props}
    >
      <path
        fill="currentFill"
        d="M117.98 23.55l2.35.6 1.34-1.57C133.66 8.5 154.34-.01 176.55 0c24.3 0 46.23 10.1 57.51 25.95l1.53 2.15 2.83-1.19c8.3-3.51 17.67-5.35 27.2-5.34 30.74 0 55.66 18.78 55.66 41.94 0 1.81-.15 3.6-.45 5.38l-.35 2.05 2.65.56c30.65 6.46 52.23 27.6 52.23 51.93 0 22.46-18.39 42.32-45.71 50.31l-2.09.61.06 1.69c.02.44.03.88.03 1.32 0 25.15-27.07 45.54-60.44 45.54-11.64.02-23.03-2.51-32.8-7.28l-2.52-1.23-1.77 1.83c-11.37 11.74-29.51 18.68-48.8 18.67-20.87.01-40.26-8.1-51.29-21.44l-1.55-1.87-2.6 1.01c-9.42 3.64-19.86 5.53-30.45 5.52-36.89 0-66.8-22.54-66.8-50.33 0-6.22 1.49-12.27 4.37-17.95l1.04-2.05-2.62-.96C12.2 139.81-.01 125.14 0 109.05c0-21.16 20.93-38.94 48.55-41.6l3.14-.3-.39-2.38c-.27-1.61-.4-3.23-.4-4.85 0-21.18 22.78-38.35 50.89-38.35 5.58 0 11.02.67 16.19 1.98 0 0 0 0 0 0z"
      />
    </svg>
  ),
};
