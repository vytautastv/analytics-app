#!/bin/bash

# Exit on error
set -e

echo "🚀 Setting up development environment..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cp .env.example .env
    echo "Please update the .env file with your configuration"
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Setup database
echo "Setting up database..."
npm run setup-db

# Seed database with sample data
echo "Seeding database..."
npm run seed

echo "✅ Development environment setup complete!"
echo "Run 'npm run dev' to start the development server"
