Steps for runing the Project:
    1. Download the Project and opne it in a editer like VSCode.
    2. Run command ->   npm i   <- for install node modules,
    3. Run command ->   npx sequelize db:create   <- for create database,
    4. Run command ->   npx sequelize db:migrate   <- for migrate database,
    5. Run command ->   npx sequelize db:seed:all   <- for create seed in database,

Seeders:
    in seeder I created two Agents (1 is Admin, and 2 is Regular).
        Admin Agent:
            email: adminAgent@gmail.com
            password: 123456
        Regular Agent:
            email: regularAgent@gmail.com
            password: 123456

    And created two Users:
        1. whose Agent is Agent 1 (Admin).
        2. whose Agent is Agnet 2 (Regular).

Apis:
    1. Post:   http://localhost:8000/auth/login
    2. Get:    http://localhost:8000/agents
    3. Get:    http://localhost:8000/users
    4. Post:   http://localhost:8000/booking
    5. Delete: http://localhost:8000/booking/id    
    6. Get:    http://localhost:8000/scheduler/date

Importent Note:
    for run apis first login is required.
    when you login with a agent email, password you will get a token 
    when you run other apis you will provide it in header otherwise you got and error "Token not Provided"
