#!/usr/bin/env python3
"""Convert black-background logo JPEGs to transparent PNGs via edge flood-fill."""

from __future__ import annotations

import os
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "images"

# Map source filenames (in Cursor assets or project) to public paths
BLACK_BG = {
    "PNG-01-7e1e5f4e-7ab5-40c2-9d70-5b950d5e844c.png": PUBLIC / "way-less-sad" / "the-show.png",
    "PNG-02-8db3edea-2238-4a10-975b-81fcfb2e5501.png": PUBLIC / "way-less-sad" / "the-podcast.png",
    "Transparent-01-d7107354-7658-4172-b4b5-304e4bd58685.png": PUBLIC / "the-joystick" / "logo.png",
    "Transparent-01-bc90b30d-811a-4efc-9543-ff05d2537f95.png": PUBLIC / "brand" / "icon.png",
}

NAVY_BG = {
    "Transparent-01-2a3b86c2-5d45-4acd-9d7f-58d8a809c2fe.png": PUBLIC / "way-less-sad" / "stacked.png",
}


def flood_fill_transparent(src: Path, dest: Path, fuzz: int = 28, bg_rgb: tuple[int, int, int] | None = None) -> None:
    img = Image.open(src).convert("RGBA")
    w, h = img.size
    pixels = img.load()

    if bg_rgb is None:
        corners = [pixels[0, 0], pixels[w - 1, 0], pixels[0, h - 1], pixels[w - 1, h - 1]]
        bg_rgb = tuple(sum(c[i] for c in corners) // 4 for i in range(3))

    visited = [[False] * w for _ in range(h)]
    stack = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]

    def is_bg(r: int, g: int, b: int) -> bool:
        if bg_rgb == (0, 0, 0):
            return r < fuzz and g < fuzz and b < fuzz
        return (
            abs(r - bg_rgb[0]) <= fuzz
            and abs(g - bg_rgb[1]) <= fuzz
            and abs(b - bg_rgb[2]) <= fuzz
        )

    while stack:
        x, y = stack.pop()
        if x < 0 or y < 0 or x >= w or y >= h or visited[y][x]:
            continue
        r, g, b, _ = pixels[x, y]
        if not is_bg(r, g, b):
            continue
        visited[y][x] = True
        pixels[x, y] = (r, g, b, 0)
        stack.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])

    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, "PNG")
    print(f"Wrote {dest.relative_to(ROOT)}")


def main() -> None:
    assets = Path.home() / ".cursor/projects/Users-matthewshill-Desktop-Projects-two-brothers-presents/assets"
    for name, dest in BLACK_BG.items():
        src = assets / name
        if not src.exists():
            raise FileNotFoundError(f"Missing source: {src}")
        flood_fill_transparent(src, dest, bg_rgb=(0, 0, 0))

    for name, dest in NAVY_BG.items():
        src = assets / name
        if not src.exists():
            raise FileNotFoundError(f"Missing source: {src}")
        flood_fill_transparent(src, dest)


if __name__ == "__main__":
    main()
