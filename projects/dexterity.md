---
title: "Dexterity"
year: "2026"
rank: 2.1
subtitle: "WATonomous — Humanoid Manipulation & Imitation Learning"
image: "/images/dexterity.png"
github: "https://github.com/AkshayG99/Dexterity"
timeline: "2026 — Present"
tools: "Python, MuJoCo, Pioneer Humanoid, Leader-Arm Teleoperation"
overview: "Developed a block-to-bowl manipulation task for the WATonomous Pioneer humanoid, with randomized resets and physics-based success checks to support demonstration collection for imitation learning."
---

### The Problem

Teaching a robot to manipulate objects starts with a repeatable task and a reliable way to tell whether it succeeded. A block hovering over a bowl or still held by the gripper should not count as a completed placement.

### The Task

Dexterity extends the [WATonomous Pioneer humanoid](https://github.com/WATonomous/pioneer_humanoid) simulation with a **block-to-bowl pick-and-place scene**. The left arm must grasp a red cube, lift it from the table, and release it into a blue bowl. The scene uses the existing lightbox workcell and retains the team's robot assets, teleoperation tools, and learning infrastructure.

### My Contribution

- Created the task-specific MuJoCo scene, including a movable **4 cm, 50 g cube** and a bowl with a solid floor and segmented collision walls.
- Added randomized resets that restore the cube upright, clear its velocity, and independently vary its starting X/Y position within **±2 cm**.
- Implemented placement checks using all eight rotated cube corners, bowl-floor contact, and rejection of any remaining robot contact.
- Required the cube to settle for **0.3 seconds**, below linear and angular velocity thresholds, before reporting success. Removing or disturbing it clears that success state.
- Added an interactive preview with live task status and regression checks for resets, bounds, contact, and settling behavior.

### Demonstration Workflow

The task integrates with the team's existing **leader-arm teleoperation and recording workflow**. An operator can approach, grasp, carry, release, and withdraw, then manually save or discard each take. Randomized starting positions are intended to provide varied demonstrations for imitation learning.

### Next Steps

Validate reachability and grasp quality with a calibrated leader arm, inspect a pilot dataset, and collect successful demonstrations before training and evaluating a policy.
