"use client";

import { Input } from "@/components/ui/input";
import { ToolsIaResponse } from "@/types/pocketbase-types";
import { Search } from "lucide-react";
import { ChangeEventHandler, useState } from "react";

export default function SearchBar({
  tools,
  setFilteredTools,
}: {
  tools: ToolsIaResponse[];
  setFilteredTools: (tools: ToolsIaResponse[]) => void;
}) {
  const [search, setSearch] = useState("");

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
    const filtered = tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        tool.expand?.tags.some((tag) =>
          tag.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
    );
    setFilteredTools(filtered);
  };

  return (
    <div className="flex items-center gap-2">
      <Search className="w-8 h-8 text-zinc-600" />
      <Input
        type="text"
        placeholder="Buscar Herramienta..."
        className="w-full p-2 border-zinc-300"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}
