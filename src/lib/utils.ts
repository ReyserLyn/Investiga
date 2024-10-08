import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const POCKET_BASE_URL = process.env.NEXT_PUBLIC_POCKETBASE_API_URL || "";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImageUrl = ({
  url,
  collectionId,
  id,
}: {
  url: string;
  collectionId: string;
  id: string;
}) => `${POCKET_BASE_URL}/api/files/${collectionId}/${id}/${url}`;
