# Camera & Rover Movement System

## What Changed

### 1. **Scene Centered at Origin**
- **Asteroid** is now at `(0, 0, 0)` - matches collision mesh
- **Rover** starts at `(0, 10, 0)` - high above center
- **Scale** set to 1:1 for asteroid (no offset confusion)

### 2. **Follow Camera System**
- Camera automatically follows rover from behind
- Distance: `2.5` units behind
- Height: `1.2` units above rover
- Always looks at rover using `look-at` component

### 3. **Tank Controls**
- **Forward/Backward**: Move in rover's facing direction
- **Left/Right**: Rotate rover in place
- Speed: `0.15` units/move, `8°` rotation/input

### 4. **Auto-Snap on Load**
- Rover automatically drops to asteroid surface when game starts
- Camera positions itself behind rover
- Green sphere marker shows rover position (for debugging)

### 5. **Collision System**
- Raycast from Y=50 downward (100 units range)
- Finds asteroid surface anywhere in scene
- Hovers rover 0.08 units above surface
- Console logs show hit detection

## How It Works

```
User Input (D-pad) 
    ↓
moveRover() in React
    ↓
move_rover_on_asteroid() in Rust/WASM
    ↓
Raycast to find surface
    ↓
Return new position + rotation
    ↓
Update rover entity
    ↓
Update camera to follow
```

## Expected Behavior

1. **On Game Start:**
   - You see the asteroid centered
   - Green sphere (rover marker) drops to surface
   - Camera positions behind rover
   
2. **When Moving:**
   - Forward/Back: Rover moves along surface
   - Left/Right: Rover rotates in place
   - Camera smoothly follows from behind
   - Console shows position logs

3. **Lighting:**
   - Ambient + directional lights
   - Colored point lights (cyan, purple) for atmosphere
   - Stars visible in far background

## Debug Info

**Console Messages:**
- `✅ WASM initialized`
- `📦 Loading collision mesh: [bytes]`
- `✅ Collision mesh loaded!`
- `✅ Rover snapped to asteroid surface at [x, y, z]`
- `✅ Hit! Rover at (x, y, z)` (on each move)

**Visual Markers:**
- Green sphere = rover position (always visible)
- Rover model underneath (may load slower)

## Troubleshooting

**Can't see rover?**
- Look for green sphere marker
- Check console for position coordinates
- Camera might need adjustment

**Rover not moving?**
- Check console for "⚠️ Raycast missed"
- Collision mesh might not be loaded
- Position might be outside mesh bounds

**Camera not following?**
- `look-at` component should auto-register
- Check browser console for errors
