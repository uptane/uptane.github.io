---
layout: default
css_id: exceptional_operations
---

# Exceptional operations

On this page, we discuss operations that generally are performed only in exceptional cases. As they may have security implications for software updates, these operations should be done with great care.

## Rolling back software

Sometimes it may be necessary to roll back updates.  If an OEM determines that the latest updates are less reliable than previous ones, then the OEM may wish to rollback to a previous update.

By default, Uptane does not allow updates to be rolled back and enforces this action with two mechanisms. First, Uptane rejects any new metadata file with a version number lower than what is contained in the previous metadata file. Second, Uptane will reject any new image associated with a release counter that is lower than the release counter of the previous image in the previous targets metadata file. The first mechanism prevents an attacker from replaying an old metadata file. The second mechanism prevents an attacker who compromises the director repository from being able to choose old versions of images, despite being able to sign new metadata. See Figure 1 for an example.

### TODO
Insert figure except_1_rollback_prev.jpg and caption

There are at least two ways to allow rollbacks, each with different advantages and disadvantages.

In the first option, an OEM MAY choose to never increment the release counters of images (see Figure 2). Uptane will accept any new image associated with a release counter that is equal to the release counter of the previous image in the previous targets metadata file. If release counters are never incremented, then all images would have the same release counters. In this situation, an ECU would accept the installation of any compatible image referred in the new targets metadata (see the Security page on this website).

### TODO
Insert figure except_2_diffimage_samecounterprev.jpg and caption

The advantage to this method is that it is simple. It allows the OEM to easily install interchangeable versions of the same image. In the example in Figure 2, “foo.img” may simply be a version of “bar.img” containing diagnostic functions. Therefore, the OEM may install either “bar.img” or “foo.img’ on the same ECU. The disadvantage of this method is that it allows attackers who compromise the director repository may install obsolete images they can use to execute rollback attacks. Therefore, this method SHOULD NOT be used.

In the second option, an OEM MUST increment the release counter of an image whenever it is critical that an ECU not install images with lower release counters. In the example in Figure 3, if an ECU installs “foo.img,” then it cannot install “bar.img.” This is done to prevent the installation of compatible images with lower release counters that have known security vulnerabilities, rather newer images in which these vulnerabilities have been fixed.

### TODO
Insert figure except_2_diffimage_samecounterprev2.jpg and caption

The advantage to this method is that it prevents rollback attacks in a situation
where attackers compromise only the director repository.  However, there are two disadvantages. First, the release counters for images have to be maintained, even if role B now signs for images previously signed by role A. This is because release counters are always compared to previous targets metadata files. Second, it is more cumbersome to roll back updates, or deliberately cause ECUs to install older images, because offline keys are used to increment the release counters of these older images in the new targets metadata for the image repository. However, this method SHOULD be preferred, because it is more secure. See the Security pages on this website for more techniques that can be used to limit rollback attacks when the director repository is compromised.

### TODO
Insert link to subsection on the Security page dealing with rollback attacks.

## Adding, removing, or replacing ECUs

Sometimes, it may be necessary for a dealership or mechanic to add, update, or remove ECUs on a vehicle. This may be done in order to support custom configurations of vehicles.
In order to support this use case, one way is for a dealership or mechanic to use an out-of-band communications channel (e.g., perhaps a private, authenticated web site) to communicate with an OEM about the hardware updates to the vehicle. The dealership or mechanic would then identify the vehicle using its identifier (e.g., VIN), and tell the OEM about the ECUs added to or removed from the vehicle.

Note also that Uptane does not prescribe a protocol for primaries to discover whether ECUs have been added to, updated on, or removed from a vehicle. This is because it is an orthogonal problem to software update security. The advantage of this approach is that an OEM is free to solve this problem using existing solutions that it may already have in place.

The OEM should then decide how to respond to the new information. The OEM can verify the new information by requiring the vehicle to produce a new vehicle version manifest that corresponds to the new hardware. If this is a rare enough use case, then human intervention MAY always be required in order to update the hardware on a vehicle.

## Adding or removing a supplier

Due to changes in business relationships, an OEM may need to add or remove a tier-1 supplier from its repositories.

To add a tier-1 supplier, OEMs SHOULD use the following steps. First, if the supplier signs its own images, then the OEM SHALL add a delegation to the supplier on the image repository following the steps described on the Normal Operating Procedures page. Second, the supplier SHALL deliver metadata and / or images to the OEM following the procedure shown on the Normal Operating page. Finally, the OEM SHALL add the metadata and images to its repositories, possibly test them, and then release them to the affected vehicle following the steps. All the above should be done using the guidelines on the Normal Operating Procedures page.

### TODO Insert link to relevant subsections on the Normal Operating Procedures page.

To safely remove a tier-1 supplier, the OEM SHOULD use the following steps. First, it SHOULD delete the corresponding delegation from the targets role on the image repository, as well as all metadata and images belonging to that supplier, so that their metadata and images are no longer trusted. Second, it SHOULD also delete information about the supplier from the director repository, such as its images as well as its dependencies and conflicts, so that the director repository no longer chooses these images for installation. In order to continue to update vehicles with ECUs originally maintained by this supplier, the OEM SHOULD replace this supplier with another delegation, either maintained by itself or another tier-1 supplier.

Tier-1 suppliers are free to manage delegations to members within its own organizations, or tier-2 suppliers (who may delegate, in turn, to tier-3 suppliers), without involving the OEM.


## Key compromise

See [Key Management](key_management.html).
