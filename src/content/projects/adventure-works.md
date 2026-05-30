---
title: "Adventure Works — Bike Shop Analysis"
slug: "adventure-works"
icon: "🚲"
tech: "Power BI · Business Intelligence"
techColor: "purple"
summary: "Multi-page interactive Power BI dashboard analysing sales performance, product trends, and customer insights for Adventure Works Bike Shop."
tools: ["Power BI", "DAX", "Data Modelling", "What-if Params", "Slicers"]
metrics: ["$24.9M Revenue", "$10.5M Profit", "25.16K Orders", "2.17% Return Rate", "17.4K Customers"]
github: "https://github.com/xantoshpun/adventure-works-bike-shop"
live: ""
order: 2
---

## Overview

Interactive multi-page Power BI dashboard for Adventure Works Bike Shop — analysing $24.9M in revenue, 25K+ orders, and 17,416 customers across North America, Europe, and Pacific from January 2020 to May 2022.

## Objective

Answer key business questions: What are overall revenue, profit, orders, and return rates? How has revenue trended over time? Which products and categories drive the most orders? Who are the top customers and where are they?

## Dashboard Pages

- **Main Dashboard** — KPI cards with MoM comparison, revenue trend line chart (2020–2022), orders-by-category bar chart, top 10 products table with return rate highlighting
- **Map View** — bubble map across 6 countries with region slicers (Europe / North America / Pacific)
- **Product Detail** — gauge visuals for monthly targets, profit trend chart, **What-if price adjustment** parameter for revenue forecasting
- **Customer Detail** — donut charts by income level and occupation, top 100 customers table, revenue-per-customer trend, year slicer

## Technical Implementation

- Built star-schema data model: Sales fact table + Products, Customers, Calendar, Geography, Categories dimension tables
- Created DAX measures for all KPIs: Total Revenue, Profit, Orders, Return Rate, MoM % change, Avg Revenue per Customer
- Implemented What-if parameter — price adjustment slider drives real-time adjusted profit forecast on Product Detail page
- Applied cross-page slicers, custom bar chart tooltip, and consistent dark theme with container formatting

## Key Findings

- Revenue grew consistently 2020 → 2022; latest month **$1.83M** (+3.31% MoM)
- **Accessories lead by volume** — 16,983 orders vs Bikes 13,929 and Clothing 6,976; accessories drive repeat purchases
- **Bikes lead by value** — higher unit price makes bikes the primary revenue driver despite fewer orders
- **Top product: Water Bottle - 30 oz.** — 3,983 orders, $39,755 revenue, 1.95% return rate
- **Most returned sub-category: Shorts** — worth investigating sizing or quality
- **Geographic concentration** — US is largest market; UK, Australia, Canada, France, Germany also strong
- **Top customer: Mr. Maurice Shan** — $12,408 from 6 orders ($2,068 avg order value)
- **Average-income professionals** are the largest customer segment by order volume

## Business Recommendations

- Cross-sell accessories at the point of bike purchase — accessories drive repeat volume, bundles drive per-order value
- Investigate Shorts return rate — reduce returns with better sizing guides or quality review
- Develop a loyalty programme targeting high-value customers (Mr. Maurice Shan tier)
- Use What-if price modelling to test 5–10% price increase on top-margin products before committing
- Expand marketing focus in UK and Australia — strong existing base with growth potential
