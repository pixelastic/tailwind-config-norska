# `tailwind-config-norska`

This is the custom Tailwind config used by norska (my personal static website
generator). I chose to expose the full config as its own npm module so I could
more easily plug it into other projects that don't use norska.

## Why a custom config?

I love Tailwind, but the default config wasn't enough for my needs, so I decided
to tweak it until I was comfortable with it. This config suits my way of working
really well, but it might not suits yours.

In any case, this page will document the config so you can have a look at it,
maybe borrow some ideas, and will serve a great reference for myself.

## Generic changes

### Separator

The separator has been changed from `:` to `_` as I'm mostly working with `pug`
templates and `pug` does not allow `:` in class names. That means that you would
write `md_w-3` and not `md:w-3`.

### Spacing

Width, Height, Margin, Padding, Positioning and Borders all use the same scale.
Some values might not make sense in a specific context, but I found that sharing
the same scale would give more flexibility in how I could place things.

### Simpler classes

The `line-height` classes are available through `.lh-XXX` in addition to the
default `.leading-XXX`. The `.bold` and `.strike` classes are also available,
and `.pointer` is equivalent to `.cursor-pointer`.

### PurgeCSS

This config will generate **a lot** of classes. It is expected that `purgeCSS`
will be applied on the resulting HTML+CSS files to remove all unused CSS
classes.

## Theming

The default values of many parts have been updated. The following tables expose
all the updates values. If a specific table is not referenced, it means that the
module is using Tailwind default configuration for it.

### `borderRadius`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 1 | .125rem |
| 2 | .25rem |
| 3 | .5rem |
| 4 | 1rem |
| default | .25rem |
| full | 9999px |

### `borderWidth`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 1 | 1rem |
| 2 | 1.25rem |
| 3 | 1.5rem |
| 4 | 2rem |
| 5 | 2.5rem |
| 6 | 3rem |
| 7 | 4rem |
| 8 | 5rem |
| 9 | 6rem |
| 10 | 8rem |
| 11 | 10rem |
| 12 | 12rem |
| 13 | 14rem |
| 14 | 16rem |
| 15 | 18rem |
| 16 | 20rem |
| 17 | 22rem |
| 18 | 24rem |
| 19 | 26rem |
| 20 | 28rem |
| 001 | 0.0625rem |
| 002 | 0.125rem |
| 01 | 0.25rem |
| 02 | 0.5rem |
| 03 | 0.75rem |
| 04 | 0.875rem |

### `boxShadow`

| Key | Value |
| --- | ----- |
| 0 | none |
| 1 | 0 1px 3px 0 rgba(var(--box-shadow-rgb, 0, 0, 0), 0.1), 0 1px 2px 0 rgba(var(--box-shadow-rgb, 0, 0, 0), 0.06) |
| 2 | 0 4px 6px -1px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.1), 0 2px 4px -1px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.06) |
| 3 | 0 10px 15px -3px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.1), 0 4px 6px -2px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.05) |
| 4 | 0 20px 25px -5px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.1), 0 10px 10px -5px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.04) |
| 5 | 0 25px 50px -12px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.25) |
| 001 | 0 0 0 1px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.05) |
| 01 | 0 1px 2px 0 rgba(var(--box-shadow-rgb, 0, 0, 0), 0.05) |
| inner | inset 0 2px 4px 0 rgba(var(--box-shadow-rgb, 0, 0, 0), 0.06) |
| outline | 0 0 0 3px rgba(66, 153, 225, 0.5) |
| default | 0 1px 3px 0 rgba(var(--box-shadow-rgb, 0, 0, 0), 0.1), 0 1px 2px 0 rgba(var(--box-shadow-rgb, 0, 0, 0), 0.06) |

### `colors`

| Key | Value |
| --- | ----- |
| transparent | transparent |
| black | #000 |
| white | #fff |
| gray | #718096 |
| gray-1 | #f7fafc |
| gray-2 | #edf2f7 |
| gray-3 | #e2e8f0 |
| gray-4 | #cbd5e0 |
| gray-5 | #a0aec0 |
| gray-6 | #718096 |
| gray-7 | #4a5568 |
| gray-8 | #2d3748 |
| gray-9 | #1a202c |
| red | #e53e3e |
| red-1 | #fff5f5 |
| red-2 | #fed7d7 |
| red-3 | #feb2b2 |
| red-4 | #fc8181 |
| red-5 | #f56565 |
| red-6 | #e53e3e |
| red-7 | #c53030 |
| red-8 | #9b2c2c |
| red-9 | #742a2a |
| orange | #dd6b20 |
| orange-1 | #fffaf0 |
| orange-2 | #feebc8 |
| orange-3 | #fbd38d |
| orange-4 | #ffaf00 |
| orange-5 | #ed8936 |
| orange-6 | #dd6b20 |
| orange-7 | #c05621 |
| orange-8 | #9c4221 |
| orange-9 | #7b341e |
| yellow | #d69e2e |
| yellow-1 | #fffff0 |
| yellow-2 | #fefcbf |
| yellow-3 | #faf089 |
| yellow-4 | #f6e05e |
| yellow-5 | #ecc94b |
| yellow-6 | #d69e2e |
| yellow-7 | #b7791f |
| yellow-8 | #975a16 |
| yellow-9 | #744210 |
| green | #38a169 |
| green-1 | #f0fff4 |
| green-2 | #c6f6d5 |
| green-3 | #9ae6b4 |
| green-4 | #68d391 |
| green-5 | #48bb78 |
| green-6 | #38a169 |
| green-7 | #2f855a |
| green-8 | #276749 |
| green-9 | #22543d |
| teal | #319795 |
| teal-1 | #e6fffa |
| teal-2 | #b2f5ea |
| teal-3 | #81e6d9 |
| teal-4 | #4fd1c5 |
| teal-5 | #38b2ac |
| teal-6 | #319795 |
| teal-7 | #2c7a7b |
| teal-8 | #285e61 |
| teal-9 | #234e52 |
| blue | #3182ce |
| blue-1 | #ebf8ff |
| blue-2 | #bee3f8 |
| blue-3 | #90cdf4 |
| blue-4 | #63b3ed |
| blue-5 | #4299e1 |
| blue-6 | #3182ce |
| blue-7 | #2b6cb0 |
| blue-8 | #2c5282 |
| blue-9 | #2a4365 |
| indigo | #5a67d8 |
| indigo-1 | #ebf4ff |
| indigo-2 | #c3dafe |
| indigo-3 | #a3bffa |
| indigo-4 | #7f9cf5 |
| indigo-5 | #667eea |
| indigo-6 | #5a67d8 |
| indigo-7 | #4c51bf |
| indigo-8 | #434190 |
| indigo-9 | #3c366b |
| purple | #805ad5 |
| purple-1 | #faf5ff |
| purple-2 | #e9d8fd |
| purple-3 | #d6bcfa |
| purple-4 | #b794f4 |
| purple-5 | #9f7aea |
| purple-6 | #805ad5 |
| purple-7 | #6b46c1 |
| purple-8 | #553c9a |
| purple-9 | #44337a |
| pink | #d53f8c |
| pink-1 | #fff5f7 |
| pink-2 | #fed7e2 |
| pink-3 | #fbb6ce |
| pink-4 | #f687b3 |
| pink-5 | #ed64a6 |
| pink-6 | #d53f8c |
| pink-7 | #b83280 |
| pink-8 | #97266d |
| pink-9 | #702459 |

### `fontSize`

| Key | Value |
| --- | ----- |
| 0 | 0rem |
| 1 | 1rem |
| 2 | 1.125rem |
| 3 | 1.25rem |
| 4 | 1.5rem |
| 5 | 1.875rem |
| 6 | 2.25rem |
| 7 | 3rem |
| 8 | 4rem |
| 9 | 8rem |
| 10 | 12rem |
| 00001 | 0.25rem |
| 0001 | 0.5rem |
| 001 | 0.75rem |
| 01 | 0.875rem |

### `height`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 1 | 1rem |
| 2 | 1.25rem |
| 3 | 1.5rem |
| 4 | 2rem |
| 5 | 2.5rem |
| 6 | 3rem |
| 7 | 4rem |
| 8 | 5rem |
| 9 | 6rem |
| 10 | 8rem |
| 11 | 10rem |
| 12 | 12rem |
| 13 | 14rem |
| 14 | 16rem |
| 15 | 18rem |
| 16 | 20rem |
| 17 | 22rem |
| 18 | 24rem |
| 19 | 26rem |
| 20 | 28rem |
| auto | auto |
| 001 | 0.0625rem |
| 002 | 0.125rem |
| 01 | 0.25rem |
| 02 | 0.5rem |
| 03 | 0.75rem |
| 04 | 0.875rem |
| 10p | 10% |
| 20p | 20% |
| 25p | 25% |
| 30p | 30% |
| 33p | calc(100% / 3) |
| 40p | 40% |
| 50p | 50% |
| 60p | 60% |
| 66p | calc(100% / 1.5) |
| 70p | 70% |
| 75p | 75% |
| 80p | 80% |
| 90p | 90% |
| 100p | 100% |
| 50vw | 50vw |
| 50vh | 50vh |
| 100vw | 100vw |
| 100vh | 100vh |

### `inset`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 1 | 1rem |
| 2 | 1.25rem |
| 3 | 1.5rem |
| 4 | 2rem |
| 5 | 2.5rem |
| 6 | 3rem |
| 7 | 4rem |
| 8 | 5rem |
| 9 | 6rem |
| 10 | 8rem |
| 11 | 10rem |
| 12 | 12rem |
| 13 | 14rem |
| 14 | 16rem |
| 15 | 18rem |
| 16 | 20rem |
| 17 | 22rem |
| 18 | 24rem |
| 19 | 26rem |
| 20 | 28rem |
| auto | auto |
| 001 | 0.0625rem |
| 002 | 0.125rem |
| 01 | 0.25rem |
| 02 | 0.5rem |
| 03 | 0.75rem |
| 04 | 0.875rem |
| 10p | 10% |
| 20p | 20% |
| 25p | 25% |
| 30p | 30% |
| 33p | calc(100% / 3) |
| 40p | 40% |
| 50p | 50% |
| 60p | 60% |
| 66p | calc(100% / 1.5) |
| 70p | 70% |
| 75p | 75% |
| 80p | 80% |
| 90p | 90% |
| 100p | 100% |
| 50vw | 50vw |
| 50vh | 50vh |
| 100vw | 100vw |
| 100vh | 100vh |
| -0 | -0 |
| -1 | -1rem |
| -2 | -1.25rem |
| -3 | -1.5rem |
| -4 | -2rem |
| -5 | -2.5rem |
| -6 | -3rem |
| -7 | -4rem |
| -8 | -5rem |
| -9 | -6rem |
| -10 | -8rem |
| -11 | -10rem |
| -12 | -12rem |
| -13 | -14rem |
| -14 | -16rem |
| -15 | -18rem |
| -16 | -20rem |
| -17 | -22rem |
| -18 | -24rem |
| -19 | -26rem |
| -20 | -28rem |
| -auto | -auto |
| -001 | -0.0625rem |
| -002 | -0.125rem |
| -01 | -0.25rem |
| -02 | -0.5rem |
| -03 | -0.75rem |
| -04 | -0.875rem |
| -10p | -10% |
| -20p | -20% |
| -25p | -25% |
| -30p | -30% |
| -33p | -calc(100% / 3) |
| -40p | -40% |
| -50p | -50% |
| -60p | -60% |
| -66p | -calc(100% / 1.5) |
| -70p | -70% |
| -75p | -75% |
| -80p | -80% |
| -90p | -90% |
| -100p | -100% |
| -50vw | -50vw |
| -50vh | -50vh |
| -100vw | -100vw |
| -100vh | -100vh |

### `lineHeight`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 1 | 1 |
| 2 | 1.25 |
| 3 | 1.375 |
| 4 | 1.5 |
| 5 | 1.625 |
| 6 | 2 |
| tight | 1.25 |
| normal | 1.5 |
| loose | 2 |

### `maxHeight`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 1 | 1rem |
| 2 | 1.25rem |
| 3 | 1.5rem |
| 4 | 2rem |
| 5 | 2.5rem |
| 6 | 3rem |
| 7 | 4rem |
| 8 | 5rem |
| 9 | 6rem |
| 10 | 8rem |
| 11 | 10rem |
| 12 | 12rem |
| 13 | 14rem |
| 14 | 16rem |
| 15 | 18rem |
| 16 | 20rem |
| 17 | 22rem |
| 18 | 24rem |
| 19 | 26rem |
| 20 | 28rem |
| auto | auto |
| 001 | 0.0625rem |
| 002 | 0.125rem |
| 01 | 0.25rem |
| 02 | 0.5rem |
| 03 | 0.75rem |
| 04 | 0.875rem |
| 10p | 10% |
| 20p | 20% |
| 25p | 25% |
| 30p | 30% |
| 33p | calc(100% / 3) |
| 40p | 40% |
| 50p | 50% |
| 60p | 60% |
| 66p | calc(100% / 1.5) |
| 70p | 70% |
| 75p | 75% |
| 80p | 80% |
| 90p | 90% |
| 100p | 100% |
| 50vw | 50vw |
| 50vh | 50vh |
| 100vw | 100vw |
| 100vh | 100vh |

### `maxWidth`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 1 | 1rem |
| 2 | 1.25rem |
| 3 | 1.5rem |
| 4 | 2rem |
| 5 | 2.5rem |
| 6 | 3rem |
| 7 | 4rem |
| 8 | 5rem |
| 9 | 6rem |
| 10 | 8rem |
| 11 | 10rem |
| 12 | 12rem |
| 13 | 14rem |
| 14 | 16rem |
| 15 | 18rem |
| 16 | 20rem |
| 17 | 22rem |
| 18 | 24rem |
| 19 | 26rem |
| 20 | 28rem |
| auto | auto |
| 001 | 0.0625rem |
| 002 | 0.125rem |
| 01 | 0.25rem |
| 02 | 0.5rem |
| 03 | 0.75rem |
| 04 | 0.875rem |
| 10p | 10% |
| 20p | 20% |
| 25p | 25% |
| 30p | 30% |
| 33p | calc(100% / 3) |
| 40p | 40% |
| 50p | 50% |
| 60p | 60% |
| 66p | calc(100% / 1.5) |
| 70p | 70% |
| 75p | 75% |
| 80p | 80% |
| 90p | 90% |
| 100p | 100% |
| 50vw | 50vw |
| 50vh | 50vh |
| 100vw | 100vw |
| 100vh | 100vh |

### `minHeight`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 1 | 1rem |
| 2 | 1.25rem |
| 3 | 1.5rem |
| 4 | 2rem |
| 5 | 2.5rem |
| 6 | 3rem |
| 7 | 4rem |
| 8 | 5rem |
| 9 | 6rem |
| 10 | 8rem |
| 11 | 10rem |
| 12 | 12rem |
| 13 | 14rem |
| 14 | 16rem |
| 15 | 18rem |
| 16 | 20rem |
| 17 | 22rem |
| 18 | 24rem |
| 19 | 26rem |
| 20 | 28rem |
| auto | auto |
| 001 | 0.0625rem |
| 002 | 0.125rem |
| 01 | 0.25rem |
| 02 | 0.5rem |
| 03 | 0.75rem |
| 04 | 0.875rem |
| 10p | 10% |
| 20p | 20% |
| 25p | 25% |
| 30p | 30% |
| 33p | calc(100% / 3) |
| 40p | 40% |
| 50p | 50% |
| 60p | 60% |
| 66p | calc(100% / 1.5) |
| 70p | 70% |
| 75p | 75% |
| 80p | 80% |
| 90p | 90% |
| 100p | 100% |
| 50vw | 50vw |
| 50vh | 50vh |
| 100vw | 100vw |
| 100vh | 100vh |

### `minWidth`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 1 | 1rem |
| 2 | 1.25rem |
| 3 | 1.5rem |
| 4 | 2rem |
| 5 | 2.5rem |
| 6 | 3rem |
| 7 | 4rem |
| 8 | 5rem |
| 9 | 6rem |
| 10 | 8rem |
| 11 | 10rem |
| 12 | 12rem |
| 13 | 14rem |
| 14 | 16rem |
| 15 | 18rem |
| 16 | 20rem |
| 17 | 22rem |
| 18 | 24rem |
| 19 | 26rem |
| 20 | 28rem |
| auto | auto |
| 001 | 0.0625rem |
| 002 | 0.125rem |
| 01 | 0.25rem |
| 02 | 0.5rem |
| 03 | 0.75rem |
| 04 | 0.875rem |
| 10p | 10% |
| 20p | 20% |
| 25p | 25% |
| 30p | 30% |
| 33p | calc(100% / 3) |
| 40p | 40% |
| 50p | 50% |
| 60p | 60% |
| 66p | calc(100% / 1.5) |
| 70p | 70% |
| 75p | 75% |
| 80p | 80% |
| 90p | 90% |
| 100p | 100% |
| 50vw | 50vw |
| 50vh | 50vh |
| 100vw | 100vw |
| 100vh | 100vh |

### `opacity`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 10p | .1 |
| 25p | .25 |
| 50p | .5 |
| 75p | .75 |
| 90p | .9 |
| 100p | 1 |

### `spacing`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 1 | 1rem |
| 2 | 1.25rem |
| 3 | 1.5rem |
| 4 | 2rem |
| 5 | 2.5rem |
| 6 | 3rem |
| 7 | 4rem |
| 8 | 5rem |
| 9 | 6rem |
| 10 | 8rem |
| 11 | 10rem |
| 12 | 12rem |
| 13 | 14rem |
| 14 | 16rem |
| 15 | 18rem |
| 16 | 20rem |
| 17 | 22rem |
| 18 | 24rem |
| 19 | 26rem |
| 20 | 28rem |
| auto | auto |
| 001 | 0.0625rem |
| 002 | 0.125rem |
| 01 | 0.25rem |
| 02 | 0.5rem |
| 03 | 0.75rem |
| 04 | 0.875rem |
| 10p | 10% |
| 20p | 20% |
| 25p | 25% |
| 30p | 30% |
| 33p | calc(100% / 3) |
| 40p | 40% |
| 50p | 50% |
| 60p | 60% |
| 66p | calc(100% / 1.5) |
| 70p | 70% |
| 75p | 75% |
| 80p | 80% |
| 90p | 90% |
| 100p | 100% |
| 50vw | 50vw |
| 50vh | 50vh |
| 100vw | 100vw |
| 100vh | 100vh |

### `width`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 1 | 1rem |
| 2 | 1.25rem |
| 3 | 1.5rem |
| 4 | 2rem |
| 5 | 2.5rem |
| 6 | 3rem |
| 7 | 4rem |
| 8 | 5rem |
| 9 | 6rem |
| 10 | 8rem |
| 11 | 10rem |
| 12 | 12rem |
| 13 | 14rem |
| 14 | 16rem |
| 15 | 18rem |
| 16 | 20rem |
| 17 | 22rem |
| 18 | 24rem |
| 19 | 26rem |
| 20 | 28rem |
| auto | auto |
| 001 | 0.0625rem |
| 002 | 0.125rem |
| 01 | 0.25rem |
| 02 | 0.5rem |
| 03 | 0.75rem |
| 04 | 0.875rem |
| 10p | 10% |
| 20p | 20% |
| 25p | 25% |
| 30p | 30% |
| 33p | calc(100% / 3) |
| 40p | 40% |
| 50p | 50% |
| 60p | 60% |
| 66p | calc(100% / 1.5) |
| 70p | 70% |
| 75p | 75% |
| 80p | 80% |
| 90p | 90% |
| 100p | 100% |
| 50vw | 50vw |
| 50vh | 50vh |
| 100vw | 100vw |
| 100vh | 100vh |

### `zIndex`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |
| 6 | 6 |
| 7 | 7 |
| 8 | 8 |
| 9 | 9 |


## Variants

The following variants are updated compared to the default Tailwind config.
Mostly, it enables the `hover_` modifier.

| Type | Variants |
| --- | ----- |
| display | responsive, hover, focus, conditionals |
| height | responsive, hover |
| position | responsive, hover |
| width | responsive, hover |
| zIndex | responsive, hover |
| backgroundColor | responsive, hover, focus, conditionals |

## Custom classes

### Gradients

Background gradient to be applied using the `.bg-gradient-x` (for horizontal
gradient) and `.bg-gradient-y` (for vertical ones) classes. The start and end
color will be taken from the `.bg-gradient-from-XXX` and `.bg-gradient-to-XXX`
classes.

So `.bg-gradient-x.bg-gradient-from-red.bg-gradient-to-green` will generate and
horizontal gradient from red to green. If only one color is defined, the other
will fallback to `transparent`.

### Bullets

As default list items don't have any bullets, a specific `.bullet` class can be
used to prepend a `•` to an element.

It also includes the `.bullet-arrow` (>), `.bullet-cross` (✗) and
`.bullet-tick` (✓) variants, as well as numbered `.bullet-1` through
`.bullet-10`.

Bullet color can be changed with `.bullet-XXX` classes, where `XXX` is any
configured color.

### Debug

The `.debug` class is meant to be added to a parent element, and it will outline
it as well as each of its nested children. Each depth will be outlined in
a different color, allowing for quick identification of layout.

### Flexbox

This weird-looking classes are meant to be used to quickly define flexbox
context and element. Their naming is vim-inspired, meaning that each letter
stands for the first letter of a defining part of what they do.

For example, `.flrnw` means `Flex Row NoWrap`, whil `.flcw` stands for `Flex Column Wrap`.

Some classes are meant to be used on containers (like `.flrnw` or `.flc`), while
others should be used on children (like `.fln` or `.fla`). Of course, some
children can also themselves become flexbox context so you can write
`.fln.flrnw` (actually, I do that often).

The classes also come without the `.fl` prefix, for when you don't want to imply
`display: flex` (maybe because the element is hidden and will be set to display
flex only on a certain screen width).

Here is a recap of all the classes, explaining the idea behind them, and if they
should be applied on a parent or children.

| Name     | Acronym                         | Explanation                                              | Where    |
| -------- | ------------------------------- | -------------------------------------------------------- | -------- |
| `.flrnw` | Flex Row NoWrap                 | Row context that does not allow wrapping                 | Parent   |
| `.flrw`  | Flex Row Wrap                   | Row context that allows wrapping                         | Parent   |
| `.flcnw` | Flex Column NoWrap              | Column content that does not allow wrapping              | Parent   |
| `.flcw`  | Flex Column Wrap                | Column content that allows wrapping                      | Parent   |
| `.rnw`   | Row NoWrap                      | Same as `.flrnw`, but without `display: flex`            | Parent   |
| `.rw`    | Row Wrap                        | Same as `.flrw`, but without `display: flex`             | Parent   |
| `.cnw`   | Column NoWrap                   | Same as `.flcnw`, but without `display: flex`            | Parent   |
| `.cw`    | Column Wrap                     | Same as `.flcw`, but without `display: flex`             | Parent   |
| `.flc`   | Flex Center                     | Center horizontally and vertically all children elements | Parent   |
| `.flrch` | Flex Row Center Horizontally    | Center horizontally all elements of the row              | Parent   |
| `.flrcv` | Flex Row Center Vertically      | Center vertically all elements of the row                | Parent   |
| `.flcch` | Flex Column Center Horizontally | Center horizontally all elements of the column           | Parent   |
| `.flccv` | Flex Column Center Vertically   | Center vertically all elements of the column             | Parent   |
| `.flral` | Flex Row Align Left             | Align all children elements on the left of the row       | Parent   |
| `.flrar` | Flex Row Align Right            | Align all children elements on the right of the row      | Parent   |
| `.flcab` | Flex Column Align Bottom        | Align all children elements at the bottom of the column  | Parent   |
| `.flcat` | Flex Column Align Top           | Align all children elements at the top of the column     | Parent   |
| `.flspa` | Flex Space Around               | Set empty space around children elements                 | Parent   |
| `.flspb` | Flex Space Between              | Set empty space between children elements                | Parent   |
| `.fla`   | Flex auto                       | Element takes all available space                        | Children |
| `.fln`   | Flex none                       | Element only takes as much place as needed               | Children |

### Fonts

Short aliases for the most common font stacks are available: `.arial`,
`.verdana`, `.helvetica`.

### Grayscale

The `.grayscale` class force and element to be displayed only in shades of black
and white. It comes with `.grayscale-1` and `.grayscale-2` which are more or
less strong. The default `.grayscale` is equal to `.grayscale-1`.
A `.grayscale-0` utility is also provided in case you need to overwrite it.

It internally uses a `filter` so might no work if other classes also define
a `filter` on it.

### Opacity

Instead of generating variants of each background color classes with a specific
opacity added, a new `.bg-opacity-X` set of classes is added instead. So, you
would write `.bg-red.bg-opacity-50p` to have a 50% transparent red background.

This works because each background color is expressed as an `rgba` value and the
alpha part is actually a CSS variable (default to `1`) that gets overwritten in
the `.bg-opacity-X` classes.

I chose to do it that way because it drastically cut on the number of classes to
generate, and had a direct impact on the time required to compile the final CSS.

Same logic is also applied to text and border colors.

### Text Shadows

Shadows can be added to text using the `.text-shadow` class. Shadow color and
opacity can be modified with any color and opacity defined (for example,
`.text-shadow-blue .text-shadow-50p` will set the shadow to blue with an opacity
of 50%).

### Box Shadows

Shadows can be added to any block element using the `.shadow-X` classes. `X` is
a size, ranging from 1 to 5. Sizes `.shadow-01` and `.shadow-001` are also
availale for very subtle shadows and `.shadow-0` to remove all shadow
altogether.

Shadow color can be updated using `.shadow-Y` classes, where `Y` is any color
defined earlier.

### Transitions

`width`, `height` and `opacity` can be animated through simple transitions.

Start by adding a `.transition` on the element.

`.transition-height`, `.transition-width` and `.transition-opacity` allow you to
define which property to animate (only one can be animated that way).

Adding `.transition-linear` will define a linear transition of the specified
value. Check the `timingFunctions` entry on the table at the top of this
document to see the other available functions.

Both delay and duration of the transition can be expressed through
`.transition-1` (for duration) and `.transition-delay-1` (for delay). Check the
`timingScale` entry in the tables at the top of the document for more details on
the available values.

### Animations

For custom animations more complex than simple transitions, various parameters
can be updated through the `.animation-XXX` classes.

Start by adding a `.animation` on the element. You're also expected to change
the `--animation-name` custom property to match the name of your animation.

Similar to transitions above, you can change the timing function, duration and
delay using for example `.animation-ease-in`, `animation-2`,
`.animation-delay-1`.

`.animate-loop` and `.animate-once` allow you to change the number of time the
animation should run. `.animate-forward` and `.animate-backward` allow you to
change the direction of the animation.

`.animate-paused` and `.animate-running` are also available with the `.hover_`
prefix, allowing you to stop an animation when hovering it.

### Scaling

In addition to the classical dimension helpers, a set of `.scale-XXX` classes
are also added to scaling up or down some elements. `.scale-50p` will display
and element at half its size while `.scale-200p` will double its dimensions.

The scale goes from `10p` to `200p` with increments of 10.

### Rotating

You can rotate an element by any angle form 0° to 360° by increments of 5°.

So `.rotate-45` will rotate the element by 45°.

### Translating

You can move elements along the X and Y axis using the `.translate-x-*` and
`.translate-y-*` classes. They both use the spacing scale defined earlier.

You can also use `.translate-*` to move them along both axes.


### Switches

The `.switch-X` classes allow using the `label` and `checkbox` trick to
show/hide elements on the page with Tailwind. This works by changing the display
property of an element based on the value (checked or not) of a checkbox placed
right before this element. The checkbox itself have a unique `id`, that is
referenced in the `for` attribute of a `label` you can place wherever you want
on the page. Combining all those techniques, you can effectively have a `label`
wherever you want on the page that will contextually change a property on
another element when clicked.

By default, the `.switch-X` can only change the `display` property. Three
variants (`.switch-1`, `.switch-2` and `.switch-3`) are provided in case you
need more than one switch.

Example markup:

```html
<input type="checkbox" class="switch-1" id="whatever" />
<div class="hidden switch-1_block">
  Hello!
</div>
<label id="whatever">Click me to toggle the display of the content</label>
```

## Contribution

The `./docs` folder contains a test website that includes all the new classes.
You can run it with `yarn run docs:serve`.

Once the documentation website is served locally, you can run visual regression
tests with the `yarn run test:visual` command. It will take screenshots of each
page and compare them to reference screenshot taken earlier.

If there is any difference, a visual diff will be presented. If the changes are
expected (ie. you added a new feature or fixed a bug), run `yarn run
test:visual:approve` to update the reference screenshots.

Note that only the element with the `.screenshot` class will be compared. You
can add the `.screenshot-click` class on elements if you want to click on them
before the screenshot. Similarly you can add the `.screenshot-hover` element on
one element if you want to hover it before taking a screenshot. Note that only
one element can be hovered, but several elements can be clicked.