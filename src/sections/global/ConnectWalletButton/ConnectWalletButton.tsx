// packages
"use client";

import { connectWalletModalOpen, userSessionAtom } from "@/atoms";
import { walletLogin } from "@/lib/actions/auth";
import { Button } from "@mui/material";
import { useEthers } from "@usedapp/core";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ConnectWalletButton() {
  const router = useRouter();
  const setOpen = useSetAtom(connectWalletModalOpen);
  const [connecting, setConnecting] = useState(false);
  const { account, activateBrowserWallet, deactivate, library } = useEthers();
  const setUserSession = useSetAtom(userSessionAtom);

  const handleLogin = () => {
    setConnecting(true);
    activateBrowserWallet({
      type: "metamask",
    });
  };

  const login = async () => {
    try {
      const signerLib: any = library;
      const message = `Welcome to IPFI!\n\nThis is just a wallet connection and not a transaction.\n\nEnjoy your stay! \n\nUUID: ${new Date().valueOf()}`;
      const signer = signerLib?.getSigner();
      const signature = await signer.signMessage(message);
      const res = await walletLogin({
        wallet: account?.toLowerCase() || "",
        message,
        signature,
      });

      setConnecting(false);

      if (res?.data) {
        setOpen(false);
        setUserSession(res.data);
        router.push("/explore");
      }
    } catch (error) {
      console.error(error);
      deactivate();
    }
  };

  useEffect(() => {
    if (account && connecting) {
      login();
    }
  }, [account, connecting]);

  return (
    <Button
      disabled={connecting}
      fullWidth
      variant="solidGreen"
      onClick={handleLogin}
    >
      {connecting ? "CONNECTING..." : "CONNECT"}
    </Button>
  );
}
