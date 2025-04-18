import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "./input";
import { MdKeyboardVoice } from "react-icons/md";

export default function SearchBarHome({
  onSearch = (query: string) => console.log(query),
}: {
  onSearch?: (query: string) => void;
}) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="relative w-[250px] lg:w-[400px] m-w-xs">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        <Input
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-8 pr-2 rounded-xl border border-input bg-background hover:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-gray-100"
        />
        <MdKeyboardVoice className="absolute right-[20px] top-[10px] fill-gray-400" />
      </div>
    </form>
  );
}
