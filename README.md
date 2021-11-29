## Getting Started

To run this project:

1)Clone this repo: gh repo clone https://github.com/OganesK/test_case_hasura

2)cd test_case_hasura  - to change working dorectory
3)yarn - to install required dependencies \n
    3.1)(if "command not found: yarn" - npm i -global yarn)
4)yarn dev - run test case


## Config variables

You can specify your config vars in /src/config.ts

API_URL - graphQL endpoint of your Hasura API
DATA_URL - URL of JSON data file
HASURA_ADMIN_SECRET - secret key to your Hasura API
