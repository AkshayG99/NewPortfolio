---
title: "HRT Macroplace Challenge"
year: "2026"
rank: 2
subtitle: "Top 100 Globally in VLSI Placement"
image: "/images/hrt.jpeg"
github: "https://github.com/AkshayG99/GraphPlace"
timeline: "2026"
tools: "Python, TensorFlow, C++, GNN, RL, Docker"
overview: "Top 100 globally in the Hudson River Trading (HRT) x Partcl Macroplacement challenge, beating Simulated Annealing by 23.7% average proxy cost."
features:
  - title: "GNN + RL Pipeline"
    description: "Built a pipeline for VLSI macro placement on 200,000+ node circuits, encoding netlist data as heterogeneous tripartite graphs."
    icon: "code"
  - title: "AutoDMP Integration"
    description: "Integrated AutoDMP on NVIDIA DREAMPlace as a post-processing legalization engine to resolve macro overlaps."
    icon: "cloud"
  - title: "Optimized Compute"
    description: "Eliminated O(N²) compute by vectorizing HPWL on tensor cores and offloading spatial queries to KNN routines."
    icon: "terminal"
---

<!-- The features grid is rendered dynamically here from frontmatter -->

### The Problem

Imagine you are a chip architect designing the next generation of processors. You have a microscopic canvas and millions of tiny logical blocks (macros) that need to be placed perfectly. If they are placed too far apart, the chip runs slowly and overheats; if they overlap, the chip shorts out. You only have a few days to find the mathematically perfect arrangement among trillions of possibilities, and traditional algorithms are taking weeks just to run a single simulation.

### Overview & Impact

We achieved a **Top 100 global ranking** in the Hudson River Trading (HRT) x Partcl Macroplacement challenge. By developing a novel approach to VLSI macro placement, our solution beat the industry-standard Simulated Annealing algorithm by **23.7% in average proxy cost** across all 17 IBM benchmarks, including a peak performance improvement of **+26.5% on ibm02**.

### Technical Architecture

Our solution leveraged advanced deep learning and hardware acceleration to solve an NP-hard placement problem:
- **GNN + RL Pipeline:** We built a combined Graph Neural Network (GNN) and Reinforcement Learning (RL) pipeline designed for VLSI macro placement on massive circuits with over 200,000 nodes.
- **Graph Encoding:** We encoded the netlist data as heterogeneous tripartite graphs consisting of macros, nets, and ports, and introduced KNN spatial edges to enable congestion-aware reasoning by the model.
- **Legalization Engine:** We integrated AutoDMP directly on NVIDIA DREAMPlace as a post-processing legalization engine, which effectively resolved any macro overlaps produced by the RL agent.
- **Compute Optimization:** We successfully eliminated O(N²) computational bottlenecks by vectorizing Half-Perimeter Wirelength (HPWL) calculations on tensor cores and offloading complex spatial queries to highly optimized KNN routines.

### Challenges

Integrating a custom RL environment with a C++ backend like DREAMPlace was incredibly difficult due to memory management and segmentation faults across language bindings. Additionally, processing 200,000+ node circuits initially caused severe O(N²) computational bottlenecks during reward calculation. 

### Next Steps

Future iterations could explore replacing the GNN with a Transformer-based architecture to better capture long-range dependencies across massive chip layouts.
