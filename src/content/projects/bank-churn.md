---
title: "Bank Customer Churn Analysis"
slug: "bank-churn"
icon: "🏦"
tech: "Python · Machine Learning"
techColor: "cyan"
summary: "End-to-end Python analysis identifying key factors driving customer churn — from data cleaning through EDA to actionable business recommendations."
tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"]
metrics: ["32.4% Germany churn rate", "25.1% female churn rate"]
github: "https://github.com/xantoshpun/Bank-Customer-Churn-Analysis-"
live: ""
order: 1
---

## Overview

This project analyses customer churn for a bank using Python. Customer churn — the loss of clients — is a critical business problem. The analysis covers the full data science workflow: raw data ingestion, cleaning, EDA, and strategic recommendations.

## Objective

Identify the key factors influencing customer churn and develop insights that help the bank reduce attrition and improve retention strategies.

## Phase 1 — Data Understanding & Preparation

- **Initial Data Exploration** — load dataset, check dimensions, understand column structure and data types
- **Data Quality Assessment** — check for missing values, duplicates, inconsistencies, and validate ranges (Age, CreditScore)
- **Data Cleaning** — handle duplicates & missing values, remove unnecessary columns (RowNumber, CustomerId, Surname), fix data types

## Phase 2 — Exploratory Data Analysis (EDA)

- **Univariate Analysis** — distribution of numerical and categorical variables
- **Bivariate Analysis** — churn rate by each feature, comparative analysis of churned vs retained customers
- **Target Variable Analysis** — overall churn rate calculation and distribution visualisation

## Key Findings

- Germany has the highest churn rate at **32.4%**
- Female customers churn at a higher rate (**25.1%**) than males
- Older customers churn more frequently
- Customers with fewer products are significantly more likely to churn

## Business Recommendations

- Targeted retention campaigns in Germany with personalised offers
- Gender-specific engagement strategies for female customer segments
- Age-segmented loyalty programmes for older demographics
- Cross-sell products to single-product customers to improve stickiness
