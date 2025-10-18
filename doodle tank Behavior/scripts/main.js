import { world, system } from "@minecraft/server";

system.runInterval(() => {
  for (const entity of world.getAllEntities()) {
    if (!entity.typeId.startsWith("dt:")) continue; // Only your custom entities

    const health = entity.getComponent("minecraft:health");
    if (!health) continue;

    const percent = health.currentValue / health.defaultValue;

    // Clamp percent to [0,1] and select discrete health index:
    // index 0 -> 100%, 1 -> 75%, 2 -> 25%, 3 -> 0%
    const clamped = Math.max(0, Math.min(1, percent));
    let index;
    if (clamped >= 1.0) index = 0; // 100%
    else if (clamped >= 0.75) index = 1; // 75%
    else if (clamped >= 0.25) index = 2; // 25%
    else index = 3; // 0%

    // Send to MoLang
    entity.setProperty("dt:health_index", index);
  }
}, 10); // Every 0.5s (20 ticks = 1s)
