import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <AdjustmentsHorizontalIcon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-center text-4xl ">
            <span className="underline decoration-6 decoration-orange-400">
              True
            </span>
            News
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* {Darkmode will be here} */}
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* Navigation link section */}
      <NavLinks />
      {/* Search bar section */}
      <SearchBar />
    </header>
    // NavLinks
    //SearchBar
  );
}

export default Header;
