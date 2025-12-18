.

🚧 TRADESIM: A Distributed Trading Exchange Simulator

📈 TRADESIM is a distributed, event-driven trading exchange platform that simulates the core infrastructure of a real stock exchange, including:

An exchange-grade matching engine

A broker layer

Real-time market data streaming

Risk management

Trade settlement

The project focuses on how modern financial exchanges work internally, emphasizing price discovery, correctness, scalability, and observability, rather than just building a UI trading app.

Think:
Mini-NSE Matching Engine + Zerodha-style Broker + Kafka-powered Market Data

🎯 Project Goals

Simulate real-world exchange internals

Implement price–time priority order matching

Build event-driven market infrastructure

Ensure financial correctness via double-entry accounting

Showcase cloud-native, observable backend systems

🏗️ High-Level Architecture
Client / Trader
│
▼
Broker API (Node.js / Spring Boot)
│
▼
Risk & Validation Layer
│
▼
Exchange Core (Matching Engine)
│
├── Trades → Kafka → Market Data
└── Trades → Ledger & Settlement

🧩 Core Components
1️⃣ Exchange Core (Matching Engine)

Status: 🚧 In Progress

Features

In-memory order book

Price–time priority matching

Limit & market orders

Partial fills

Deterministic trade execution

Tech

Java / Go

Multithreading

Zero external database dependency

2️⃣ Broker Service

Status: 🚧 Planned

Features

User account management

Balance & position tracking

Pre-trade risk validation

Order routing to exchange core

Tech

Node.js / Spring Boot

REST APIs

Redis (fast risk checks)

3️⃣ Market Data Engine

Status: 🚧 Planned

Features

Real-time trade ticks

Best bid / ask

Order book depth snapshots

Replayable market streams

Tech

Apache Kafka

Kafka Streams

WebSockets

4️⃣ Ledger & Settlement Service

Status: 🚧 Planned

Features

Atomic double-entry accounting

Immutable trade records

Simulated T+1 settlement

Auditable financial history

Tech

PostgreSQL

Transactional guarantees

5️⃣ Observability & Reliability

Status: 🚧 Planned

Features

Structured logging

Latency & throughput metrics

Dead-letter queues

Circuit breakers

Tech

Prometheus

Grafana

OpenTelemetry

🔑 Key Concepts (Implemented / Planned)

Price discovery via order flow

Market liquidity & depth

Event-driven consistency

Idempotent order processing

Backpressure handling

Failure isolation

🛠️ Technology Stack
Backend & Systems

Java / Go

Node.js

Spring Boot

Kafka

Redis

PostgreSQL

Cloud & DevOps

Docker

AWS (ECS / Fargate)

GCP (Cloud Run / Pub/Sub)

GitHub Actions (CI/CD)

Streaming & Messaging

Apache Kafka

Kafka Streams

📁 Project Structure
tradesim/
├── exchange-core/ # Matching engine
├── broker-service/ # Broker APIs & risk checks
├── market-data/ # Kafka streams & WebSockets
├── ledger-service/ # Double-entry accounting
├── infra/ # Docker, CI/CD, cloud configs
└── docs/ # Architecture & design docs

🛣️ Roadmap

Core matching engine

Broker APIs

Kafka-based order flow

Market data streaming

Settlement & ledger

Observability & metrics

Stress testing

📌 Why TRADESIM?

Most trading projects simulate placing orders.
TRADESIM simulates how markets actually work.

Price is not set — it is discovered.

⚠️ Project Status

🚧 Under active development
Architecture, APIs, and internals may evolve as the project matures.

📄 License

MIT (Planned)
