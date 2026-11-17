---
title: "Differential Drive Robot"
year: "2026"
rank: 2.2
subtitle: "WATonomous — Mapping & Autonomous Navigation"
image: "/images/differential-drive-robot.png"
github: "https://github.com/AkshayG99/Differential-drive-robot"
timeline: "2026"
tools: "ROS 2 Humble, C++, Gazebo, Foxglove, Docker"
overview: "Contributed map-memory tuning to a team-built differential-drive robot that navigates to clicked goals in simulation, combining LiDAR costmaps, persistent mapping, A* planning, and pure pursuit control."
---

### The Problem

A robot needs a consistent view of obstacles as it moves. Local laser scans must be combined into a world map without introducing misleading observations during fast turns, while remaining responsive enough to support navigation.

### The Project

Our team built a **ROS 2 navigation stack** for a differential-drive robot in Gazebo. Clicking a goal in Foxglove sends the robot through an arena of walls, boxes, and cylinders, using a pipeline of costmap generation, map memory, path planning, and control.

### My Contribution

I tuned the **map-memory fusion thresholds**: incorporating a new costmap after **1 m of travel**, **0.5 rad of rotation**, or **2 seconds**. I also tuned the yaw-rate cutoff used to skip scans captured while the robot spins quickly. This work focused on when observations should update the persistent map as the robot moves.

I explored an alternative shortest-path approach on the mapping side that was later folded back into the main stack.

### How It Works

- **Local costmap:** Ray-traces LiDAR scans to identify free space and obstacles, then inflates obstacles to account for the robot's body and encourage clearance.
- **Map memory:** Fuses local costmaps into a fixed world map using the robot's pose at each scan's timestamp. Unknown observations do not erase known cells.
- **Planning:** Runs an eight-connected **A*** search with obstacle-aware costs and no corner cutting, replanning when a path becomes blocked or expires.
- **Control:** Uses **pure pursuit** with speed-dependent lookahead, slower motion near tight turns and the goal, and spin-in-place behavior for large heading errors.

### Team & Validation

Built with **Yuvraj Randhawa and Gurshaan Dhillon**. Yuvraj implemented the four main nodes, their core libraries, and 35 unit tests. Gurshaan tuned the controller, tested navigation in Gazebo and Foxglove, and recorded the demo. My work focused on map-memory parameters and mapping exploration.
