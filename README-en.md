# EpiVet – Color Reference

This file contains the colors used in earlier versions of EpiVetWeb.

Not all of these colors need to be used in the new version. The purpose of this file is to preserve the old color palette as a reference and help maintain a consistent visual style.

---

## Main dark background colors
| Name | Hex | Usage |
|---|---|---|
| Background | #10120e | Main background in the later version |
| Old Background | #14170f | Main background in an earlier version |
| Deep Background | #0d100b | Very dark background / footer / header |
| Surface | #1f241c | Cards, panels and form fields |
| Dark Green | #343d2a | Panels, hover states and sections |

---

## Green / Olive palette
| Name | Hex |
|---|---|
| Green Dark | #343d2a |
| Green | #414834 |
| Olive | #676c4b |
| Sage | #a3ac85 |
| Sage Light | #c2c5aa |

These colors were used as the main green color family in EpiVet.

---

## Brown / Earth palette
| Name | Hex |
|---|---|
| Brown Dark | #572e0e |
| Brown | #7e4f23 |
| Brown Light | #926639 |
| Camel | #a68a64 |
| Sand | #b6ad90 |

---

## Neutral colors
| Name | Hex |
|---|---|
| White | #ffffff |
| Off White | #f5f3eb |
| Old Off White | #f4f2e9 |
| Dark Gray | #4c4c4c |
| Dark Gray Hover | #595959 |

---

# Appointment service colors
Different appointment service types used their own colors in the calendar.

## Surgery
Normal:
#40597a

Hover:
#4d6a91

---

## Reception
Normal:
#46583f

Hover:
#53694a

---

## Dental
Normal:
#6e5436

Hover:
#806240

---

## Vaccination
Normal:
#5c4b70

Hover:
#6a5681

---

## Laboratory
Normal:
#386766

Hover:
#427978

---

## Control
Normal:
#5d603e

Hover:
#6c7047

---

## Other
Normal:
#4c4c4c

Hover:
#595959

---

# Warning and error colors
These colors were used for warnings and appointments outside normal opening hours.

## Warning text
#e1aaa5

## Closed time text
#d09892

## Closed slot text
#bd827d

## Closed day text
#d79a94

---

# Transparent colors

## Standard border
rgba(194, 197, 170, 0.18)
Based on the Sage Light color.

---

## Stronger white borders
rgba(255, 255, 255, 0.12)
rgba(255, 255, 255, 0.14)
rgba(255, 255, 255, 0.25)
rgba(255, 255, 255, 0.26)

---

## White text variations
rgba(255, 255, 255, 0.84)

---

## Closed-time and warning backgrounds
rgba(135, 47, 47, 0.08)
rgba(135, 47, 47, 0.15)
rgba(135, 47, 47, 0.17)
rgba(135, 47, 47, 0.22)
rgba(135, 47, 47, 0.25)

---

## Warning borders
rgba(190, 100, 100, 0.13)
rgba(190, 100, 100, 0.30)

---

## Past days
rgba(140, 140, 140, 0.10)

Text:
rgba(245, 243, 235, 0.55)
rgba(194, 197, 170, 0.45)

---

## Today highlight
rgba(103, 108, 75, 0.07)
rgba(103, 108, 75, 0.12)

---

## Dark overlays and shadows
Header:
rgba(13, 16, 11, 0.97)

Modal backdrop:
rgba(5, 6, 4, 0.78)

Shadows:
rgba(0, 0, 0, 0.20)
rgba(0, 0, 0, 0.45)

---

# Original CSS color palette

The original main palette of the old website was:

    :root {
        --bg: #14170f;
        --bg-deep: #0d100b;

        --green-dark: #343d2a;
        --green: #414834;
        --olive: #676c4b;

        --sage: #a3ac85;
        --sage-light: #c2c5aa;

        --brown-dark: #572e0e;
        --brown: #7e4f23;
        --brown-light: #926639;

        --camel: #a68a64;
        --sand: #b6ad90;

        --white: #ffffff;
        --off-white: #f4f2e9;

        --border: rgba(194, 197, 170, 0.18);
    }

A later version used, among others:
    --bg: #10120e;
    --surface: #1f241c;

    --green-dark: #343d2a;
    --green: #414834;
    --olive: #676c4b;

    --sage: #a3ac85;
    --sage-light: #c2c5aa;

    --brown-dark: #572e0e;
    --brown: #7e4f23;
    --brown-light: #926639;

    --camel: #a68a64;
    --sand: #b6ad90;

    --white: #ffffff;
    --off-white: #f5f3eb;

---

# Current approved palette

Only the colors that are selected for the final EpiVetWeb version should eventually be moved into this section.

The goal is to avoid using too many nearly identical colors in the final user interface.