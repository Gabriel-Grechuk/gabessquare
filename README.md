# Gabe's Square

My personal blog!

## Run the app

### Dev

#### Requirements

- `mise`

#### Running

You can run locally by:

1. Create and edit the `.env` file:

```bash
cp .env.example .env && vim .env
```

2. Install the runner and tools

```bash
mise install
```

3. Install the packages:

```bash
bun install
```

4. Now you can run the app:

```bash
bun start:dev
```

### Docker compose

#### Requirements

- `docker`
- `docker compose`

#### Running

1. Create and edit the `.env` file:

```bash
cp .env.example .env && vim .env
```

2. You can now run the Docker Compose:

```bash
docker compose up -d --build
```
