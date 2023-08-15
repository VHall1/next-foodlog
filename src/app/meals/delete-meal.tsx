"use client";

import { TrashIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const DeleteMeal = ({ mealId }: { mealId: number }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const deleteMeal = async () => {
    setIsLoading(true);
    await fetch(`/meals/${mealId}/destroy`, { method: "DELETE" });
    setIsLoading(false);
    router.refresh();
  };

  return (
    <IconButton onClick={deleteMeal} color="red" variant="surface">
      <TrashIcon width="16" height="16" />
    </IconButton>
  );
};
