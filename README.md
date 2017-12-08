# TrustProtocol-Server

This is the server-side code for apps on the TrustToken platform like [Taryn Token](http://taryn.trusttoken.com/). It an express server that uses apollo/graphql to interact with a client.

## Instructions

```
npm install
npm run start
```

### Necessary environment variables

**CLIENT_URL**: Url of the client application, i.e "http://localhost:3000"  
**SENDGRID_API_KEY**: Sendgrid API  
**PROVIDER_URL**: Ethereum provider, i.e "https://mainnet.infura.io:XYZ"  
**CONTRACT_ADDRESS**: Ethereum coin contract address  
**SECRET_KEY**: Secret key of the ethereum address to mint coins from.  
**PORT**: Port for server to run on, i.e "8080"
