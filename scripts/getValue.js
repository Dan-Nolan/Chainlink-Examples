const addr = "0xc925ba223D48C78aBFBFcb083544B1034E26d835";
const linkAddr = "0xa36085F69e2889c224210F603D836748e7dC0088";

async function main() {
  const consumer = await hre.ethers.getContractAt("APIConsumer", addr);

  const linkABI = ["function transfer(address, uint) external"];
  const linkToken = await ethers.getContractAt(linkABI, linkAddr);
  const tx = await linkToken.transfer(consumer.address, ethers.utils.parseEther(".1"));
  await tx.wait(); // mined

  await consumer.requestVolumeData();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
