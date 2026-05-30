---
title: "Brazilian E-Commerce SQL Analysis"
slug: "olist-ecommerce"
icon: "🛒"
tech: "PostgreSQL · SQL Analytics"
techColor: "green"
summary: "SQL analysis of 99,441 Brazilian e-commerce orders across 9 relational tables — uncovering revenue drivers, delivery performance, seller rankings, and regional logistics gaps."
tools: ["PostgreSQL", "SQL", "CTEs", "Window Functions", "JOINs", "Aggregations"]
metrics: ["99.4K Orders", "R$1.26M Top Category", "80% Early Deliveries", "1.73/5 Late Delivery Score"]
github: "https://github.com/xantoshpun/olist-ecommerce-sql-analysis"
live: ""
order: 3
---

## Overview

SQL analysis of the [Olist Brazilian E-Commerce dataset](https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce) — 99,441 orders spanning September 2016 to August 2018, stored across 9 relational tables covering orders, customers, sellers, products, payments, and reviews.

The dataset was chosen specifically because its multi-table schema mirrors real business data architecture, requiring JOINs, CTEs, and window functions to answer meaningful business questions.

## Business Questions

| # | Question |
|---|----------|
| Q1 | Which product categories generate the most revenue? |
| Q2 | How does delivery performance affect customer satisfaction? |
| Q3 | Who are the top-performing sellers and what sets them apart? |
| Q4 | What are the monthly order and revenue trends? |
| Q5 | Which states have the highest customer spend and worst delivery delays? |

## Q1 — Revenue by Category

- **health_beauty** is the top revenue category — **R$1.26M** across 8,836 orders
- **watches_gifts** ranks 2nd despite fewer orders — highest avg item price at **R$201** with only 8.3% freight-to-revenue ratio (small, high-value = efficient to ship)
- **furniture_decor** carries the heaviest freight burden at **23.7% of revenue** — a margin risk for operations

## Q2 — Delivery Performance vs Customer Satisfaction

- Orders delivered **7+ days late** → avg review score of **1.73 / 5**
- Orders delivered **5+ days early** → avg review score of **4.31 / 5**
- **80% of delivered orders arrived early** — Olist sets conservative estimates to manage expectations
- Late delivery is the single strongest predictor of negative reviews in the dataset

## Q3 — Top Seller Performance

- **#1 seller** (Guariba, SP) — **R$229,472** revenue across 1,132 orders, avg **R$198.51/order**, 4.12 review score
- **#2 seller** (Lauro de Freitas, BA) — only 358 orders but avg **R$543.36/order** — premium product strategy outperforming high-volume sellers on revenue per order
- **São Paulo (SP) dominates** the top 20 sellers — geographic concentration of the strongest merchants

## Q4 — Monthly Order & Revenue Trends

- Platform grew from **2 orders in Sep 2016** to a peak of **7,421 orders in Nov 2017** — a Black Friday spike of **+63.2% MoM**
- Cumulative revenue crossed **R$13.5M** by Aug 2018
- Revenue dipped in early 2018 despite stable order volumes — avg order value declined, suggesting a shift toward lower-value product mix

## Q5 — State Performance

- **São Paulo (SP)** — **R$5.09M revenue**, 40,494 orders; nearly 3× the second-largest state (RJ at R$1.77M)
- **Alagoas (AL)** — worst delivery performance: **24.1% late delivery rate**, avg **24.5 days** to deliver vs SP's 8.7-day average
- Northeast states (AL, MA, CE) consistently show higher delays and lower review scores — last-mile logistics gaps

## SQL Skills Used

| Skill | Applied In |
|-------|-----------|
| `INNER JOIN` / `LEFT JOIN` | All queries |
| `GROUP BY` + `SUM`, `AVG`, `COUNT` | All queries |
| `CTE` (`WITH` clause) | Q2, Q3, Q4, Q5 |
| `CASE WHEN` | Q2 |
| `RANK()` window function | Q3, Q5 |
| `LAG()` window function | Q4 — MoM growth |
| `SUM() OVER()` running total | Q4 — cumulative revenue |
| `EXTRACT(EPOCH FROM ...)` | Q2, Q5 — delivery duration |
| `COUNT FILTER (WHERE ...)` | Q5 — late delivery rate |
