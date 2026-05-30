---
title: "Bank Customer Churn Analysis"
slug: "bank-churn"
icon: "🏦"
tech: "Python · Machine Learning"
techColor: "cyan"
summary: "End-to-end Python analysis identifying key factors driving customer churn — from data cleaning through EDA to actionable business recommendations."
tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"]
metrics: ["20.37% Overall Churn", "32.4% Germany Churn", "56.2% Age 51-60 Churn", "26.9% Inactive Member Churn"]
github: "https://github.com/xantoshpun/Bank-Customer-Churn-Analysis-"
live: ""
order: 1
---

## Overview

End-to-end Python analysis identifying the key drivers of customer churn for a bank with 10,000 customers across France, Germany, and Spain. Covers the full data science workflow — raw data ingestion, cleaning, EDA, and actionable business recommendations.

**Dataset:** 10,002 rows × 14 columns → cleaned to **10,000 rows × 11 features**  
**Target variable:** `Exited` (1 = churned, 0 = retained)

## Objective

Identify the key factors driving customer churn and deliver data-backed recommendations to reduce attrition and improve retention strategy.

## Phase 1 — Data Understanding & Preparation

- **Initial Exploration** — loaded dataset, checked dimensions, reviewed data types and column structure
- **Quality Assessment** — found 2 duplicate rows, 4 columns with 1 missing value each, Age stored as float
- **Cleaning** — removed duplicates and 3 irrelevant columns (RowNumber, CustomerId, Surname); filled missing values with mode/median; corrected data types
- **Output** — clean dataset: 10,000 rows × 11 columns, zero missing values, CreditScore range 350–850 valid ✅

## Phase 2 — Exploratory Data Analysis (EDA)

**Univariate Analysis**
- France: 50.14% of customers · Germany: 25.09% · Spain: 24.77%
- Age distribution: 31–40 is largest group (44.5%); 51–60 is smallest active segment (8.0%)
- **36.16% of customers have zero balance**
- Overall churn rate: **20.37%** (2,037 of 10,000 customers)

**Bivariate Analysis — Churn by Geography**

| Country | Customers | Churn Rate |
|---------|-----------|------------|
| France | 5,014 | 16.15% |
| Germany | 2,509 | **32.44%** |
| Spain | 2,477 | 16.67% |

Germany churns at double the rate of France and Spain despite fewer customers.

**Bivariate Analysis — Churn by Age Group**

| Age Group | Churn Rate |
|-----------|------------|
| 18–30 | 7.52% |
| 31–40 | 12.08% |
| 41–50 | 33.97% |
| 51–60 | **56.21%** |
| 60+ | 24.78% |

**Bivariate Analysis — Other Features**
- Female churn: **25.1%** vs male: **16.5%** — 8.6pp gap
- Inactive members churn at **26.9%** vs active members — engagement directly reduces attrition
- 1-product customers: 50.84% of base, highest churn; 2-product: lowest churn; 3–4 products: disproportionately high churn despite only 3.26% of base
- Churned customers average age **44.84** vs 37.41 retained — age is the strongest predictor
- CreditScore difference: only 6.5 points between churned and retained — weak predictor

**Correlation Analysis**
- Age: strongest positive correlation with churn
- IsActiveMember: negative correlation — inactive = higher churn
- CreditScore & EstimatedSalary: minimal correlation with churn

## Key Findings

- **Germany is a critical risk market** — 32.44% churn vs ~16% in France and Spain
- **Middle-to-older customers (41–60) are the highest risk** — 51–60 age band peaks at 56.21%
- **Female customers churn at 25.1%** vs 16.5% for males — 8.6 percentage point gap
- **Inactive members churn at 26.9%** — engagement directly reduces attrition
- **Customers with 3–4 products have extremely high churn** despite being a small segment (3.26%)
- **CreditScore is a weak predictor** — only 6.5 point difference between churned and retained

## Business Recommendations

- Targeted retention campaigns in Germany with localised, personalised offers
- Age-segmented loyalty programmes for customers aged 41–60
- Re-engagement campaigns for inactive members (26.9% churn risk)
- Gender-specific engagement strategies for female customers
- Cross-sell products to single-product customers to increase stickiness
- Review product bundling strategy — 3–4 product customers show disproportionate churn
