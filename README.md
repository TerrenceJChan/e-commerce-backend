# E-Commerce Backend
Access and edit the backend database of an e-commerce store!
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)
## Installation
Walkthrough video can be seen here on [YouTube](https://youtu.be/VqIEhnYPafU). Make sure to have Node.js and MySQL installed for this app to work properly.  
  
Clone over repo from GitHub: https://github.com/TerrenceJChan/e-commerce-backend
  
Open the folder in the terminal, and make sure to install the app's necessary dependencies! To do this, use the command `npm i`  

Create a file in the root directory named `.env`. Fill out your MySQL login credentials in it like the following:

```
DB_USER=root
DB_PW=ASecurePassword
DB_NAME=ecommerce_db
```

A schema and seeds file is provided. To set up the schema, use the MySQL CLI to give the command `source db/schema.sql`. `npm run seed` will populate the database with a sample selection of products and data.
## Usage
In the terminal, enter `node server.js` in the main directory to start the server.  

Once the server is up, the different JSONs will be routed to the following by default:
```
http://localhost:3001/api/tags/
http://localhost:3001/api/products/
http://localhost:3001/api/categories/
```
Apps such as Insomnia may prove helpful in providing a clean interface to create new products, update existing ones, or to delete them.

## Contributing
This project's pull requests are currently not being monitored!
## License
©Terrence Chan 2021. This project is published under the ISC license.
## Questions
For questions, contact me at developer@terrencejchan.com.  
To view other projects by me, visit my [GitHub account](https://github.com/TerrenceJChan).
