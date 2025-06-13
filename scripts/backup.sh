#!/bin/bash

# Exit on error
set -e

# Create backup directory if it doesn't exist
BACKUP_DIR="./backups"
mkdir -p $BACKUP_DIR

# Generate timestamp
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Create backup filename
BACKUP_FILE="$BACKUP_DIR/backup_$TIMESTAMP.sql"

echo "📦 Starting database backup..."

# Perform backup using docker-compose
docker-compose exec -T db pg_dump -U $POSTGRES_USER $POSTGRES_DATABASE > $BACKUP_FILE

# Compress backup
gzip $BACKUP_FILE

echo "✅ Backup completed: ${BACKUP_FILE}.gz"

# Clean up old backups (keep last 5)
echo "Cleaning up old backups..."
ls -t $BACKUP_DIR/backup_*.sql.gz | tail -n +6 | xargs -r rm

echo "Backup process complete!"
