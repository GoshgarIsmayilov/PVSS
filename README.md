# PVSS (Private Value Summation System)

This GitHub page includes repositories of two different protocols for private value summation system.

Blockchain is a popular decentralized database in the form of transactions and blocks, which is distributed across the network. The privacy-preserving data aggregation is a critical problem for many applications where multiple parties need to collaborate with each other privately to arrive at certain results. However, disclosure of sensitive data may inherently carry several risk factors which may eventually results in severe consequences. Therefore, in this work, we have proposed two different privacy-preserving data aggregation protocols for summation on the Ethereum blockchain by integrating several cryptographic primitives including commitment scheme, asymmetric encryption and zero-knowledge proof along with the hypercube network topology. In the first hypercube communication stage of the first protocol, the secret values of the parties are pair-wise shared and known as a security relaxation. However, it is improved in the second protocol where the secret values remain completely private. Both protocols consist of four stages as \textit{contract deployment}, \textit{user registration}, \textit{private submission} and \textit{proof verification}. The analysis of these protocols are made with respect to two basic standpoints as security and scalability including computational, communicational and storage overheads. According to this analysis, the first protocol provides faster way for data summation by relaxing the security constraints while the second protocol provides more secure and robust way in return for extra overheads. In the work, the details of the protocols including the smart contracts, zero-knowledge proof scheme and web user interface application are also presented. We have performed experimental study in order to identify the required gas costs for the individual parties and the whole protocols. The general formulation is also provided to characterize the changes in gas costs for high number of users.


# Private Summation Protocols (Protocol 1 and 2)

The Metamask extension must be installed on the browser and the node-js extension must be also installed in order to run the server.js file.

In the directory of server.js file, execute ```node server.js``` in order to run the local server.

Execute ```http://localhost:3300/``` on the browser where Metamask prompts you to connect on your Ethereum account.

Steps to make a private transaction:

1. Deploy a new instance of the contracts by providing registration start time and time limit.
2. Register with secret value by providing the contract address. 
3. Submit the resulting sum (a.k.a. secure number) at every stage to the pair by providing the contract address.
4. Genereate a zero-knowledge proof for the resulting sum (a.k.a. secure number) at every stage by providing the contract address and private key. The private key is used only inside browser and not transmitted over the network. It takes nearly 90 seconds to generate zero-knowledge proof. The secure number must be recorded in order to involve with private summation later again.


# Private Summation Local Ethereum Test

There are two javascript files for the first and the second protocols.

The node libraries including web3, eccrypto-js and zokrates-js must be installed beforehand.

Execute ```geth --http --http.corsdomain="https://remix.ethereum.org" --http.api web3,eth,debug,personal,net,ethers --vmdebug --dev console --allow-insecure-unlock``` to run a local blockchain.

Deploy an instance of the contracts by selecting ```External HTTP Provider```.

Run the scripts with ```node script_async_v1.js``` or ```node script_async_v2.js```

For the first protocol, the script approximately ends in 2 minutes for 1-dimension, 8 minutes for 2-dimension, 24 minutes for 3-dimension, 60 minutes for 4-dimension, 160 minutes for 5-dimension, 320 minutes for 6-dimension and 750 minutes for 7-dimension.
For the second protocol, the script is approximately 2x slower since two different zero-knowledge proofs must be generated.


# Auxiliary

It contains extra materials including:
1. Draft version of private summation protocols
2. Private summation proof generation in terminal
3. Useful commands and some outputs of experiments
4. Solidity contracts of the protocols

[1] Ethers Javascript Library, URL: https://docs.ethers.io/v5/

[2] Eccrypto Javascript Library, URL: https://www.npmjs.com/package/eccrypto

[3] J. Eberhardt, S. Tai, "Zokrates-scalable privacy-preserving off-chain computations", IEEE International Conference on Internet of Things (iThings) 
and IEEE Green Computing and Communications (GreenCom) and IEEE Cyber, Physical and Social Computing (CPSCom) and IEEE Smart Data (SmartData),
pp. 1084-1091, 2018.

[4] Browserify Bundler, URL: https://browserify.org

[5] Webpack Bundler, URL: https://webpack.js.org

[6] Solidity Language, URL: https://docs.soliditylang.org/en/v0.8.15/

[7] Remix Compiler, URL: https://remix.ethereum.org

[8] Avalanche Fuji Blockchain Network, URL: https://www.avax.network

[9] Geth (Go-Ethereum), URL: https://geth.ethereum.org
