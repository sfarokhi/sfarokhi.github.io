---
layout: page
title: KubeFlex
description: A carbon-aware Kubernetes scheduler that optimizes workload placement based on renewable energy availability, featuring live migration capabilities.
img: # add image path if available
importance: 1
category: research
github: https://github.com/sfarokhi/KubeFlex
pdf: /assets/pdf/KubeFlex__A_Carbon_Aware_Scheduler_with_Live_Migration.pdf
---

KubeFlex is a carbon-aware Kubernetes scheduler designed to optimize workload placement based on renewable energy availability. The system features live migration capabilities, allowing workloads to be dynamically moved to nodes powered by renewable energy sources when available.

## Key Features

- **Carbon-Aware Scheduling**: Intelligently places workloads on nodes with access to renewable energy
- **Live Migration**: Seamlessly migrates running containers without downtime
- **Energy Optimization**: Reduces carbon footprint by prioritizing green energy sources
- **Kubernetes Integration**: Built as a custom scheduler for Kubernetes clusters

## Impact

This project addresses the growing need for sustainable computing by enabling cloud infrastructure to automatically optimize for carbon emissions. By aligning workload placement with renewable energy availability, KubeFlex helps organizations reduce their environmental impact while maintaining system performance.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <a href="{{ page.pdf }}" target="_blank" class="btn btn-primary">View PDF</a>
        <a href="{{ page.github }}" target="_blank" class="btn btn-secondary">GitHub Repository</a>
    </div>
</div>

