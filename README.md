# Confeti

Confeti enables simple & seamless crypto trades for all. Built for tomorrow’s digital economy.

## How it works

Confeti is powered by 1inch, Cruvegrid and Flow. 1inch Fusion+ handles cross-chain swaps, abstracting the complexity away from the user. It’s also used to index the supported tokens.

Cruvegrid BaaS indexes the user's cross-chain swap history without requiring custom code in our backend.

Embedded wallets make the experience seamless—no private keys to manage or lose. The frontend is built with Next.js, TypeScript, Tailwind, and Ethers.js. The live version is deployed on Vercel.

## How to test it

The [deployment in Vercel](https://eth-taipei-confetti.vercel.app/) is pre-loaded and funded with accounts to avoid having to log-in.

Trades are performed using 1inch Fusion+. Fusion+ executes a cross-chain [dutch auction](https://en.wikipedia.org/wiki/Dutch_auction) that takes aprozimately 3 minutes. Please hold tight to get confeti after the trade clears! Details for the trade may take a little longer to show up in the list. A real on-chain swap is performed in the pre-loaded accounts.

### Pre-loaded account details details:
- Arbitrum: [0xdd640cFF4733C51eBc77E174259e4FFa18b4729C](https://arbiscan.io/address/0xdd640cFF4733C51eBc77E174259e4FFa18b4729C)
- Optimism: [0xdd640cFF4733C51eBc77E174259e4FFa18b4729C](https://optimistic.etherscan.io/address/0xdd640cFF4733C51eBc77E174259e4FFa18b4729C)
- Flow: 
