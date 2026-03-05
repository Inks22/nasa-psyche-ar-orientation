# Simplified Control System - Rotating Asteroid Approach

## What Changed

We switched from a complex "moving rover with follow camera" system to a much simpler **"stationary rover with rotating asteroid"** approach.

### Old Approach (Complex)
- Rover moved around asteroid surface
- Camera followed rover from behind
- Required collision detection and raycasting
- Controls were in world space
- Camera could get lost

### New Approach (Simple)
- **Rover stays stationary** in front of camera
- **Asteroid rotates** around its center
- No collision detection needed (for now)
- Controls rotate the asteroid
- Camera stays fixed

## How It Works

```
User presses D-pad button
    ↓
moveRover() function called
    ↓
Rotates asteroid-container
    ↓
Gives illusion rover is moving on surface
```

## Scene Setup

### Camera
- **Position**: `(0, 0, 3.5)` - fixed, looking at scene
- **Controls**: Disabled (no look-controls or WASD)

### Asteroid Container
- **Position**: `(-2, -2.3, 2.5)` - original good position
- **Rotation**: `(0, 25, 0)` - starting angle
- **Scale**: `2.5x` on the model inside

### Rover
- **Position**: `(-0.5, 0, 0.8)` - stationary in front of camera
- **Scale**: `0.2x`
- **Never moves** - illusion of movement comes from asteroid rotation

## Controls

| Button | Action | Rotation |
|--------|--------|----------|
| **⬆️ Forward** | Asteroid rotates down | X rotation +3° |
| **⬇️ Backward** | Asteroid rotates up | X rotation -3° |
| **⬅️ Left** | Asteroid rotates right | Y rotation +3° |
| **➡️ Right** | Asteroid rotates left | Y rotation -3° |

**Why opposite?** Rotating asteroid right makes rover appear to turn left (like spinning a globe).

## Advantages

1. **Simpler Code**: No complex camera following math
2. **Better Performance**: No collision calculations per frame
3. **No Camera Issues**: Camera never gets lost or stuck
4. **Mobile-Friendly**: Simpler rendering, fewer calculations
5. **Easier to Debug**: Everything stays in view
6. **AR-Ready**: Can easily add AR later with same approach

## Future Enhancements

When we add collision back:
1. Use Rust collision to limit rotation angles
2. Prevent asteroid from rotating through "invalid" positions
3. Add surface alignment for realism
4. Keep the simple rotation approach but validate against collision mesh

## Testing

**Expected behavior:**
1. Click "Launch Mission"
2. See asteroid and rover centered
3. D-pad rotates the asteroid
4. Rover stays in view
5. Scene never disappears

**Controls feel natural:**
- Forward = asteroid tilts down (driving forward)
- Backward = asteroid tilts up (reversing)
- Left/Right = asteroid spins (turning)
