"use client";
import React, { useState } from "react";

interface ActionItemProps {
  id: number;
  title: string;
  completed?: boolean;
}

export default function ActionItem({ id, title, completed = false }: ActionItemProps) {
  const [isCompleted, setIsCompleted] = useState(completed);

  return (
    <li className="flex items-center bg-white rounded shadow p-3">
      <input
        type="checkbox"
        className="mr-3"
        checked={isCompleted}
        onChange={() => setIsCompleted((v) => !v)}
      />
      <span className={isCompleted ? "line-through text-gray-400" : ""}>{title}</span>
    </li>
  );
}
