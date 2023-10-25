import SignInButton from "./SignInButton";

export default function AppBar() {
  return (
    <header className="flex gap-4 p4 bg-gradient-to-b from-white to-gray-200 shadow">
      <SignInButton />
    </header>
  );
}
