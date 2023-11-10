# PVSS 

_Private Value Summation System_

The privacy-preserving data aggregation is a critical problem for many applications where multiple parties need to collaborate with each other privately to arrive at certain results. Blockchain, as a database shared across the network, provides an underlying platform on which such aggregations can be carried out with a decentralized manner. Therefore, in this paper, we have proposed a scalable privacy-preserving data aggregation protocol for summation on the Ethereum blockchain by integrating several cryptographic primitives including commitment scheme, asymmetric encryption and zero-knowledge proof along with the hypercube network topology. The protocol consists of four stages as \textit{contract deployment}, \textit{user registration}, \textit{private submission} and \textit{proof verification}. The analysis of the protocol is made with respect to two main perspectives as security and scalability including computational, communicational and storage overheads. In the paper, the zero-knowledge proof, smart contract and web user interface models for the protocol are provided. We have performed an experimental study in order to identify the required gas costs per individual and per system. The general formulation is provided to characterize the changes in gas costs for the increasing number of users. The zero-knowledge proof generation and verification times are also measured.

# To Run Protocols

The Metamask extension must be installed on the browser and the node-js extension must be also installed in order to run the server.js file.

In the directory of server.js file, execute ```node server.js``` in order to run the local server.

Execute ```http://localhost:3300/``` on the browser where Metamask prompts you to connect on your Ethereum account.

Steps to make a private transaction:

1. Deploy a new instance of the contracts by providing registration start time and time limit.
2. Register with secret value by providing the contract address. 
3. Submit the resulting sum (a.k.a. secure number) at every stage to the pair by providing the contract address.
4. Genereate a zero-knowledge proof for the resulting sum (a.k.a. secure number) at every stage by providing the contract address and private key. The private key is used only inside browser and not transmitted over the network. It takes nearly 90 seconds to generate zero-knowledge proof. The secure number must be recorded in order to involve with private summation later again.

<img src="https://github.com/GoshgarIsmayilov/PVSS/blob/master/Auxillary/screenshots/protocol2a.png" width="48%"/> <img src="https://github.com/GoshgarIsmayilov/PVSS/blob/master/Auxillary/screenshots/protocol2b.png" width="40%"/>


# To Run Local Blockchain Test

There are two javascript files for the first and the second protocols.

The node libraries including web3, eccrypto-js and zokrates-js must be installed beforehand.

Execute ```geth --http --http.corsdomain="https://remix.ethereum.org" --http.api web3,eth,debug,personal,net,ethers --vmdebug --dev console --allow-insecure-unlock``` to run a local blockchain.

Deploy an instance of the contracts by selecting ```External HTTP Provider```.

Run the scripts with ```node script_async_v1.js``` or ```node script_async_v2.js```

For the first protocol, the script approximately ends in 2 minutes for 1-dimension, 8 minutes for 2-dimension, 24 minutes for 3-dimension, 60 minutes for 4-dimension, 160 minutes for 5-dimension, 320 minutes for 6-dimension and 750 minutes for 7-dimension.
For the second protocol, the script is approximately 2x slower since two different zero-knowledge proofs must be generated.

<img src="https://github.com/GoshgarIsmayilov/PVSS/blob/master/Auxillary/screenshots/problem.png" width="50%"/>

# Experimental Study 

## Blockchain Gas Consumption 

| Function         | Gas Units        | Gas Cost (Avax)  | Gas Cost (USD)  |
| ---------------- | ---------------- | ---------------- | --------------- |
| Deploy Contract  | 3,372,418        | 0.0927415        | 2.12            |
| Register         | 253,118          | 0.0075556        | 0.17            |
| Submit Summation | 763,692          | 0.0205294        | 0.47            |
| Verify Summation | 2,030,995        | 0.0547150        | 1.25            |

The transaction hashes can be traced on ```https://testnet.snowtrace.io```:
1. Deploy Contract:
   
   0x4db58FCfdEa9a7D5A2AfEb7ac460eFfa9202F1Be

2. Register:
   
   0x5a314c12b5694ac999676867e0ca01ed3a4dec1b9b0e1b111c42274e106fa8d0

   0x142a3c48e796ca9195c5744127d2f5d4f11c4df25773a6310d363b31a53e69b7

   0x6bb895bc6b9436da6c99af06ce49de2d9452c24d0f7570f8e9575f3a1ab28be5

   0x10e90c635c6476c831bbd47449711535d76ab045c2d9eaecf2a6796ebcbefbf6

3. Submit Summation

   0x33131c1aa7090d0c69105b566c2620f3001f77c6caaecd054513efb3dca83c78

   0x233fbf09db927721da7e3b4f018ec96acf2a5b831de32c0101dd5e2d093ccdf7

   0xe663a6b672deb9bef7d9a2a61a3f9a09ef7ea570b296dcb0e276bcd35e54ba4d

   0x812c5c17b78c38ca8ff07bb93fd3accaa3e5ce5fe7279747d6981903aea336af

4. Verify Summation

   0xffac7be70fe63e6f22b43e69ec81a2d67667e194eb405f53d3b4644c002486fa

   0xbc64bb5e480f8e43318f58c2216faa4065e39253764dd3455af99c17a1419c62

   0xfe17bc080526eb7140fc4d5f15eac7c85e576deee4f97b00ef60795f0348ac92

   0xa819593a3cd77002d2f715f6ab8b16b649b8b9f53a259228989077751a9813bf


## Zero-Knowledge Proof Generation/Verification Times

| Run             | Generation Time (sec)  | 
| --------------- | ---------------------- | 
| 0               | 95.812                 |   
| 1               | 91.022                 |  
| 2               | 87.475                 |  
| 3               | 91.622                 |  
| 4               | 87.333                 |  
| 5               | 88.207                 |  
| 6               | 87.289                 |  
| 7               | 87.485                 |  
| 8               | 87.274                 |  
| 9               | 87.433                 |  
| 10              | 87.292                 |  
| 11              | 89.328                 |  
| 12              | 87.522                 |  
| 13              | 87.167                 |  
| 14              | 87.429                 |  
| 15              | 87.342                 |  
| 16              | 87.302                 |  
| 17              | 87.234                 |  
| 18              | 87.180                 |  
| 19              | 87.252                 |  

The zero-knowledge proofs are verified on-chain, without requiring any time cost. Note that the outliers are excluded in the figure.

<img src="https://github.com/GoshgarIsmayilov/PVSS/blob/master/Auxillary/screenshots/times.png" width="20%"/>

# Some Maths

Each party must generate two commitments along with a key pair in the \textit{user registration} stage:

$$
\begin{align}
& c^A = Comm(x + e, r_{x + e}) \\
& c^B = Comm(e, r_{e}) \\
& pk, sk = KeyGen(k) 
\end{align}
$$

\noindent
where $c^A$ and $c^B$ are the resulting commitments of the commitment function $Comm$, based on the secret value $x$, the random value $e$ and their salting values $r_{x + e}$ and $r_{e}$ for \textit{Configuration-A} and \textit{Configuration-B}, respectively while $pk$ and $sk$ are the public and secret keys of the key generation function $KeyGen$ based on security parameter $k$.

For every stage of the hypercube networks, the peer parties for a party is determined in the smart contract, based on the principle of $\mid u - u'  \mid = 1 $, as follows: 

$$
\begin{align}
& u \oplus b'2^t = u^{{peer}^A} \\
& u \oplus b'2^{(log(N) - t - 1)} = u^{{peer}^B}
\end{align}
$$

\noindent
where $u$ and $u^{peer}$ are the peer parties at a certain stage $t \in [0, log(N)-1]$. Note that the pairs of $u$ as $u^{{peer}^A}$ and $u^{{peer}^B}$ are different parties at the initial hypercube communication stage.

In the \textit{private summation submission} stage, the public keys of the peer parties are fetched to encrypt cumulative summation:

$$
\begin{align}
& E^A = Enc([x^A\_{sum} = x^A\_{sum} + x^{{peer}^A}\_{sum}], r^A, pk^{{peer}^A}) \\
& E^B = Enc([x^B\_{sum} = x^B\_{sum} + x^{{peer}^B}\_{sum}], r^B, pk^{{peer}^B}) 
\end{align}
$$

\noindent
where $E^A$ and $E^B$ are the resulting encryptions of the encryption function $Enc$ based on the cumulative summations of the party $x^A_{sum}$ and $x^B_{sum}$, the cumulative summations of the pairs of that party $x^{{peer}^A}_{sum}$ and $x^{{peer}^B}_{sum}$, the salting values $r^A$ and $r^B$ and finally the public keys of the pairs $pk^{{peer}^A}$ and $pk^{{peer}^A}$ for \textit{Configuration-A} and \textit{Configuration-B}, respectively.

In the \textit{proof verification} stage, two encryptions are fetched from the smart contract for decryption as follows: 

$$
\begin{align}
& [x^{{peer}^A}\_{sum}, r^{{peer}^A}] = D^A = Dec([E^A], sk) \\
& [x^{{peer}^B}\_{sum}, r^{{peer}^B}] = D^B = Dec([E^B], sk) 
\end{align}
$$

\noindent
where $D^A$ and $D^B$ are the resulting decryptions of the decryption function $Dec$ based on the secret key of the party $sk$ for \textit{Configuration-A} and \textit{Configuration-B}, respectively. 

To prove the correctness of these two off-chain summation operations, two zero-knowledge proofs must be generated as follows: 

$$
\begin{align}
\pi^A = ZkpGen([& x^A\_{sum} = x^A\_{sum} + x^{{peer}^A}\_{sum}], \nonumber \\
& [r^A, r^{{peer}^A}, r^{{new}^A}], \nonumber \\
& [c^A, c^{{peer}^A}, c^{{new}^A}]) \\
\pi^B = ZkpGen([& x^B\_{sum} = x^B\_{sum} + x^{{peer}^B}\_{sum}], \nonumber \\
& [r^B, r^{{peer}^B}, r^{{new}^B}], \nonumber \\
& [c^B, c^{{peer}^B}, c^{{new}^B}])
\end{align}
$$

\noindent
where $\pi^A$ and $\pi^B$ are the resulting zero-knowledge proofs of the proof generation function $ZkpGen$ based on the current salting values of the party and its pairs as $r^A$, $r^B$, $r^{{peer}^A}$ and $r^{{peer}^B}$; and the new salting values of the party after summation $r^{{new}^A}$ and $r^{{new}^B}$; the current commitments of the party and its pairs as $c^A$, $c^B$, $c^{{peer}^A}$ and $c^{{peer}^B}$; and the new commitments of the party $c^{{new}^A}$ and $c^{{new}^B}$ for \textit{Configuration-A} and \textit{Configuration-B}, respectively.

The resulting proofs are later submitted to the smart contract for verification: 

$$
\begin{align}
[b^A , b^B] = ZkpVfy([& \pi^A, \pi^B, \nonumber \\
& c^A, c^{{peer}^A}, c^{{new}^A}, \nonumber \\
& c^B, c^{{peer}^B}, c^{{new}^B}])
\end{align}
$$

\noindent
where $b^A$ and $b^B$ are the resulting Boolean values as true or false of the proof verification function $ZkpVfy$ based on the proofs $\pi^A$ and $\pi^B$ for \textit{Configuration-A} and \textit{Configuration-B}, respectively. At the end, each party obtains the final result which is $\sum (x) = \sum (x + e) - \sum (e)$.

# Web User Interface

Deploy Contract...   Register...  

<img src="https://github.com/GoshgarIsmayilov/PVSS/blob/master/Auxillary/screenshots/deploy.png" width="45%"/> <img src="https://github.com/GoshgarIsmayilov/PVSS/blob/master/Auxillary/screenshots/register.png" width="45%"/>

Submit Summation...   Verify Summation...  

<img src="https://github.com/GoshgarIsmayilov/PVSS/blob/master/Auxillary/screenshots/submit.png" width="45%"/> <img src="https://github.com/GoshgarIsmayilov/PVSS/blob/master/Auxillary/screenshots/verify.png" width="38%"/>

# Publications to Read

1. Ethers Javascript Library, URL: https://docs.ethers.io/v5/

2. Eccrypto Javascript Library, URL: https://www.npmjs.com/package/eccrypto

3. J. Eberhardt, S. Tai, "Zokrates-scalable privacy-preserving off-chain computations", IEEE International Conference on Internet of Things (iThings) 
and IEEE Green Computing and Communications (GreenCom) and IEEE Cyber, Physical and Social Computing (CPSCom) and IEEE Smart Data (SmartData),
pp. 1084-1091, 2018.

4. Browserify Bundler, URL: https://browserify.org

5. Webpack Bundler, URL: https://webpack.js.org

6. Solidity Language, URL: https://docs.soliditylang.org/en/v0.8.15/

7. Remix Compiler, URL: https://remix.ethereum.org

8. Avalanche Fuji Blockchain Network, URL: https://www.avax.network

9. Geth (Go-Ethereum), URL: https://geth.ethereum.org

# Disclaimer

This software is made available for educational purposes only.
