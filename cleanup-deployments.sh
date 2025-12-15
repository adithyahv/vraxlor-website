#!/bin/bash
# Script to delete old Vercel deployments
# Keeps only the latest deployment: teksyniq-home-9v23z2sj4

echo "Deleting old Vercel deployments..."
echo "Keeping: teksyniq-home-9v23z2sj4 (latest)"
echo ""

# Array of deployment URLs to delete
deployments=(
  "teksyniq-home-mrn1uejb4-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-pr0pmiueh-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-1d3pzaq37-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-8n28pz76p-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-ej3syx5ta-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-m264pwfu3-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-aje6xq4fa-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-f14xzoi4h-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-os3t2l0cq-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-lhc0df9l6-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-9ir6s3ff5-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-oxxnysvdg-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-6gfugd36y-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-12jj6i40k-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-6unpfp744-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-k2hdpgtgd-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-afut5x23n-adis-projects-db5d10d6.vercel.app"
  "teksyniq-home-hhhuf94n7-adis-projects-db5d10d6.vercel.app"
)

count=0
total=${#deployments[@]}

for deployment in "${deployments[@]}"; do
  ((count++))
  echo "[$count/$total] Deleting: $deployment"
  vercel rm "$deployment" --yes
  sleep 1  # Small delay to avoid rate limiting
done

echo ""
echo "✅ Cleanup complete!"
echo "Deleted $total old deployments."
echo "Kept: teksyniq-home-9v23z2sj4 (latest production)"
