import { useSession, signIn, signOut } from "next-auth/react";
import Button from "../Button";

export default function LoginButton({ theme, color}) {
  const { data: session } = useSession();
  if (session) {
    return (
      <Button theme={theme} color={color} onClick={() => signOut()}>
        Sign out
      </Button>
    );
  }
  return <Button theme={theme} color={color} onClick={() => signIn()}>Sign in</Button>;
}
