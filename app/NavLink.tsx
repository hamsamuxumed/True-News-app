import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <div>
      <Link href={`/news/${category}`}>{category}</Link>
    </div>
  );
}

export default NavLink;
