## Loom Recorded Video:


https://www.loom.com/share/21c9fa55adb144b1bd41c9b3178a6b28?sid=9acf3b0e-c626-4e1d-a2ab-9a86256a1a93


## Installation Steps

```

Frontend:

npm install
npm start

Project can be accessible at http://localhost:3000

```

```

Backend:

gradle build
java -jar build/libs/Uniblox-0.0.1-SNAPSHOT.jar

Alternatively, start the server using the RUN action in IntelliJ IDEA.

Project can be accessible at http://localhost:8080/

```

## Objective

```

Clients can add items to their cart and checkout to successfully place an order.
Every nth order gets a coupon code for 10% discount and can apply to their cart.

https://github.com/neustackapp/assignment/blob/main/README.md

```

## Note

```

I designed the application to allow users to receive a 10% discount on every nth order,
with the restriction that the coupon code cannot be reused.

```

## Backend Deployment Steps

```

docker login
docker build --platform linux/amd64 -t uniblox .  
docker tag uniblox saiashish99/uniblox:latest
docker push saiashish99/uniblox:latest

Update the tag on Render whenever a new Docker container is uploaded with a new tag.

```

## Render Deployment Document Reference:

```
https://hostingtutorials.dev/blog/free-spring-boot-host-with-render
```

## Frontend Deployment Steps

```
Merge your code into the master branch. Vercel will deploy the build automatically via CI/CD.
```


## Backend H2 Database Access

<img width="1440" alt="Screenshot 2024-08-14 at 4 22 02 AM" src="https://github.com/user-attachments/assets/d2ad2f03-e233-45b2-907f-5e50ab754b11">

```

Visit http://localhost:8080/h2-console to access the database using the following credentials:

- URL: jdbc:h2:mem:unibloxDB
- Username: sai
- Password: (Leave this field blank)

```

## Frontend IndexedDB Access

<img width="1440" alt="Screenshot 2024-08-14 at 4 13 56 AM" src="https://github.com/user-attachments/assets/b0ec487c-6afe-4a6d-8d29-305be664c2a3">


```

Navigate to the Application tab using Chrome Developer Tools.

```

## Enzyme Unit Tests

<img width="1440" alt="Screenshot 2024-08-14 at 4 15 49 AM" src="https://github.com/user-attachments/assets/794dd178-b653-44c5-a9c7-1583a473dfa4">

## Mockito Unit Tests

<img width="1440" alt="Screenshot 2024-08-14 at 12 48 11 AM" src="https://github.com/user-attachments/assets/5b185cfb-4997-46c1-99c0-131bd545839c">

## Added Appropriate Comments

<img width="1440" alt="Screenshot 2024-08-14 at 4 17 01 AM" src="https://github.com/user-attachments/assets/9e0a5e65-5f66-403a-90a1-4c6fe39cf78f">

<img width="1440" alt="Screenshot 2024-08-14 at 4 29 41 AM" src="https://github.com/user-attachments/assets/ff492d9b-c50d-40f4-9136-45b44ed35306">


## Frontend Project Link:

https://unibloxbysai.vercel.app/

## Frontend Github Link:

https://github.com/SaiAshish9/Uniblox

## Backend Project Link:
https://uniblox.onrender.com/

## Backend Github Link:
https://github.com/SaiAshish9/Uniblox_Backend

## Hosted Docker Containers Link:
https://hub.docker.com/r/saiashish99/uniblox/tags

## Notion API Contracts:
https://weak-bunny-372.notion.site/Uniblox-Ecommerce-API-Contracts-8c95bc5aa9064b729aa6cd2e07dffb94



## Swagger Documentation:
https://uniblox.onrender.com/

