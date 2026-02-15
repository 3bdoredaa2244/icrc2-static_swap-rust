# ICRC2 Static Swap (Rust)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Rust](https://img.shields.io/badge/Rust-1.70+-orange)](https://www.rust-lang.org/)
[![DFX Version](https://img.shields.io/badge/DFX-0.29.1-brightgreen)](https://internetcomputer.org/docs/current/developer-docs/developer-tools/cli/)

A **Rust-based ICRC-2 token swap system** on the **Internet Computer (IC)**.
This project implements **two token canisters (`tokenA` and `tokenB`)** and provides a **basic swap mechanism** with a static exchange rate.

---

## Features

* Fully **ICRC-2 compliant token canisters** written in Rust.
* Static swap between `tokenA` and `tokenB`.
* Candid interface for easy integration and testing.
* Local development ready using **DFX** and **Rust**.
* Easy to extend for liquidity pools, price oracles, or dynamic swaps.

---

## Canisters

| Canister | Initial Supply | Description           |
| -------- | -------------- | --------------------- |
| `tokenA` | 1,000,000      | First token for swap  |
| `tokenB` | 500,000        | Second token for swap |

### API Methods

#### tokenA

| Method          | Type   | Arguments                       | Returns |
| --------------- | ------ | ------------------------------- | ------- |
| `balance_of`    | query  | `principal`                     | `nat`   |
| `transfer`      | update | `principal`, `nat`              | `bool`  |
| `approve`       | update | `principal`, `nat`              | `bool`  |
| `transfer_from` | update | `principal`, `principal`, `nat` | `bool`  |

#### tokenB

| Method          | Type   | Arguments                       | Returns |
| --------------- | ------ | ------------------------------- | ------- |
| `balance_of`    | query  | `principal`                     | `nat`   |
| `transfer`      | update | `principal`, `nat`              | `bool`  |
| `approve`       | update | `principal`, `nat`              | `bool`  |
| `transfer_from` | update | `principal`, `principal`, `nat` | `bool`  |

---

## Requirements

* Rust 1.70+
* [DFX CLI 0.29.1+](https://internetcomputer.org/docs/current/developer-docs/developer-tools/cli/)
* Linux / macOS / Windows Subsystem for Linux (WSL) recommended

---

## Setup and Deployment

1. **Clone the repository**

```bash
git clone git@github.com:3bdoredaa2244/icrc2-static_swap-rust.git
cd icrc2-static-swap
```

2. **Start a local IC network**

```bash
dfx start --clean --background
```

3. **Create or select an identity**

```bash
dfx identity new dev     # If you don't have one
dfx identity use dev
```

4. **Deploy `tokenA` and `tokenB` canisters**

```bash
dfx deploy tokenA --argument '(1000000)'
dfx deploy tokenB --argument '(500000)'
```

5. **Check balances**

```bash
dfx canister call tokenA balance_of '(principal "<your-principal>")'
dfx canister call tokenB balance_of '(principal "<your-principal>")'
```

---

## Usage

* Interact with the canisters via **Candid UI**:

```bash
dfx canister id tokenA
dfx canister id tokenB
```

* Swap tokens by calling the transfer or approval methods in your Rust frontend or through `dfx canister call`.

---

## Contributing

Contributions, issues, and feature requests are welcome!
Please ensure code is formatted using:

```bash
cargo fmt
cargo clippy
```

---

## License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## Roadmap / Future Improvements

* Add **dynamic swap rates** between `tokenA` and `tokenB`.
* Implement **liquidity pools** with multi-token support.
* Integrate with **front-end dashboard** for visual tracking.
* Add **unit and integration tests** for canisters.
Done 
