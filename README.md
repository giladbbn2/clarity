## Clarity - Coding Assessment

# Title
A simple nodejs express (TypeScript) service for managing the employees of a restaurant.

# Description
* The service exposes CRUD operations for employee management as http REST endpoints.
* It does not use an external DB but rather uses a mock in-memory repository.
* The service has three main layers: controllers (express routers), repositories and business logic services.
* The service is designed to be stateless so there could be multiple instances/containers of the same service
* For simple dependency injection I used simple feature flags as part of the application configuration manager

# Singletons as ES modules or classes?
For this assessment I chose the old-fashioned ES modules approach for implementing singletons rather than using classes, because I tried to keep it as simple as possible.
But in hindsight, I would prefer using classes and nestjs - it has better solutions (e.g. DI) and conventions for organisations-wide code bases.

# Tests
* Create unit tests for: controllers and repositories
* Create e2e tests for happy flow
* Loadtest

# Todo
* Move logic from controllers to BL services - should be done in phase 2 when more product requirements shall be discovered (e.g. store employee clock-ins)
* Add a linter
* Testing - running tests locally BEFORE git changes are pushed 
* Monitoring - connect to Prometheus and Grafana and monitor cpu/ram/disk/http reqs
* Logging - connect to a centralized/organisational solution (e.g. new relic)
* Add ENV yamls for different environments (Local, Integration, QA, Staging, Production)
* Estimate min vcpus and ram size for a single instance