# Typesense Demo

#### __A Simple React Demo using Typesense-Search-Database__

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

- Install dependencies

```sh
npm install
```
