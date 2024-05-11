#!/bin/bash

# Prompt user for principal amount, rate of interest, and time period
read -p "Enter principal amount: " principal
read -p "Enter rate of interest (in percentage): " rate
read -p "Enter time period (in years): " time

# Calculate simple interest
interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)

# Display the result
echo "Simple Interest: $interest"
