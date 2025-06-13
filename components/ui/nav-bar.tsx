import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";

export function NavBar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold">
                Analytics
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/dashboard"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="/docs"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Documentation
              </Link>
            </div>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              <Link href="/settings">Settings</Link>
            </Button>

            <Avatar>
              <AvatarImage src="" alt="User" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
}
