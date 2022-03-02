import { clearWalletProvider, connectToWallet, web3ModalProvider } from "./Web3Modal";

export let accountAddress = undefined
export let web3Modal = undefined
export let chainId = null

async function updateAccount(setWallet) {
  const accounts = await web3Modal.eth.getAccounts()
  localStorage.setItem('wallet', accounts[0])
  setWallet(accounts[0])

  if (web3ModalProvider !== undefined && web3ModalProvider !== null) {
    web3ModalProvider.on("accountsChanged", (accounts) => {
      localStorage.setItem('wallet', accounts[0])
      setWallet(accounts[0])
    });
    web3ModalProvider.on("chainChanged", (id) => {
      window.location.reload()
    });
  }
  return accounts[0]
}

export async function initWallet(setWallet) {
  let address = '';
  try {
    web3Modal = await connectToWallet()

    address = await updateAccount(setWallet)
  } catch (e) {
    console.log("wallet connect error, reconnecting", e)
  }
  return address
}

export function updateAccountAddress(accounts) {
  if (accounts !== undefined && accounts.length > 0) {
    accountAddress = accounts[0]
  } else if (accountAddress !== undefined) {
    clearWalletProvider()
    accountAddress = undefined
  }
}

export function closeWalletProvider() {
  clearWalletProvider();
}