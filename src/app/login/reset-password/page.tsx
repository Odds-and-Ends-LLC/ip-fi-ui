// packages

// styles

// components
import { PasswordPageContainer, ResetPassword } from "@/sections/login";
import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <Suspense>
      <PasswordPageContainer>
        <ResetPassword />
      </PasswordPageContainer>
    </Suspense>
  );
}
