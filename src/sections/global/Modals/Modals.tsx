// components
import AddNFTToCatalogModal from "./AddNFTToCatalogModal";
import ConnectWalletModal from "./ConnectWalletModal";
import GlobalSnackbar from "./GlobalSnackbar";

export default function Modals() {
  return (
    <>
      <ConnectWalletModal />
      <AddNFTToCatalogModal />
      <GlobalSnackbar />
    </>
  )
};
