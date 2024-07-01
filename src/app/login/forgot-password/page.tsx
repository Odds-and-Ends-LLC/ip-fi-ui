// packages

// styles

// components
import { ForgotPassword, PasswordPageContainer } from "@/sections/login";
import { Suspense } from "react";

export default function ForgotPasswordPage() {
  return (
    <Suspense>
      <PasswordPageContainer>
        <ForgotPassword />
      </PasswordPageContainer>
    </Suspense>
  );
}
