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

### `backgroundColor`

| Key | Value |
| --- | ----- |
| transparent | transparent |
| black | rgba(0, 0, 0, var(--background-opacity, 1)) |
| white | rgba(255, 255, 255, var(--background-opacity, 1)) |
| gray | rgba(113, 128, 150, var(--background-opacity, 1)) |
| gray-1 | rgba(247, 250, 252, var(--background-opacity, 1)) |
| gray-2 | rgba(237, 242, 247, var(--background-opacity, 1)) |
| gray-3 | rgba(226, 232, 240, var(--background-opacity, 1)) |
| gray-4 | rgba(203, 213, 224, var(--background-opacity, 1)) |
| gray-5 | rgba(160, 174, 192, var(--background-opacity, 1)) |
| gray-6 | rgba(113, 128, 150, var(--background-opacity, 1)) |
| gray-7 | rgba(74, 85, 104, var(--background-opacity, 1)) |
| gray-8 | rgba(45, 55, 72, var(--background-opacity, 1)) |
| gray-9 | rgba(26, 32, 44, var(--background-opacity, 1)) |
| red | rgba(229, 62, 62, var(--background-opacity, 1)) |
| red-1 | rgba(255, 245, 245, var(--background-opacity, 1)) |
| red-2 | rgba(254, 215, 215, var(--background-opacity, 1)) |
| red-3 | rgba(254, 178, 178, var(--background-opacity, 1)) |
| red-4 | rgba(252, 129, 129, var(--background-opacity, 1)) |
| red-5 | rgba(245, 101, 101, var(--background-opacity, 1)) |
| red-6 | rgba(229, 62, 62, var(--background-opacity, 1)) |
| red-7 | rgba(197, 48, 48, var(--background-opacity, 1)) |
| red-8 | rgba(155, 44, 44, var(--background-opacity, 1)) |
| red-9 | rgba(116, 42, 42, var(--background-opacity, 1)) |
| orange | rgba(221, 107, 32, var(--background-opacity, 1)) |
| orange-1 | rgba(255, 250, 240, var(--background-opacity, 1)) |
| orange-2 | rgba(254, 235, 200, var(--background-opacity, 1)) |
| orange-3 | rgba(251, 211, 141, var(--background-opacity, 1)) |
| orange-4 | rgba(255, 175, 0, var(--background-opacity, 1)) |
| orange-5 | rgba(237, 137, 54, var(--background-opacity, 1)) |
| orange-6 | rgba(221, 107, 32, var(--background-opacity, 1)) |
| orange-7 | rgba(192, 86, 33, var(--background-opacity, 1)) |
| orange-8 | rgba(156, 66, 33, var(--background-opacity, 1)) |
| orange-9 | rgba(123, 52, 30, var(--background-opacity, 1)) |
| yellow | rgba(214, 158, 46, var(--background-opacity, 1)) |
| yellow-1 | rgba(255, 255, 240, var(--background-opacity, 1)) |
| yellow-2 | rgba(254, 252, 191, var(--background-opacity, 1)) |
| yellow-3 | rgba(250, 240, 137, var(--background-opacity, 1)) |
| yellow-4 | rgba(246, 224, 94, var(--background-opacity, 1)) |
| yellow-5 | rgba(236, 201, 75, var(--background-opacity, 1)) |
| yellow-6 | rgba(214, 158, 46, var(--background-opacity, 1)) |
| yellow-7 | rgba(183, 121, 31, var(--background-opacity, 1)) |
| yellow-8 | rgba(151, 90, 22, var(--background-opacity, 1)) |
| yellow-9 | rgba(116, 66, 16, var(--background-opacity, 1)) |
| green | rgba(56, 161, 105, var(--background-opacity, 1)) |
| green-1 | rgba(240, 255, 244, var(--background-opacity, 1)) |
| green-2 | rgba(198, 246, 213, var(--background-opacity, 1)) |
| green-3 | rgba(154, 230, 180, var(--background-opacity, 1)) |
| green-4 | rgba(104, 211, 145, var(--background-opacity, 1)) |
| green-5 | rgba(72, 187, 120, var(--background-opacity, 1)) |
| green-6 | rgba(56, 161, 105, var(--background-opacity, 1)) |
| green-7 | rgba(47, 133, 90, var(--background-opacity, 1)) |
| green-8 | rgba(39, 103, 73, var(--background-opacity, 1)) |
| green-9 | rgba(34, 84, 61, var(--background-opacity, 1)) |
| teal | rgba(49, 151, 149, var(--background-opacity, 1)) |
| teal-1 | rgba(230, 255, 250, var(--background-opacity, 1)) |
| teal-2 | rgba(178, 245, 234, var(--background-opacity, 1)) |
| teal-3 | rgba(129, 230, 217, var(--background-opacity, 1)) |
| teal-4 | rgba(79, 209, 197, var(--background-opacity, 1)) |
| teal-5 | rgba(56, 178, 172, var(--background-opacity, 1)) |
| teal-6 | rgba(49, 151, 149, var(--background-opacity, 1)) |
| teal-7 | rgba(44, 122, 123, var(--background-opacity, 1)) |
| teal-8 | rgba(40, 94, 97, var(--background-opacity, 1)) |
| teal-9 | rgba(35, 78, 82, var(--background-opacity, 1)) |
| blue | rgba(49, 130, 206, var(--background-opacity, 1)) |
| blue-1 | rgba(235, 248, 255, var(--background-opacity, 1)) |
| blue-2 | rgba(190, 227, 248, var(--background-opacity, 1)) |
| blue-3 | rgba(144, 205, 244, var(--background-opacity, 1)) |
| blue-4 | rgba(99, 179, 237, var(--background-opacity, 1)) |
| blue-5 | rgba(66, 153, 225, var(--background-opacity, 1)) |
| blue-6 | rgba(49, 130, 206, var(--background-opacity, 1)) |
| blue-7 | rgba(43, 108, 176, var(--background-opacity, 1)) |
| blue-8 | rgba(44, 82, 130, var(--background-opacity, 1)) |
| blue-9 | rgba(42, 67, 101, var(--background-opacity, 1)) |
| indigo | rgba(90, 103, 216, var(--background-opacity, 1)) |
| indigo-1 | rgba(235, 244, 255, var(--background-opacity, 1)) |
| indigo-2 | rgba(195, 218, 254, var(--background-opacity, 1)) |
| indigo-3 | rgba(163, 191, 250, var(--background-opacity, 1)) |
| indigo-4 | rgba(127, 156, 245, var(--background-opacity, 1)) |
| indigo-5 | rgba(102, 126, 234, var(--background-opacity, 1)) |
| indigo-6 | rgba(90, 103, 216, var(--background-opacity, 1)) |
| indigo-7 | rgba(76, 81, 191, var(--background-opacity, 1)) |
| indigo-8 | rgba(67, 65, 144, var(--background-opacity, 1)) |
| indigo-9 | rgba(60, 54, 107, var(--background-opacity, 1)) |
| purple | rgba(128, 90, 213, var(--background-opacity, 1)) |
| purple-1 | rgba(250, 245, 255, var(--background-opacity, 1)) |
| purple-2 | rgba(233, 216, 253, var(--background-opacity, 1)) |
| purple-3 | rgba(214, 188, 250, var(--background-opacity, 1)) |
| purple-4 | rgba(183, 148, 244, var(--background-opacity, 1)) |
| purple-5 | rgba(159, 122, 234, var(--background-opacity, 1)) |
| purple-6 | rgba(128, 90, 213, var(--background-opacity, 1)) |
| purple-7 | rgba(107, 70, 193, var(--background-opacity, 1)) |
| purple-8 | rgba(85, 60, 154, var(--background-opacity, 1)) |
| purple-9 | rgba(68, 51, 122, var(--background-opacity, 1)) |
| pink | rgba(213, 63, 140, var(--background-opacity, 1)) |
| pink-1 | rgba(255, 245, 247, var(--background-opacity, 1)) |
| pink-2 | rgba(254, 215, 226, var(--background-opacity, 1)) |
| pink-3 | rgba(251, 182, 206, var(--background-opacity, 1)) |
| pink-4 | rgba(246, 135, 179, var(--background-opacity, 1)) |
| pink-5 | rgba(237, 100, 166, var(--background-opacity, 1)) |
| pink-6 | rgba(213, 63, 140, var(--background-opacity, 1)) |
| pink-7 | rgba(184, 50, 128, var(--background-opacity, 1)) |
| pink-8 | rgba(151, 38, 109, var(--background-opacity, 1)) |
| pink-9 | rgba(112, 36, 89, var(--background-opacity, 1)) |

### `borderColor`

| Key | Value |
| --- | ----- |
| transparent | transparent |
| black | rgba(0, 0, 0, var(--border-opacity, 1)) |
| white | rgba(255, 255, 255, var(--border-opacity, 1)) |
| gray | rgba(113, 128, 150, var(--border-opacity, 1)) |
| gray-1 | rgba(247, 250, 252, var(--border-opacity, 1)) |
| gray-2 | rgba(237, 242, 247, var(--border-opacity, 1)) |
| gray-3 | rgba(226, 232, 240, var(--border-opacity, 1)) |
| gray-4 | rgba(203, 213, 224, var(--border-opacity, 1)) |
| gray-5 | rgba(160, 174, 192, var(--border-opacity, 1)) |
| gray-6 | rgba(113, 128, 150, var(--border-opacity, 1)) |
| gray-7 | rgba(74, 85, 104, var(--border-opacity, 1)) |
| gray-8 | rgba(45, 55, 72, var(--border-opacity, 1)) |
| gray-9 | rgba(26, 32, 44, var(--border-opacity, 1)) |
| red | rgba(229, 62, 62, var(--border-opacity, 1)) |
| red-1 | rgba(255, 245, 245, var(--border-opacity, 1)) |
| red-2 | rgba(254, 215, 215, var(--border-opacity, 1)) |
| red-3 | rgba(254, 178, 178, var(--border-opacity, 1)) |
| red-4 | rgba(252, 129, 129, var(--border-opacity, 1)) |
| red-5 | rgba(245, 101, 101, var(--border-opacity, 1)) |
| red-6 | rgba(229, 62, 62, var(--border-opacity, 1)) |
| red-7 | rgba(197, 48, 48, var(--border-opacity, 1)) |
| red-8 | rgba(155, 44, 44, var(--border-opacity, 1)) |
| red-9 | rgba(116, 42, 42, var(--border-opacity, 1)) |
| orange | rgba(221, 107, 32, var(--border-opacity, 1)) |
| orange-1 | rgba(255, 250, 240, var(--border-opacity, 1)) |
| orange-2 | rgba(254, 235, 200, var(--border-opacity, 1)) |
| orange-3 | rgba(251, 211, 141, var(--border-opacity, 1)) |
| orange-4 | rgba(255, 175, 0, var(--border-opacity, 1)) |
| orange-5 | rgba(237, 137, 54, var(--border-opacity, 1)) |
| orange-6 | rgba(221, 107, 32, var(--border-opacity, 1)) |
| orange-7 | rgba(192, 86, 33, var(--border-opacity, 1)) |
| orange-8 | rgba(156, 66, 33, var(--border-opacity, 1)) |
| orange-9 | rgba(123, 52, 30, var(--border-opacity, 1)) |
| yellow | rgba(214, 158, 46, var(--border-opacity, 1)) |
| yellow-1 | rgba(255, 255, 240, var(--border-opacity, 1)) |
| yellow-2 | rgba(254, 252, 191, var(--border-opacity, 1)) |
| yellow-3 | rgba(250, 240, 137, var(--border-opacity, 1)) |
| yellow-4 | rgba(246, 224, 94, var(--border-opacity, 1)) |
| yellow-5 | rgba(236, 201, 75, var(--border-opacity, 1)) |
| yellow-6 | rgba(214, 158, 46, var(--border-opacity, 1)) |
| yellow-7 | rgba(183, 121, 31, var(--border-opacity, 1)) |
| yellow-8 | rgba(151, 90, 22, var(--border-opacity, 1)) |
| yellow-9 | rgba(116, 66, 16, var(--border-opacity, 1)) |
| green | rgba(56, 161, 105, var(--border-opacity, 1)) |
| green-1 | rgba(240, 255, 244, var(--border-opacity, 1)) |
| green-2 | rgba(198, 246, 213, var(--border-opacity, 1)) |
| green-3 | rgba(154, 230, 180, var(--border-opacity, 1)) |
| green-4 | rgba(104, 211, 145, var(--border-opacity, 1)) |
| green-5 | rgba(72, 187, 120, var(--border-opacity, 1)) |
| green-6 | rgba(56, 161, 105, var(--border-opacity, 1)) |
| green-7 | rgba(47, 133, 90, var(--border-opacity, 1)) |
| green-8 | rgba(39, 103, 73, var(--border-opacity, 1)) |
| green-9 | rgba(34, 84, 61, var(--border-opacity, 1)) |
| teal | rgba(49, 151, 149, var(--border-opacity, 1)) |
| teal-1 | rgba(230, 255, 250, var(--border-opacity, 1)) |
| teal-2 | rgba(178, 245, 234, var(--border-opacity, 1)) |
| teal-3 | rgba(129, 230, 217, var(--border-opacity, 1)) |
| teal-4 | rgba(79, 209, 197, var(--border-opacity, 1)) |
| teal-5 | rgba(56, 178, 172, var(--border-opacity, 1)) |
| teal-6 | rgba(49, 151, 149, var(--border-opacity, 1)) |
| teal-7 | rgba(44, 122, 123, var(--border-opacity, 1)) |
| teal-8 | rgba(40, 94, 97, var(--border-opacity, 1)) |
| teal-9 | rgba(35, 78, 82, var(--border-opacity, 1)) |
| blue | rgba(49, 130, 206, var(--border-opacity, 1)) |
| blue-1 | rgba(235, 248, 255, var(--border-opacity, 1)) |
| blue-2 | rgba(190, 227, 248, var(--border-opacity, 1)) |
| blue-3 | rgba(144, 205, 244, var(--border-opacity, 1)) |
| blue-4 | rgba(99, 179, 237, var(--border-opacity, 1)) |
| blue-5 | rgba(66, 153, 225, var(--border-opacity, 1)) |
| blue-6 | rgba(49, 130, 206, var(--border-opacity, 1)) |
| blue-7 | rgba(43, 108, 176, var(--border-opacity, 1)) |
| blue-8 | rgba(44, 82, 130, var(--border-opacity, 1)) |
| blue-9 | rgba(42, 67, 101, var(--border-opacity, 1)) |
| indigo | rgba(90, 103, 216, var(--border-opacity, 1)) |
| indigo-1 | rgba(235, 244, 255, var(--border-opacity, 1)) |
| indigo-2 | rgba(195, 218, 254, var(--border-opacity, 1)) |
| indigo-3 | rgba(163, 191, 250, var(--border-opacity, 1)) |
| indigo-4 | rgba(127, 156, 245, var(--border-opacity, 1)) |
| indigo-5 | rgba(102, 126, 234, var(--border-opacity, 1)) |
| indigo-6 | rgba(90, 103, 216, var(--border-opacity, 1)) |
| indigo-7 | rgba(76, 81, 191, var(--border-opacity, 1)) |
| indigo-8 | rgba(67, 65, 144, var(--border-opacity, 1)) |
| indigo-9 | rgba(60, 54, 107, var(--border-opacity, 1)) |
| purple | rgba(128, 90, 213, var(--border-opacity, 1)) |
| purple-1 | rgba(250, 245, 255, var(--border-opacity, 1)) |
| purple-2 | rgba(233, 216, 253, var(--border-opacity, 1)) |
| purple-3 | rgba(214, 188, 250, var(--border-opacity, 1)) |
| purple-4 | rgba(183, 148, 244, var(--border-opacity, 1)) |
| purple-5 | rgba(159, 122, 234, var(--border-opacity, 1)) |
| purple-6 | rgba(128, 90, 213, var(--border-opacity, 1)) |
| purple-7 | rgba(107, 70, 193, var(--border-opacity, 1)) |
| purple-8 | rgba(85, 60, 154, var(--border-opacity, 1)) |
| purple-9 | rgba(68, 51, 122, var(--border-opacity, 1)) |
| pink | rgba(213, 63, 140, var(--border-opacity, 1)) |
| pink-1 | rgba(255, 245, 247, var(--border-opacity, 1)) |
| pink-2 | rgba(254, 215, 226, var(--border-opacity, 1)) |
| pink-3 | rgba(251, 182, 206, var(--border-opacity, 1)) |
| pink-4 | rgba(246, 135, 179, var(--border-opacity, 1)) |
| pink-5 | rgba(237, 100, 166, var(--border-opacity, 1)) |
| pink-6 | rgba(213, 63, 140, var(--border-opacity, 1)) |
| pink-7 | rgba(184, 50, 128, var(--border-opacity, 1)) |
| pink-8 | rgba(151, 38, 109, var(--border-opacity, 1)) |
| pink-9 | rgba(112, 36, 89, var(--border-opacity, 1)) |

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
| auto | auto |
| 001 | 1px |
| 002 | 2px |
| 003 | 4px |
| 004 | 8px |
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

### `boxShadow`

| Key | Value |
| --- | ----- |
| 0 | none |
| 1 |  0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06) |
| 2 |  0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05) |
| 3 |  0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04) |
| 4 | 0 25px 50px -12px rgba(0, 0, 0, .25) |
| default | 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06) |
| inner | inset 0 2px 4px 0 rgba(0,0,0,0.06) |

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
| 06 | 0.25rem |
| 07 | 0.5rem |
| 08 | 0.75rem |
| 09 | 0.875rem |

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
| 001 | 1px |
| 002 | 2px |
| 003 | 4px |
| 004 | 8px |
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
| 001 | 1px |
| 002 | 2px |
| 003 | 4px |
| 004 | 8px |
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
| -001 | -1px |
| -002 | -2px |
| -003 | -4px |
| -004 | -8px |
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
| 001 | 1px |
| 002 | 2px |
| 003 | 4px |
| 004 | 8px |
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
| 001 | 1px |
| 002 | 2px |
| 003 | 4px |
| 004 | 8px |
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
| 001 | 1px |
| 002 | 2px |
| 003 | 4px |
| 004 | 8px |
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
| 001 | 1px |
| 002 | 2px |
| 003 | 4px |
| 004 | 8px |
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
| 1 | .9 |
| 2 | .75 |
| 3 | .5 |
| 4 | .25 |
| 5 | .1 |
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
| 001 | 1px |
| 002 | 2px |
| 003 | 4px |
| 004 | 8px |
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

### `textColor`

| Key | Value |
| --- | ----- |
| transparent | transparent |
| black | rgba(0, 0, 0, var(--text-opacity, 1)) |
| white | rgba(255, 255, 255, var(--text-opacity, 1)) |
| gray | rgba(113, 128, 150, var(--text-opacity, 1)) |
| gray-1 | rgba(247, 250, 252, var(--text-opacity, 1)) |
| gray-2 | rgba(237, 242, 247, var(--text-opacity, 1)) |
| gray-3 | rgba(226, 232, 240, var(--text-opacity, 1)) |
| gray-4 | rgba(203, 213, 224, var(--text-opacity, 1)) |
| gray-5 | rgba(160, 174, 192, var(--text-opacity, 1)) |
| gray-6 | rgba(113, 128, 150, var(--text-opacity, 1)) |
| gray-7 | rgba(74, 85, 104, var(--text-opacity, 1)) |
| gray-8 | rgba(45, 55, 72, var(--text-opacity, 1)) |
| gray-9 | rgba(26, 32, 44, var(--text-opacity, 1)) |
| red | rgba(229, 62, 62, var(--text-opacity, 1)) |
| red-1 | rgba(255, 245, 245, var(--text-opacity, 1)) |
| red-2 | rgba(254, 215, 215, var(--text-opacity, 1)) |
| red-3 | rgba(254, 178, 178, var(--text-opacity, 1)) |
| red-4 | rgba(252, 129, 129, var(--text-opacity, 1)) |
| red-5 | rgba(245, 101, 101, var(--text-opacity, 1)) |
| red-6 | rgba(229, 62, 62, var(--text-opacity, 1)) |
| red-7 | rgba(197, 48, 48, var(--text-opacity, 1)) |
| red-8 | rgba(155, 44, 44, var(--text-opacity, 1)) |
| red-9 | rgba(116, 42, 42, var(--text-opacity, 1)) |
| orange | rgba(221, 107, 32, var(--text-opacity, 1)) |
| orange-1 | rgba(255, 250, 240, var(--text-opacity, 1)) |
| orange-2 | rgba(254, 235, 200, var(--text-opacity, 1)) |
| orange-3 | rgba(251, 211, 141, var(--text-opacity, 1)) |
| orange-4 | rgba(255, 175, 0, var(--text-opacity, 1)) |
| orange-5 | rgba(237, 137, 54, var(--text-opacity, 1)) |
| orange-6 | rgba(221, 107, 32, var(--text-opacity, 1)) |
| orange-7 | rgba(192, 86, 33, var(--text-opacity, 1)) |
| orange-8 | rgba(156, 66, 33, var(--text-opacity, 1)) |
| orange-9 | rgba(123, 52, 30, var(--text-opacity, 1)) |
| yellow | rgba(214, 158, 46, var(--text-opacity, 1)) |
| yellow-1 | rgba(255, 255, 240, var(--text-opacity, 1)) |
| yellow-2 | rgba(254, 252, 191, var(--text-opacity, 1)) |
| yellow-3 | rgba(250, 240, 137, var(--text-opacity, 1)) |
| yellow-4 | rgba(246, 224, 94, var(--text-opacity, 1)) |
| yellow-5 | rgba(236, 201, 75, var(--text-opacity, 1)) |
| yellow-6 | rgba(214, 158, 46, var(--text-opacity, 1)) |
| yellow-7 | rgba(183, 121, 31, var(--text-opacity, 1)) |
| yellow-8 | rgba(151, 90, 22, var(--text-opacity, 1)) |
| yellow-9 | rgba(116, 66, 16, var(--text-opacity, 1)) |
| green | rgba(56, 161, 105, var(--text-opacity, 1)) |
| green-1 | rgba(240, 255, 244, var(--text-opacity, 1)) |
| green-2 | rgba(198, 246, 213, var(--text-opacity, 1)) |
| green-3 | rgba(154, 230, 180, var(--text-opacity, 1)) |
| green-4 | rgba(104, 211, 145, var(--text-opacity, 1)) |
| green-5 | rgba(72, 187, 120, var(--text-opacity, 1)) |
| green-6 | rgba(56, 161, 105, var(--text-opacity, 1)) |
| green-7 | rgba(47, 133, 90, var(--text-opacity, 1)) |
| green-8 | rgba(39, 103, 73, var(--text-opacity, 1)) |
| green-9 | rgba(34, 84, 61, var(--text-opacity, 1)) |
| teal | rgba(49, 151, 149, var(--text-opacity, 1)) |
| teal-1 | rgba(230, 255, 250, var(--text-opacity, 1)) |
| teal-2 | rgba(178, 245, 234, var(--text-opacity, 1)) |
| teal-3 | rgba(129, 230, 217, var(--text-opacity, 1)) |
| teal-4 | rgba(79, 209, 197, var(--text-opacity, 1)) |
| teal-5 | rgba(56, 178, 172, var(--text-opacity, 1)) |
| teal-6 | rgba(49, 151, 149, var(--text-opacity, 1)) |
| teal-7 | rgba(44, 122, 123, var(--text-opacity, 1)) |
| teal-8 | rgba(40, 94, 97, var(--text-opacity, 1)) |
| teal-9 | rgba(35, 78, 82, var(--text-opacity, 1)) |
| blue | rgba(49, 130, 206, var(--text-opacity, 1)) |
| blue-1 | rgba(235, 248, 255, var(--text-opacity, 1)) |
| blue-2 | rgba(190, 227, 248, var(--text-opacity, 1)) |
| blue-3 | rgba(144, 205, 244, var(--text-opacity, 1)) |
| blue-4 | rgba(99, 179, 237, var(--text-opacity, 1)) |
| blue-5 | rgba(66, 153, 225, var(--text-opacity, 1)) |
| blue-6 | rgba(49, 130, 206, var(--text-opacity, 1)) |
| blue-7 | rgba(43, 108, 176, var(--text-opacity, 1)) |
| blue-8 | rgba(44, 82, 130, var(--text-opacity, 1)) |
| blue-9 | rgba(42, 67, 101, var(--text-opacity, 1)) |
| indigo | rgba(90, 103, 216, var(--text-opacity, 1)) |
| indigo-1 | rgba(235, 244, 255, var(--text-opacity, 1)) |
| indigo-2 | rgba(195, 218, 254, var(--text-opacity, 1)) |
| indigo-3 | rgba(163, 191, 250, var(--text-opacity, 1)) |
| indigo-4 | rgba(127, 156, 245, var(--text-opacity, 1)) |
| indigo-5 | rgba(102, 126, 234, var(--text-opacity, 1)) |
| indigo-6 | rgba(90, 103, 216, var(--text-opacity, 1)) |
| indigo-7 | rgba(76, 81, 191, var(--text-opacity, 1)) |
| indigo-8 | rgba(67, 65, 144, var(--text-opacity, 1)) |
| indigo-9 | rgba(60, 54, 107, var(--text-opacity, 1)) |
| purple | rgba(128, 90, 213, var(--text-opacity, 1)) |
| purple-1 | rgba(250, 245, 255, var(--text-opacity, 1)) |
| purple-2 | rgba(233, 216, 253, var(--text-opacity, 1)) |
| purple-3 | rgba(214, 188, 250, var(--text-opacity, 1)) |
| purple-4 | rgba(183, 148, 244, var(--text-opacity, 1)) |
| purple-5 | rgba(159, 122, 234, var(--text-opacity, 1)) |
| purple-6 | rgba(128, 90, 213, var(--text-opacity, 1)) |
| purple-7 | rgba(107, 70, 193, var(--text-opacity, 1)) |
| purple-8 | rgba(85, 60, 154, var(--text-opacity, 1)) |
| purple-9 | rgba(68, 51, 122, var(--text-opacity, 1)) |
| pink | rgba(213, 63, 140, var(--text-opacity, 1)) |
| pink-1 | rgba(255, 245, 247, var(--text-opacity, 1)) |
| pink-2 | rgba(254, 215, 226, var(--text-opacity, 1)) |
| pink-3 | rgba(251, 182, 206, var(--text-opacity, 1)) |
| pink-4 | rgba(246, 135, 179, var(--text-opacity, 1)) |
| pink-5 | rgba(237, 100, 166, var(--text-opacity, 1)) |
| pink-6 | rgba(213, 63, 140, var(--text-opacity, 1)) |
| pink-7 | rgba(184, 50, 128, var(--text-opacity, 1)) |
| pink-8 | rgba(151, 38, 109, var(--text-opacity, 1)) |
| pink-9 | rgba(112, 36, 89, var(--text-opacity, 1)) |

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
| 001 | 1px |
| 002 | 2px |
| 003 | 4px |
| 004 | 8px |
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
| cursor | responsive, hover |
| height | responsive, hover |
| position | responsive, hover |
| width | responsive, hover |
| zIndex | responsive, hover |

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