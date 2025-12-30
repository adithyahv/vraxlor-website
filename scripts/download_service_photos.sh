#!/usr/bin/env bash
set -euo pipefail

ASSETS_DIR="/Users/adithyahv/Desktop/Teksyniq Global interfaces/teksyniq-home/src/assets/services"

curl -L "https://source.unsplash.com/1200x900/?office,team,people&sig=1" -o "$ASSETS_DIR/service_ai_strategy_office.jpg"
curl -L "https://source.unsplash.com/1200x900/?business,meeting,people&sig=2" -o "$ASSETS_DIR/service_custom_ai_office.jpg"
curl -L "https://source.unsplash.com/1200x900/?coworking,people,office&sig=3" -o "$ASSETS_DIR/service_ai_agents_office.jpg"
curl -L "https://source.unsplash.com/1200x900/?developer,office,people&sig=4" -o "$ASSETS_DIR/service_mlops_office.jpg"
curl -L "https://source.unsplash.com/1200x900/?data,analytics,team&sig=5" -o "$ASSETS_DIR/service_data_migration_office.jpg"
curl -L "https://source.unsplash.com/1200x900/?web,design,team,office&sig=6" -o "$ASSETS_DIR/service_web_dev_office.jpg"
curl -L "https://source.unsplash.com/1200x900/?mobile,app,team,office&sig=7" -o "$ASSETS_DIR/service_mobile_dev_office.jpg"
curl -L "https://source.unsplash.com/1200x900/?workspace,collaboration,people&sig=8" -o "$ASSETS_DIR/service_cognitive_systems_office.jpg"
curl -L "https://source.unsplash.com/1200x900/?marketing,team,office&sig=9" -o "$ASSETS_DIR/service_google_ads_office.jpg"

ls -lh "$ASSETS_DIR/service_*_office.jpg"
