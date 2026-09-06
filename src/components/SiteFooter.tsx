import { site } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="shell flex flex-col gap-4 py-10 text-xs text-mist-dim sm:flex-row sm:items-center sm:justify-between">
      <span>
        © {new Date().getFullYear()} {site.name}
      </span>
      <span className="hidden sm:block">
        Built around AI that works in the real world.
      </span>
      <a href="#top" className="text-mist transition-colors hover:text-mint">
        Back to top ↑
      </a>
    </footer>
  );
}
