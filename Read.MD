npm init -y

npm install express pg sequelize dotenv

npm intall sequelize-cli --save-dev

npx install sequelize-cli --save-dev

npx install nodemon --save-dev



#Step untuk membuat API#

API
Jalankan init terlebih dahulu

npm init - y

Lalu instalasi package yang di perlukan

a. Dependencies

npm install express pg sequelize dotenv
b. devDependencies

npm install nodemon sequelize-cli --save-dev
Buat file app.js , .gitignore, dan .env

Buat folder routes dan controllers

Lalu di package.json tambahkan script start.

Database / Sequelize
Buat init terlebih dahulu

npx sequelize-cli init

Buat database

npx sequelize-cli db:create

Buat model

npx sequelize-cli model:generate --name Users --attributes username:string,email:string,password:string,image:string

npx sequelize-cli model:generate --name Items --attributes name:string,category:string,price:integer,stock:integer,image:string

Migrate

npx sequelize-cli db:migrate

Cek di Dbeaver

Seeding a json
Generate file seeder

npx sequelize-cli seed:generate --name seeder-user

npx sequelize-cli seed:generate --name seeder-item

Untuk menjalankan seeder`

a. Seed All

npx sequelize-cli db:seed:all

b. Seed 1 file

npx sequelize-cli db:seed --seed nama_file.js

c. Undo Seed all

npx sequelize-cli db:seed:undo:all

d. Undo 1 seed

npxquelize-cli db:seed:undo --seed nama_file.js
