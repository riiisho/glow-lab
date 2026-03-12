# OLEDLab

A browser-based toolkit for OLED display testing and diagnostics, built with ASP.NET Core 10 MVC.

## Tools

### Burn In
Fills the screen with a uniform grey level controlled by a slider (0–255). Useful for testing uniformity and identifying early burn-in at various brightness levels.

### Dead Pixel
Fills the screen with a solid colour — white, red, green, blue, or black — to make stuck or dead pixels immediately visible against a uniform background.

### Screensaver
An animated black hole simulation running entirely on an HTML5 canvas. Particle systems render the accretion disk, photon ring, infalling matter, and relativistic jets against a field of twinkling stars. All pixels outside the simulation are pure black, keeping OLED panels dark.

## Interface

- **ESC** — toggle the nav and interface hints on/off (desktop)
- **Two-finger tap** — toggle the interface on touch devices
- The nav and controls hide completely so nothing obscures the test screen

## Stack

- ASP.NET Core 10 MVC (.NET 10)
- Razor views
- Vanilla CSS & JS — no frontend framework

## Running Locally

```bash
dotnet watch --project Web/Web.csproj
```

Requires the [.NET 10 SDK](https://dotnet.microsoft.com/download).

