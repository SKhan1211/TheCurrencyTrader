### Apr 26, 2020 - Separate Test Environment Database and A Note on Schemas

* I realized that while I had a development database created and a production development database in mind, I didn't think about a separate testing database and wrote all of my tests on the development database. Investing the time to create a new testing database and refactoring the testing codes to focus on that database will be time well spent so there are separation of concerns and test entries aren't interfering with development code
* After concluding more research on system design of chat applications, I know I will need additional tables to create the live chat feature. I will likely populate my database with a number of the most recent messages, similar to websites like Slack, and then continually update those last few entries. This table will keep track of the users who wrote the messages, times, what their message was, etc.
* Direct messaging will likely involve a messages table that keeps track of a message body and to and from users. This table can be iterated to show the most x recent number of messages between the users
* Additionally, I should look further into how to stop malicious messages whether that involves validations on messages or whatever

### Apr 27, 2020 - Introducing ORM and type-checking

* I made the decision to include TypeORM to map my chats table and any additional functions as objects because dealing with object/entry relationships might make it easier to understand for other developers
* Additionally, now that I have gained experience writing SQL based API endpoints via PostgreSQL and while I do have experience with Mongoose, practicing an ORM library for PostgreSQL will help diversify my skillset
* I have also decided to use TypeScript due to it's effectiveness in reducing bugs and time spent debugging. I will admit I was a little hesitant at first, but it's popularity swayed me and I now realize how vital it's type-checking rules can play a role in ensuring less time spent debugging previous code and more time spent on rolling out production updates
* The cost of picking up TypeScript syntax and adding in variable input types is justified by the means
