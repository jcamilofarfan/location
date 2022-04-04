# Location API
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. Api documentation is generated using [Swagger](https://swagger.io/). The Location API with CR actions is implemented using [TypeORM](https://typeorm.io/). PostgreSQL database is used as a database.

## Deploy with Docker y Docker Compose

  intall [Docker](https://www.docker.com/get-started/) y
  [Docker Compose](https://docs.docker.com/compose/install/)
  ```bash
  $ git clone https://github.com/jcamilofarfan/location.git

  $ cd location

  $ npm install

  $ docker-compose up -d

  $ npm run migrations:run
  ```

  ## Get into
  - [Documentation](localhost:8080/api)

  - [Parent Location](localhost:8080/parent)

  - [Child Location](localhost:8080/child)



## Test

```bash
# e2e tests
$ npm run test:e2e
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
