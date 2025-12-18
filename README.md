🚧 TRADESIM (Under Construction)
📈 TRADESIM — A Distributed Trading Exchange Simulator

TRADESIM is a distributed, event-driven trading exchange platform that simulates the core infrastructure of a real stock exchange, including an exchange-grade matching engine, a broker layer, real-time market data streaming, risk management, and trade settlement.

The project is designed to demonstrate how modern financial exchanges work internally, focusing on price discovery, correctness, scalability, and observability, rather than just building a UI trading app.

Think: Mini-NSE Matching Engine + Zerodha-style Broker + Kafka-powered Market Data

🎯 Project Goals

Simulate real-world exchange internals

Implement price–time priority order matching

Build event-driven market infrastructure

Ensure financial correctness via double-entry accounting

Showcase cloud-native, observable backend systems

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

🧩 Core Components (Planned & In Progress)
1️⃣ Exchange Core (Matching Engine)

Status: 🚧 In Progress

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

Atomic double-entry accounting

Immutable trade records

Simulated T+1 settlement

Auditable financial history

Tech

PostgreSQL

Transactional guarantees

5️⃣ Observability & Reliability

Status: 🚧 Planned

Structured logging

Latency & throughput metrics

Dead-letter queues

Circuit breakers

Tech

Prometheus

Grafana

OpenTelemetry

🔑 Key Concepts Implemented / To Be Implemented

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

GCP (Cloud Run / PubSub)

GitHub Actions (CI/CD)

Streaming & Messaging

Apache Kafka

Kafka Streams

tradesim/
├── exchange-core/ # Matching engine
├── broker-service/ # Broker APIs & risk checks
├── market-data/ # Kafka streams & WebSockets
├── ledger-service/ # Double-entry accounting
├── infra/ # Docker, CI/CD, cloud configs
└── docs/ # Architecture & design docs
