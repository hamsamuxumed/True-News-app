import { categories } from "../constants";
function NavLinks() {
  return (
    <nav>
      {categories.map((category) => (
        <NavLinks key={category} categories={category} />
      ))}
    </nav>
  );
}

export default NavLinks;
