---
layout: default
css_id: introduction
---

# Deployment Guidelines

Uptane is a standard, and does not have an official distribution or implementation. We do provide a [reference implementation in Python](https://github.com/uptane/uptane), and there are a number of open source projects such as [aktualizr](https://github.com/advancedtelematic/aktualizr), [rust-tuf](https://github.com/heartsucker/rust-tuf), [Notary](https://github.com/theupdateframework/notary), and [OTA Community Edition](https://github.com/advancedtelematic/ota-community-edition/) implementing all or part of the standard. In addition, commercial Uptane offerings are available in the marketplace from [HERE Technologies](https://www.here.com/products/automotive/ota-technology) and [Airbiquity](https://www.airbiquity.com/product-offerings/software-and-data-management).

However, in any serious Uptane installation, a number of deployment decisions will need to be made, and policies and practices for software signing and key management will need to be implemented. Additionally, some OEMs may wish to develop their own Uptane implementation. Here, we provide a set of guidelines for how to set up, operate, integrate, and adapt Uptane to work in a variety of situations. We also discuss the human operations required, and describe Uptane-compatible ways to implement some specific features that OEMs have requested guidance or clarification on in the past.

All of these guidelines should be viewed as complementary to the official Uptane standard: they should be taken as advice, not gospel.