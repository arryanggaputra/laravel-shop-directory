# Modern Monolith Shop Directory

This **Shop Directory** project was built for the purpose of testing the modern monolith architecture that is quite popular today, the stacks used for this project are Laravel, InertiaJS, ReactJS, TypeScript, and TailwindCSS.

This project attempts to provide an example of how to use the very popular front end technology ReactJS+TypeScript in a Laravel project. Without reducing favorite features in ReactJS such as SPA, Code Splitting, and so on.

## Usage

Run `make` or `make setup` in `console` to installing `composer` dependencies and `node` dependencies.

Feel free to change database `username`, and `password` inside `docker-compose.yml` and don't forget to update your .env file inside `src` folder

## Design

![alt text](./design/ShopDirectory.png "Shop Directory")

## Commands

| commands                            | description                                                      |
| ----------------------------------- | ---------------------------------------------------------------- |
| `make` or `make setup`              | to install `composer` and `node` dependencies for the first time |
| `docker-compose up -d --build site` | to start development server of this project                      |
| `docker-compose run --rm artisan`   | run `artisan` command inside container command                   |
| `docker-compose run --rm yarn`      | run `yarn` command inside container                              |
| `docker-compose run --rm npm`       | run `npm` command inside container                               |
| `docker-compose run --rm php`       | run `php` command inside container                               |

## Todos

#### Front End

- [x] Support InertiaJS with React TypeScript
- [x] React TypeScript Code Splitting
- [ ] Remove unused Tailwind class
- [ ] Pagination

#### Back End

- [ ] Adding phone number in tenants table
- [ ] Shared data type between TypeScript and PHP
- [ ] Pagination Support
- [ ] Filter Support
- [ ] Deploy to Vercel

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
