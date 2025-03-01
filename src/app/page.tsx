import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
       <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-red-500">Sign in</button>
          {/* <SignUpButton /> */}
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
    </div>
  );
}
