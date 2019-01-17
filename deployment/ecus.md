---
layout: default
css_id: ecus
---

# Preparing an ECU for Uptane

At the highest level, the basic requirement for an ECU to be capable of supporting Uptane is that it must be able to perform either full or partial verification, and be able to verify time attestation messages from the time server. 

For partial verification, it will need:

* A way to store and sign metadata with a signing key. This key is individual to the ECU.
* A way to store and use a public key to verify signatures.

For full verification, it will need:

* A way to 