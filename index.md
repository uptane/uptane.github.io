![Uptane logo](logo.png)

# Description

Uptane is the first compromise-resilient software update security system for the automotive industry.

Unlike other software update security systems (e.g., SSL / TLS, or signing updates with a single offline GPG / RSA key), it addresses a comprehensive threat model.
It is designed to make it extremely difficult for attackers to be able to install malware on all vehicles maintained by a manufacturer, even if attackers have compromised some keys used to sign updates.

At the same time, Uptane has been designed to be extremely flexible, so as to accommodate a wide variety of deployment scenarios, and allows on-demand customization of updates installed on vehicles.

Uptane is already being adopted by several tier-1 suppliers.
It was designed in collaboration with major vehicle manufacturers and suppliers responsible for 78% of vehicles on U.S. roads, as well as government regulators.
It was developed by the New York University Tandon School of Engineering (NYU), the University of Michigan Transportation Research Institute (UMTRI), and the Southwest Research Institute (SWRI).

# Open call for security review

We invite all security researchers and academics to perform a security review of Uptane.

We want to hear from you about ways that you could exploit Uptane.
For instance, you may find a way that an attacker could replay old images to ECUs because the message signature doesn't cover the right content.
You can help to fix security issues before hackers use them to exploit millions of cars!

Please send us your questions, comments, and findings to the [public mailing list](https://groups.google.com/forum/#!forum/uptane-discussion).

We are also interested in hearing about security problems in our Reference Implementation.
While we do not expect cars to use this code directly, errors in this software may be duplicated by production implementations.
Please report these using our GitHub issue tracker.

# News

* June 13 2017: [ATS is integrating the Uptane security framework for over-the-air software updates to connected vehicles](https://advancedtelematic.com/en/press-releases/ats-is-integrating-the-uptane-security-framework-for-over-the-air-software-updates-to-connected-vehicles.html)
* October 17 2017: [Popular Science selects Uptane as one of the top security innovations of 2017](https://www.popsci.com/top-security-innovations-2017#page-2)

# Press

* [Forbes](http://www.forbes.com/sites/leemathews/2017/01/19/uptane-will-protect-your-connected-car-from-hackers/#6203ff834b25)
* [NPR](http://www.wbur.org/hereandnow/2017/03/17/researchers-software-car-hacking)
* [The Christian Science Monitor](http://www.csmonitor.com/World/Passcode/2017/0118/Are-software-updates-key-to-stopping-criminal-car-hacks)
* [Business Insider](http://www.businessinsider.com/driverless-cars-hacking-ricks-2016-12)
* [Yahoo!](https://www.yahoo.com/tech/call-issued-white-hat-hackers-flaws-automotive-software-050100383.html)
* [Reuters](https://www.facebook.com/Reuters/videos/1364617036891982/)
* [More...](https://ssl.engineering.nyu.edu/press)

# Academic publications

* Uptane: Securing Software Updates for Automobiles ([PDF](https://isis.poly.edu/~jcappos/papers/kuppusamy_escar_16.pdf) / [Video](https://www.youtube.com/watch?v=nDghHNxRGHA) / [Slides](https://docs.google.com/presentation/d/17bl_-y3U78xbhaTbsZDu_Uv0zI9UAKZ8v78dj55yC3k/edit?usp=sharing)). Published in the proceedings of the 14th escar europe (2016).

# Technical documents and source code

* [Design Overview](https://docs.google.com/document/d/1pBK--40BCg_ofww4GES0weYFB6tZRedAjUy6PJ4Rgzk/edit?usp=sharing)
* [Implementation Specification](https://docs.google.com/document/d/1wjg3hl0iDLNh7jIRaHl3IXhwm0ssOtDje5NemyTBcaw/edit?usp=sharing)
* [Deployment Considerations](https://docs.google.com/document/d/17wOs-T7mugwte5_Dt-KLGMsp-3_yAARejpFmrAMefSE/edit?usp=sharing)
* [Reference Implementation and Demonstration Code](https://github.com/uptane/uptane)

# Slides from last workshop

* [SOTA #5: Design Overview](https://docs.google.com/presentation/d/1R3jSDcqbqUIwJgbOLOKwHReoy2wnj8GrXlKCdcLNXAA/edit?usp=sharing)
* [SOTA #5: Implementation Specification](https://docs.google.com/presentation/d/1ugct4oARxdzd-PRHi6KdGnllqYxy1jJDDd4w9Pdaq-g/edit?usp=sharing)
* [SOTA #5: Deployment Considerations](https://docs.google.com/presentation/d/1luFNyWGxwzWBNThg5ziKWrHUmH_Cqr9Pb9EfO3t0Clo/edit?usp=sharing)

# Participation

* Send questions or requests to uptane@googlegroups.com
* [Private discussion forum for OEMs and suppliers (by invitation only)](https://groups.google.com/forum/#!forum/uptane-forum)
* Pull Requests to the [repository for the reference implementation and demo code](https://github.com/uptane/uptane) are appreciated.

# Acknowledgments and disclaimers

Uptane is supported by U.S. Department of Homeland Security grants D15PC00239 and D15PC00302. The views and conclusions contained herein are the authors’ and should not be interpreted as necessarily representing the official policies or endorsements, either expressed or implied, of the U.S. Department of Homeland Security (DHS) or the U.S. government.
