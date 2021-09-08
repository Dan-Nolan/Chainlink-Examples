async function main() {
  const RandomNumberConsumer = await hre.ethers.getContractFactory("RandomNumberConsumer");
  const consumer = await RandomNumberConsumer.deploy();

  await consumer.deployed();

  console.log("consumer deployed to:", consumer.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
