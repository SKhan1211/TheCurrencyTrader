# TheCurrencyTrader

## Description

TheCurrencyTrader is a web app containing up-to-date market news, current FX prices, an intuitive trade-document system, and many other useful tools a trader may need during their trading session. It can be a great resource to add next to any broker of your choice to help you make well-thought out trading decisions as needed.

## Technologies

**Backend (server side):**
1. Server: Express.js / Node.js
2. Database: PostgreSQL
3. Querying language and routing: GraphQL

**Frontend (client side):**
1. Design: React
2. Local state management: Apollo Client / Provider

**Services:**
1. Swift deployment: Docker
2. Module bundler: Webpack

**Testing:**
1. Jest
2. easygraphql-tester
3. Testing queries: GraphiQL

**Design:**
1. Wireframe design: Adobe Xd
2. HTML5 / CSS3
3. Bootstrap

**Version Control:**
1. Git

**Debuggers:**
1. Chrome Dev Tools, Apollo Client Devtools, React Developer Tools

**Additional Libraries:**
1. bcrypt.js
2. Validator
3. Babel
4. Passport
5. Passport JWT
6. Nodemon
7. Socket.io for websockets
8. body-parser
9. concurrently
10. csurf
11. apollo-cache-persist

**Additional Tools:**
1. Google Fonts
2. Coolors Color Scheme
3. AWS S3


## Design Choices

* The choice of a **PostgreSQL** database over other popular options such as **MongoDB** was made because it allows more flexibility, stability, speed for querying, and relational data. 
* **GraphQL** was chosen for data querying to allow for better scaling and use of more complicated routes.
* **React.js** is used for the frontend due making code reusable and simplifying many things compared to strict JS, and ease of use compared to other view layer libraries.

## Important MVPs

- [ ] User authentication
- [ ] Real-time FX market prices including a live chart
- [ ] Up-to-date market news and analysis
- [ ] Trade documenting system that also supports notes and photos
- [ ] Chat feature to allow easier collaboration on trades