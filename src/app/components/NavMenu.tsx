import Link from "next/link";
import { navigation } from "../navigation";

export default function NavMenu() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2 flex gap-4">
      {navigation.map((item) => (
        <div key={item.label} className="relative group">
          <Link href={item.href} className="font-semibold hover:text-blue-600">
            {item.label}
          </Link>
          {item.children && (
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded p-2 z-10 min-w-[200px]">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  className="block px-2 py-1 hover:bg-gray-100 rounded"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
