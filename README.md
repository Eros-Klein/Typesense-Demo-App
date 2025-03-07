# Typesense Demo

- __A Simple React Demo using Typesense-Search-Database__

## Requirements

- Node.js
- Docker

## Setup

- Setup a Typesense-Search-Database via Docker

```sh
docker run -p 8108:8108 \
            -v"$(pwd)"/typesense-data:/data typesense/typesense:27.1 \
            --data-dir /data \
            --api-key=your-api-key \
            --enable-cors
```

- Update values of .env.template and save it to .env (Update api_key to the one you provided in the docker run script above)

- Install dependencies

```sh
npm install
```

- Run via npm start or dev for development

```sh
npm run dev
```
