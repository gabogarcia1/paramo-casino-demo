# Paramo Casino Demo E2E testing

## Installation


```sh
git clone https://github.com/gabogarcia1/paramo-casino-demo.git
npm install cypress@10.3.0 --save-dev
npm install

```

## Requirements:
- Node version >= 10.x

## Repo owner
>Gabriel Garcia

## Run tests 

```sh
npm test
```
## Test guide

- Before each: registration
- Feature: add favorite game
- After: Log out

## Improvements to make
- Use API requests to create users, delete them and login
- Use .env or Libraries in azure devops to save credentials in order to not expose sensible data
- Use typeScript in order to use POO and make the code more scalable and reusable.
