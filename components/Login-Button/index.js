import { useSession, signIn, signOut } from "next-auth/react";
import Button from "../Button";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <Button color="secondary" onClick={() => signOut()}>
        Sign out
      </Button>
    );
  }
  return <Button onClick={() => signIn()}>Sign in</Button>;
}
