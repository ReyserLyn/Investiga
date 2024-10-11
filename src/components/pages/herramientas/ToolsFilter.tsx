"use client";

import { cn, getImageUrl } from "@/lib/utils";
import { TagsResponse, ToolsIaResponse } from "@/types/pocketbase-types";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ToolsModal from "./ToolsModal";

export default function FilterTools({
  tools,
  tags,
}: {
  tools: ToolsIaResponse[];
  tags: TagsResponse[];
}) {
  const [filteredTools, setFilteredTools] = useState(tools);
  const [search, setSearch] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    if (search.includes(tag)) {
      setSearch(search.filter((t) => t !== tag));
    } else {
      setSearch([...search, tag]);
    }
  };

  useEffect(() => {
    if (search.length === 0) {
      setFilteredTools(tools);
      return;
    }

    setFilteredTools(
      tools.filter((tool) => search.every((t) => tool.tags.includes(t)))
    );
  }, [search, tools]);

  const updateFilteredTools = (filteredTools: ToolsIaResponse[]) => {
    setFilteredTools(filteredTools);
  };

  return (
    <div className="flex flex-col w-full gap-16">
      <SearchBar tools={tools} setFilteredTools={updateFilteredTools} />{" "}
      <div className="flex flex-col px-6">
        <h2 className="font-semibold text-xl">Filtros:</h2>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          {tags.map((tag) => (
            <button
              key={tag["id"]}
              type="button"
              className={cn(
                "bg-gray-100 rounded-full px-4 py-2 text-xs md:text-sm shadow-zinc-300 shadow-md hover:border-primary border border-transparent",
                {
                  "bg-primary": search.includes(tag["id"]),
                }
              )}
              onClick={() => toggleTag(tag["id"])}
            >
              {tag["name"]}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-full gap-x-10 md:gap-x-16 gap-y-20 justify-items-center">
        {filteredTools.map((herramienta) => (
          <ToolsModal
            description={herramienta.description}
            homepage={herramienta.page_url}
            logo={getImageUrl({
              url: herramienta.logo,
              collectionId: herramienta.collectionId,
              id: herramienta.id,
            })}
            name={herramienta.name}
            numberLikes={Math.floor(Math.random() * 100)}
            tags={Array.isArray(herramienta.expand) ? herramienta.expand : []}
            key={herramienta.id}
          />
        ))}
      </div>
    </div>
  );
}
