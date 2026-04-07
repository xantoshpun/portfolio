---
title: "Adventure Works — Bike Shop Analysis"
slug: "adventure-works"
icon: "🚲"
tech: "Power BI · Business Intelligence"
techColor: "purple"
summary: "Multi-page interactive Power BI dashboard analysing sales performance, product trends, and customer insights for Adventure Works Bike Shop."
tools: ["Power BI", "DAX", "Data Modelling", "What-if Params", "Slicers"]
metrics: ["$24.9M Revenue", "$10.5M Profit", "25.16K Orders", "2.17% Return Rate"]
github: ""
live: ""
order: 2
---

## Overview

An interactive multi-page Power BI dashboard for Adventure Works Bike Shop, analysing sales performance, product trends, and customer behaviour across multiple dimensions and geographies.

## Objective

Answer key business questions: What are overall revenue, profit, orders, and return rates? How has revenue trended over time? Which products and regions perform best? Who are the top customers?

## Dashboard Pages Built

- **Main Dashboard** — high-level KPIs, revenue trend chart, top products with custom tooltip on bar chart
- **Map View** — geographic breakdown of orders and revenue by region
- **Product Detail** — drill-down into individual product performance with What-if revenue forecasting
- **Customer Detail** — customer segmentation, top customers by revenue and order volume

## Technical Implementation

- Imported Adventure Works dataset and built a star-schema relational data model
- Created DAX calculated fields and measures for all KPIs
- Implemented What-if parameters for interactive revenue forecasting scenarios
- Added slicers and cross-page filters for dynamic exploration

## Key Findings

- Total revenue reached **$24.9M** with **$10.5M** in profit
- **25,160 orders** placed with a healthy **2.17%** return rate
- Mountain bikes drive the highest revenue segment
- Strong performance concentrated in North America and Europe

## Business Recommendations

- Focus inventory investment on the top-performing mountain bike category
- Investigate return rate drivers in underperforming regions
- Leverage top customer insights to design loyalty and upsell programmes
