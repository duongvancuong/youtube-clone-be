# youtube-clone-be
Bootcamp project - clone youtube for practice purpose

# Setup project
```bash

# copy file env
$ cp config/database.sample.json config/database.json
$ cp .env.sample .env

# sync node module
$ yarn

# start dev server
$ yarn dev

# migrate & generate database
$ yarn sql

# seed data
$ sequelize db:seed:all
```
