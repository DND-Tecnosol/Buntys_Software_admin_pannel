#!/bin/bash
set -e

echo "Deployment started ..."

# Turn ON Maintenance Mode or return true
# if already is in maintenance mode
# (php artisan down) || true

# Pull the latest version of the app
npm install

npm run build

echo "Deployment finished!"
