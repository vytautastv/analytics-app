#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Build and start containers
echo "Building and starting Docker containers..."
docker-compose up -d --build

# Wait for database to be ready
echo "Waiting for database to be ready..."
sleep 10

# Run database migrations
echo "Running database migrations..."
docker-compose exec app npm run setup-db

# Seed database if needed
if [ "$1" = "--seed" ]; then
    echo "Seeding database..."
    docker-compose exec app npm run seed
fi

echo "✅ Deployment complete!"
echo "Application is running at http://localhost:3000"
