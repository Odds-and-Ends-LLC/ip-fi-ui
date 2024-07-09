// packages
import { Typography } from "@mui/material";
import { useAtom } from "jotai"

// components
import { connectWalletModalOpenAtom } from "@/atoms"
import { Modal } from "@/components"
import { ConnectWalletButton } from "..";

export default function ConnectWalletModal() {
  const [open, setOpen] = useAtom(connectWalletModalOpenAtom);

  return (
    <Modal
      title="Connect Wallet"
      open={open}
      onClose={() => setOpen(false)}
      titleIcon={undefined} //to be removed
      actions={undefined} //to be removed
    >
      <Typography>Let&apos;s start by connecting your wallet!</Typography>
      <ConnectWalletButton />
    </Modal>
  )
}
