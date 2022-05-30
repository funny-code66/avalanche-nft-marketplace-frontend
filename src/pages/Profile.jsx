import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { APIclient } from '../constants'
import ProfileContainer from '../containers/Profile'


const Profile = () => {
  const [ data, setData ] = useState({
    onSales: [],
    auctions: [],
    owns: [],

  })

  const contracts = useSelector(state=>state.contracts)
  const userInfo = useSelector(state=>state.profile.currentUser)
  const { wallet } = userInfo

  const { contractClockSale, contractNFT } = contracts

  const getSaleData = async () => {
    const saleData = []
    const allNFTaddrs = await contractClockSale.methods.getVerifiedContracts().call();
    const myNFTdata = allNFTaddrs.filter((addrNFT)=>{
      const tokenIds = contractClockSale.methods.getSaleTokensBySeller(wallet, addrNFT).call()
      if (tokenIds){
        // const myContractNFT = await new Web3()
        const sales = tokenIds.filter((tokenId)=>{
          let sale = await contractClockSale.methods.getSale(addrNFT, tokenId).call()
          let offers = await contractClockSale.methods.getOffers(addrNFT, tokenId).call()
          let offerData = []
          const offerLen = offers[0].length()
          for(let idx = 0 ; idx < offerLen ; idx++){
            offerData.push({
              offerer: offers[0][idx],
              price:   offers[1][idx]
            });
          }
          if (sale) {
            var ipfsData;
            const tokenURI = await contractClockSale.methods.tokenURI(tokenId).call()
            await fetch(tokenURI).then((res)=>res.json()).then((data)=>{ipfsData = data;})
            
            saleData.push({
              contract: addrNFT,
              tokenId: tokenId,
              name: ipfsData.name,
              image: ipfsData.image,
              owner: wallet,
              startedAt: Math.floor(Date.now()/1000),
              currentPrice: sale[1],
              offers: offerData
            })
          }
        })
        return { addrNFT: sales }
      }
    })
  }

  const getAuctionData = async () => {
    const auctData = []
    const allNFTaddrs = await contractClockSale.methods.getVerifiedContracts().call();
    const myNFTdata = allNFTaddrs.filter((addrNFT)=>{
      const tokenIds = contractClockSale.methods.getSaleTokensBySeller(wallet, addrNFT).call()
      if (tokenIds){
        // const myContractNFT = await new Web3()
        const sales = tokenIds.filter((tokenId)=>{
          let sale = await contractClockSale.methods.getSale(addrNFT, tokenId).call()
          let offers = await contractClockSale.methods.getOffers(addrNFT, tokenId).call()
          let offerData = []
          const offerLen = offers[0].length()
          for(let idx = 0 ; idx < offerLen ; idx++){
            offerData.push({
              offerer: offers[0][idx],
              price:   offers[1][idx]
            });
          }
          if (sale) {
            var ipfsData;
            const tokenURI = await contractClockSale.methods.tokenURI(tokenId).call()
            await fetch(tokenURI).then((res)=>res.json()).then((data)=>{ipfsData = data;})
            
            saleData.push({
              contract: addrNFT,
              tokenId: tokenId,
              name: ipfsData.name,
              image: ipfsData.image,
              owner: wallet,
              startedAt: Math.floor(Date.now()/1000),
              currentPrice: sale[1],
              offers: offerData
            })
          }
        })
        return { addrNFT: sales }
      }
    })
  }

  // {
  //   image: '/img/bg-img/13.jpg',
  //   name: 'Monkey Arts #114',
  //   collection: '@nft_fun',
  // },

  const getOwnData = async () => {
    try{
      const ownData = []
      const allNFTaddrs = await contractClockSale.methods.getVerifiedContracts().call();
      const myNFTdata = allNFTaddrs.filter((addrNFT)=>{
        const myBalance = await contractClockSale.methods.balanceOf(addrNFT, wallet).call()
        for(let i = 0; i < myBalance; i++){
          const tokenId = await contractClockSale.methods.tokenOfOwnerByIndex(addrNFT, wallet, i);
          var ipfsData;
          const tokenURI = await contractClockSale.methods.tokenURI(tokenId).call()
          await fetch(tokenURI).then((res)=>res.json()).then((data)=>{ipfsData = data;})
          const collectionName = await contractClockSale.methods.name(addrNFT).call()
          ownData.push({
            image: ipfsData.image,
            name: ipfsData.name
            collections: collectionName
          })
        }
      });
    } catch (e) {
      console.log("Profile.getOwnData() error:",e)
    }
  }

  const getActivities = async () => {

  }

  useEffect(()=>{
    const ownedNFTs = getOwnData();
  }, [wallet])

  return (
    <ProfileContainer 
      wallet={wallet}
      />
  )
}

export default Profile