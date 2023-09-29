import React from 'react';
import styles from './styles.module.css';

export default function WhatIsUptane() {
    return (
        <div className={[styles.what_is_uptane, styles.section_padding].join(' ')}>
            <div className={styles.what_is_uptane_heading}>
                <h1>Resilient protection against all attackers</h1>
            </div>
            <div className={styles.what_is_uptane_content}>
                <p> Uptane is the first software update security system for the automotive industry capable of resisting even attacks by nation-state level actors. It is designed so that the security of software updates does not degrade all at once, but follows a hierarchy in which different levels of access to vehicles or the automaker’s infrastructure must be gained. By building these levels into the security system, even if an attacker compromises servers, bribes operators, or gains access to vehicular networks, he or she is prevented from causing many types of harm to the vehicle.
                </p>
            </div>
            <div className={styles.what_is_uptane_video}>
                <iframe  src="https://www.youtube.com/embed/KTg7fBWYHms" title="OTAmatic Software and Data Management - Uptane Security Implementation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            </div>
        </div>
    );
}