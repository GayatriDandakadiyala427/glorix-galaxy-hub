import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  label: string;
}

export function SearchBar({ value, onChange, placeholder, label }: Props) {
  return (
    <div className="relative w-full">
      <label htmlFor="glorix-search" className="sr-only">
        {label}
      </label>
      <Search
        className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden
      />
      <input
        id="glorix-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-border bg-card pr-4 pl-11 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring focus:outline-none"
      />
    </div>
  );
}
