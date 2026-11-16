---
title: "IBM HR Employee Attrition Analysis"
slug: "hr-attrition"
icon: "👥"
tech: "Excel · Business Analytics"
techColor: "purple"
summary: "Interactive Excel dashboard investigating why employees leave, built with Power Query, a Power Pivot data model, DAX measures, PivotCharts and slicers."
tools: ["Excel", "Power Query", "Power Pivot", "DAX", "PivotCharts", "XLOOKUP", "Slicers"]
metrics: ["16.1% Attrition", "30.5% Overtime Attrition", "29.8% First 2 Years", "39.8% Sales Reps"]
github: "https://github.com/xantoshpun/HR-Employee-Attrition-Excel"
live: ""
order: 4
---

## Dashboard

<img src="/projects/hr-attrition/dashboard-full.png" alt="Employee Attrition Dashboard in Excel: KPI cards, slicers and four charts of attrition rate by department, job role, tenure and overtime" style="width:100%;border-radius:10px;border:1px solid rgba(255,255,255,0.08);margin:1rem 0 2rem;" loading="lazy" />

## Overview

Interactive Excel dashboard analysing attrition across **1,470 employees** in the IBM HR Analytics dataset (a fictional dataset created by IBM data scientists). Every KPI card and chart responds to Department and Gender slicers.

**Dataset:** 1,470 rows × 35 columns, cleaned to 32 columns plus a derived tenure band
**Target variable:** `Attrition` (Yes = employee left)

## Objective

Find which groups of employees are most likely to leave, identify the strongest drivers, and estimate what reducing the biggest driver would be worth.

## Phase 1: Data Cleaning (Power Query)

- Imported the raw CSV and corrected column data types
- Removed 3 constant columns with no analytical value (`EmployeeCount`, `Over18`, `StandardHours`)
- Derived a `Tenure Band` column (0-2, 3-5, 6-10, 10+ years) from `YearsAtCompany`
- Loaded the result to the Excel Data Model

## Phase 2: Data Model & DAX (Power Pivot)

- Measures for **Total Employees**, **Attrited Employees**, **Attrition Rate**, **Avg Tenure of Leavers** and **Overtime Attrition Rate**
- A sort-key column with *Sort by Column* keeps tenure bands in logical order instead of alphabetical
- Helper measures give the bar charts a dynamic scale, so labels never clip when slicers change the data

## Phase 3: Analysis

- PivotTables for attrition rate by department, job role, tenure band and overtime
- **Benchmark check:** `XLOOKUP` against a department benchmark table with conditional formatting (illustrative benchmark values)
- **What-if model:** one input cell for the target overtime attrition rate projects how many leavers would be avoided

## Phase 4: Dashboard

- KPI cards linked live to the data model with `GETPIVOTDATA`, including a dynamic "X of Y employees left" caption
- Four PivotCharts sorted by attrition rate, with Department and Gender slicers connected to every chart and KPI

<img src="/projects/hr-attrition/dashboard-filtered.png" alt="The same dashboard filtered to Research and Development, female employees" style="width:100%;border-radius:10px;border:1px solid rgba(255,255,255,0.08);margin:1rem 0 2rem;" loading="lazy" />

## Key Findings

**Overtime nearly triples attrition**

| Overtime | Employees | Left | Attrition Rate |
|----------|-----------|------|----------------|
| No | 1,054 | 110 | 10.4% |
| Yes | 416 | 127 | **30.5%** |

**New hires are the highest-risk group**

| Tenure | Attrition Rate |
|--------|----------------|
| 0-2 years | **29.8%** |
| 3-5 years | 13.8% |
| 6-10 years | 12.3% |
| 10+ years | 8.1% |

- Overall attrition is **16.1%** (237 of 1,470 employees); leavers had an average of 5.1 years at the company
- **Sales Representatives leave at 39.8%**, more than double the company average; Laboratory Technicians (23.9%) and HR staff (23.1%) follow
- Senior roles are the most stable: Managers 4.9%, Research Directors 2.5%
- By department: Sales 20.6%, Human Resources 19.0%, R&D 13.8%
- **What-if:** cutting overtime attrition from 30.5% to 20% would mean about **44 fewer leavers**, an 18.5% drop in total attrition

## Business Recommendations

- Track and rebalance persistent overtime, and review overtime compensation; it is the single biggest lever in the data
- Strengthen the first two years with structured onboarding, mentoring, and check-ins at 90 days and 1 year
- Review targets, pay structure and the promotion path for Sales Representatives
- Target retention spend by role rather than department: differences within a department are larger than between departments

*These are correlations in a fictional dataset, not proven causes; a real engagement would validate them with exit-interview data.*
