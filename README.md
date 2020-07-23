# tailwind-config-norska

This is the custom Tailwind config used by norska (my personal static website
generator). I chose to expose the full config as its own npm module so I could
more easily plug it into other projects that don't use norska.

## Why a custom config?

I love Tailwind, but the default config wasn't enough for my needs, so I decided
to tweak it until I was comfortable with it. This config suits my way of working
really well, but it might not suits yours.

You can check [https://projects.pixelastic.com/tailwind-config-norska/]() to see
all classes in action. This acts as both a documentation and a test suite for
visual regression testing.

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

Some classes have been simplified. The `line-height` classes are available
through `.lh-XXX` instead of `.leading-XXX`. The `.bold`, `.no-bold`, `.strike`
and `.pointer` have been added.

Text color and font family can be applied without prefixes: `.red.arial` will
work.

### PurgeCSS

This config will generate **a lot** of classes. It is expected that `purgeCSS`
will be applied on the resulting HTML+CSS files to remove all unused CSS
classes.

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

### Text Shadows

Shadows can be added to text using the `.text-shadow` class. Shadow color and
opacity can be modified with any color and opacity defined (for example,
`.text-shadow-blue.text-shadow-opacity-50p` will set the shadow to blue with an opacity
of 50%).

### Box Shadows

Shadows can be added to any block element using the `.shadow-X` classes. `X` is
a size, ranging from 1 to 5. Sizes `.shadow-01` and `.shadow-001` are also
availale for very subtle shadows and `.shadow-0` to remove all shadow
altogether.

Shadow color can be updated using `.shadow-{color}` classes, where `{color}` is
any color defined earlier.

### Transitions

Elements with a transition defined also have a default duration, delay and
easing function defined. Those can still be overwritten with the relevant
Tailwind classes.

### Animations

Custom animations can be defined in the `animationName` theme. They are then
available through the `.animation-{name}` classe. Delay, duration, easing,
looping and state (running/paused) can be configured with classes.

### Conditionals

The `.if` class and the `.then_` modifier can be used to toggle property based
on a page state. The `.if` should be applied to a checkbox or radio button, and
whenever it is checked, the `.then_` class will be applied to another element.

Combined with the default input/label relationship through `id` and `for`
attributes, it is possible to use a label element to toggle a state using an
invisible checkbox.

Example markup:

```pug
input.if#whatever(type="checkbox")
.hidden.then_block Hello!
label(for="whatever") Click me to toggle the content display
```

## Theming

The default values of many parts have been updated. The following tables expose
all the theme values. In includes both Tailwind default value, custom values,
and new theming option added by custom plugins.

### `animationDelay`

| Key | Value |
| --- | ----- |
| 0 | 0s |
| 1 | 1s |
| 2 | 2s |
| 5 | 5s |
| 10 | 10s |
| default | 0s |
| 01 | 100ms |
| 02 | 200ms |
| 03 | 300ms |
| 05 | 500ms |
| 07 | 700ms |

### `animationDuration`

| Key | Value |
| --- | ----- |
| 0 | 0s |
| 1 | 1s |
| 2 | 2s |
| 5 | 5s |
| 10 | 10s |
| 12 | 12s |
| 30 | 30s |
| 45 | 45s |
| 60 | 60s |
| default | 2s |
| 01 | 100ms |
| 02 | 200ms |
| 03 | 300ms |
| 05 | 500ms |
| 07 | 700ms |

### `animationIterationCount`

| Key | Value |
| --- | ----- |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| default | infinite |

### `animationName`

| Key | Value |
| --- | ----- |
| spin | {"from":{"transform":"rotate(0deg)"},"to":{"transform":"rotate(360deg)"}} |

### `animationPlayState`

| Key | Value |
| --- | ----- |
| default | running |
| paused | paused |
| running | running |

### `animationTimingFunction`

| Key | Value |
| --- | ----- |
| default | linear |
| in | cubic-bezier(0.4, 0, 1, 1) |
| linear | linear |
| out | cubic-bezier(0, 0, 0.2, 1) |
| in-out | cubic-bezier(0.4, 0, 0.2, 1) |

### `backgroundPosition`

| Key | Value |
| --- | ----- |
| bottom | bottom |
| center | center |
| left | left |
| left-bottom | left bottom |
| left-top | left top |
| right | right |
| right-bottom | right bottom |
| right-top | right top |
| top | top |

### `backgroundSize`

| Key | Value |
| --- | ----- |
| auto | auto |
| cover | cover |
| contain | contain |

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
| 100p | 100% |

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
| 1 | 0 1px 3px 0 rgba(var(--box-shadow-rgb), 0.1), 0 1px 2px 0 rgba(var(--box-shadow-rgb), 0.06) |
| 2 | 0 4px 6px -1px rgba(var(--box-shadow-rgb), 0.1), 0 2px 4px -1px rgba(var(--box-shadow-rgb), 0.06) |
| 3 | 0 10px 15px -3px rgba(var(--box-shadow-rgb), 0.1), 0 4px 6px -2px rgba(var(--box-shadow-rgb), 0.05) |
| 4 | 0 20px 25px -5px rgba(var(--box-shadow-rgb), 0.1), 0 10px 10px -5px rgba(var(--box-shadow-rgb), 0.04) |
| 5 | 0 25px 50px -12px rgba(var(--box-shadow-rgb), 0.25) |
| 001 | 0 0 0 1px rgba(var(--box-shadow-rgb), 0.05) |
| 01 | 0 1px 2px 0 rgba(var(--box-shadow-rgb), 0.05) |
| default | 0 1px 3px 0 rgba(var(--box-shadow-rgb), 0.1), 0 1px 2px 0 rgba(var(--box-shadow-rgb), 0.06) |
| inner | inset 0 2px 4px 0 rgba(var(--box-shadow-rgb), 0.06) |
| outline | 0 0 0 3px rgba(66, 153, 225, 0.5) |

### `boxShadowColor`

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
| default | #000 |

### `bullet`

| Key | Value |
| --- | ----- |
| 0 | 0.  |
| 1 | 1.  |
| 2 | 2.  |
| 3 | 3.  |
| 4 | 4.  |
| 5 | 5.  |
| 6 | 6.  |
| 7 | 7.  |
| 8 | 8.  |
| 9 | 9.  |
| 10 | 10.  |
| arrow | >  |
| cross | ✗  |
| default | •  |
| tick | ✓  |

### `bulletColor`

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

### `conditionals`

| Key | Value |
| --- | ----- |
| if | then |

### `cursor`

| Key | Value |
| --- | ----- |
| auto | auto |
| default | default |
| pointer | pointer |
| wait | wait |
| text | text |
| move | move |
| not-allowed | not-allowed |

### `debug`

| Key | Value |
| --- | ----- |
| 0 | #b794f4 |
| 1 | #f687b3 |
| 2 | #68d391 |
| 3 | #f6e05e |
| 4 | #ffaf00 |
| 5 | #fc8181 |

### `dimensionBase`

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

### `dimensionCrop`

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

### `fill`

| Key | Value |
| --- | ----- |
| current | currentColor |

### `flex`

| Key | Value |
| --- | ----- |
| 1 | 1 1 0% |
| auto | 1 1 auto |
| initial | 0 1 auto |
| none | none |

### `flexGrow`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| default | 1 |

### `flexShrink`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| default | 1 |

### `flexbox`

| Key | Value |
| --- | ----- |
| .flrnw | {"display":"flex","flexDirection":"row"} |
| .flrw | {"display":"flex","flexDirection":"row","flexWrap":"wrap"} |
| .flcnw | {"display":"flex","flexDirection":"column"} |
| .flcw | {"display":"flex","flexDirection":"column","flexWrap":"wrap"} |
| .rnw | {"flexDirection":"row"} |
| .rw | {"flexDirection":"row","flexWrap":"wrap"} |
| .cnw | {"flexDirection":"column"} |
| .cw | {"flexDirection":"column","flexWrap":"wrap"} |
| .flccv | {"justifyContent":"center"} |
| .flcch | {"alignItems":"center"} |
| .flrcv | {"alignItems":"center"} |
| .flrch | {"justifyContent":"center"} |
| .flc | {"alignItems":"center","justifyContent":"center"} |
| .flral | {"justifyContent":"flex-start"} |
| .flrar | {"justifyContent":"flex-end"} |
| .flcat | {"justifyContent":"flex-start"} |
| .flcab | {"justifyContent":"flex-end"} |
| .flspa | {"justifyContent":"space-around"} |
| .flspb | {"justifyContent":"space-between"} |
| .fln | {"flex":"none"} |
| .fla | {"flex":"1 1 auto","minWidth":0,"minHeight":0} |

### `fontFamily`

| Key | Value |
| --- | ----- |
| sans | ["system-ui","-apple-system","BlinkMacSystemFont","\"Segoe UI\"","Roboto","\"Helvetica Neue\"","Arial","\"Noto Sans\"","sans-serif","\"Apple Color Emoji\"","\"Segoe UI Emoji\"","\"Segoe UI Symbol\"","\"Noto Color Emoji\""] |
| serif | ["Georgia","Cambria","\"Times New Roman\"","Times","serif"] |
| mono | ["Menlo","Monaco","Consolas","\"Liberation Mono\"","\"Courier New\"","monospace"] |
| arial | ["Arial","\"Helvetica Neue\"","Helvetica","sans-serif"] |
| verdana | ["Verdana","Geneva","sans-serif"] |
| helvetica | ["\"Helvetica Neue\"","Helvetica","Arial","sans-serif"] |

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
| smaller | 0.75em |
| larger | 1.25em |

### `fontWeight`

| Key | Value |
| --- | ----- |
| .bold | {"fontWeight":"bold"} |
| .no-bold | {"fontWeight":"normal"} |

### `gradientFrom`

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
| default | transparent |

### `gradientTo`

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
| default | transparent |

### `grayscale`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 10p | .1 |
| 25p | .25 |
| 50p | .5 |
| 75p | .75 |
| 90p | .9 |
| 100p | 1 |
| default | 1 |

### `gridColumn`

| Key | Value |
| --- | ----- |
| auto | auto |
| span-1 | span 1 / span 1 |
| span-2 | span 2 / span 2 |
| span-3 | span 3 / span 3 |
| span-4 | span 4 / span 4 |
| span-5 | span 5 / span 5 |
| span-6 | span 6 / span 6 |
| span-7 | span 7 / span 7 |
| span-8 | span 8 / span 8 |
| span-9 | span 9 / span 9 |
| span-10 | span 10 / span 10 |
| span-11 | span 11 / span 11 |
| span-12 | span 12 / span 12 |

### `gridColumnEnd`

| Key | Value |
| --- | ----- |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |
| 6 | 6 |
| 7 | 7 |
| 8 | 8 |
| 9 | 9 |
| 10 | 10 |
| 11 | 11 |
| 12 | 12 |
| 13 | 13 |
| auto | auto |

### `gridColumnStart`

| Key | Value |
| --- | ----- |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |
| 6 | 6 |
| 7 | 7 |
| 8 | 8 |
| 9 | 9 |
| 10 | 10 |
| 11 | 11 |
| 12 | 12 |
| 13 | 13 |
| auto | auto |

### `gridColumnWidth`

| Key | Value |
| --- | ----- |
| 0 | repeat(auto-fill, minmax(0, 1fr)) |
| 1 | repeat(auto-fill, minmax(1rem, 1fr)) |
| 2 | repeat(auto-fill, minmax(1.25rem, 1fr)) |
| 3 | repeat(auto-fill, minmax(1.5rem, 1fr)) |
| 4 | repeat(auto-fill, minmax(2rem, 1fr)) |
| 5 | repeat(auto-fill, minmax(2.5rem, 1fr)) |
| 6 | repeat(auto-fill, minmax(3rem, 1fr)) |
| 7 | repeat(auto-fill, minmax(4rem, 1fr)) |
| 8 | repeat(auto-fill, minmax(5rem, 1fr)) |
| 9 | repeat(auto-fill, minmax(6rem, 1fr)) |
| 10 | repeat(auto-fill, minmax(8rem, 1fr)) |
| 11 | repeat(auto-fill, minmax(10rem, 1fr)) |
| 12 | repeat(auto-fill, minmax(12rem, 1fr)) |
| 13 | repeat(auto-fill, minmax(14rem, 1fr)) |
| 14 | repeat(auto-fill, minmax(16rem, 1fr)) |
| 15 | repeat(auto-fill, minmax(18rem, 1fr)) |
| 16 | repeat(auto-fill, minmax(20rem, 1fr)) |
| 17 | repeat(auto-fill, minmax(22rem, 1fr)) |
| 18 | repeat(auto-fill, minmax(24rem, 1fr)) |
| 19 | repeat(auto-fill, minmax(26rem, 1fr)) |
| 20 | repeat(auto-fill, minmax(28rem, 1fr)) |
| auto | repeat(auto-fill, minmax(auto, 1fr)) |
| 001 | repeat(auto-fill, minmax(0.0625rem, 1fr)) |
| 002 | repeat(auto-fill, minmax(0.125rem, 1fr)) |
| 01 | repeat(auto-fill, minmax(0.25rem, 1fr)) |
| 02 | repeat(auto-fill, minmax(0.5rem, 1fr)) |
| 03 | repeat(auto-fill, minmax(0.75rem, 1fr)) |
| 04 | repeat(auto-fill, minmax(0.875rem, 1fr)) |
| 50vw | repeat(auto-fill, minmax(50vw, 1fr)) |
| 50vh | repeat(auto-fill, minmax(50vh, 1fr)) |
| 100vw | repeat(auto-fill, minmax(100vw, 1fr)) |
| 100vh | repeat(auto-fill, minmax(100vh, 1fr)) |
| 25ch | repeat(auto-fill, minmax(25ch, 1fr)) |
| 50ch | repeat(auto-fill, minmax(50ch, 1fr)) |
| 65ch | repeat(auto-fill, minmax(65ch, 1fr)) |
| 75ch | repeat(auto-fill, minmax(75ch, 1fr)) |
| 100ch | repeat(auto-fill, minmax(100ch, 1fr)) |
| prose | repeat(auto-fill, minmax(65ch, 1fr)) |

### `gridRow`

| Key | Value |
| --- | ----- |
| auto | auto |
| span-1 | span 1 / span 1 |
| span-2 | span 2 / span 2 |
| span-3 | span 3 / span 3 |
| span-4 | span 4 / span 4 |
| span-5 | span 5 / span 5 |
| span-6 | span 6 / span 6 |

### `gridRowEnd`

| Key | Value |
| --- | ----- |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |
| 6 | 6 |
| 7 | 7 |
| auto | auto |

### `gridRowStart`

| Key | Value |
| --- | ----- |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |
| 6 | 6 |
| 7 | 7 |
| auto | auto |

### `gridTemplateColumns`

| Key | Value |
| --- | ----- |
| 1 | repeat(1, minmax(0, 1fr)) |
| 2 | repeat(2, minmax(0, 1fr)) |
| 3 | repeat(3, minmax(0, 1fr)) |
| 4 | repeat(4, minmax(0, 1fr)) |
| 5 | repeat(5, minmax(0, 1fr)) |
| 6 | repeat(6, minmax(0, 1fr)) |
| 7 | repeat(7, minmax(0, 1fr)) |
| 8 | repeat(8, minmax(0, 1fr)) |
| 9 | repeat(9, minmax(0, 1fr)) |
| 10 | repeat(10, minmax(0, 1fr)) |
| 11 | repeat(11, minmax(0, 1fr)) |
| 12 | repeat(12, minmax(0, 1fr)) |
| none | none |

### `gridTemplateRows`

| Key | Value |
| --- | ----- |
| 1 | repeat(1, minmax(0, 1fr)) |
| 2 | repeat(2, minmax(0, 1fr)) |
| 3 | repeat(3, minmax(0, 1fr)) |
| 4 | repeat(4, minmax(0, 1fr)) |
| 5 | repeat(5, minmax(0, 1fr)) |
| 6 | repeat(6, minmax(0, 1fr)) |
| none | none |

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

### `letterSpacing`

| Key | Value |
| --- | ----- |
| tighter | -0.05em |
| tight | -0.025em |
| normal | 0 |
| wide | 0.025em |
| wider | 0.05em |
| widest | 0.1em |

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

### `listStyleType`

| Key | Value |
| --- | ----- |
| none | none |
| disc | disc |
| decimal | decimal |

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
| none | none |

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
| 25ch | 25ch |
| 50ch | 50ch |
| 65ch | 65ch |
| 75ch | 75ch |
| 100ch | 100ch |
| prose | 65ch |
| none | none |

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

### `misc`

| Key | Value |
| --- | ----- |
| .pointer | {"cursor":"pointer"} |

### `objectPosition`

| Key | Value |
| --- | ----- |
| bottom | bottom |
| center | center |
| left | left |
| left-bottom | left bottom |
| left-top | left top |
| right | right |
| right-bottom | right bottom |
| right-top | right top |
| top | top |

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

### `order`

| Key | Value |
| --- | ----- |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |
| 6 | 6 |
| 7 | 7 |
| 8 | 8 |
| 9 | 9 |
| 10 | 10 |
| 11 | 11 |
| 12 | 12 |
| first | -9999 |
| last | 9999 |
| none | 0 |

### `rotate`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 45 | 45deg |
| 90 | 90deg |
| 180 | 180deg |
| -180 | -180deg |
| -90 | -90deg |
| -45 | -45deg |

### `scale`

| Key | Value |
| --- | ----- |
| 0p | 0 |
| 50p | .5 |
| 75p | .75 |
| 90p | .9 |
| 95p | .95 |
| 100p | 1 |
| 105p | 1.05 |
| 110p | 1.1 |
| 125p | 1.25 |
| 150p | 1.5 |

### `screens`

| Key | Value |
| --- | ----- |
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |

### `skew`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 3 | 3deg |
| 6 | 6deg |
| 12 | 12deg |
| -12 | -12deg |
| -6 | -6deg |
| -3 | -3deg |

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

### `stroke`

| Key | Value |
| --- | ----- |
| current | currentColor |

### `strokeWidth`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 1 | 1 |
| 2 | 2 |

### `textColor`

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

### `textDecoration`

| Key | Value |
| --- | ----- |
| none | none |
| strike | line-through |
| underline | underline |

### `textDecorationColor`

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
| default | currentColor |

### `textOpacity`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 10p | .1 |
| 25p | .25 |
| 50p | .5 |
| 75p | .75 |
| 90p | .9 |
| 100p | 1 |
| default | 1 |

### `textShadow`

| Key | Value |
| --- | ----- |
| default | .03em .03em rgba(var(--text-shadow-rgb), var(--text-shadow-opacity)) |

### `textShadowColor`

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
| default | #000 |

### `textShadowOpacity`

| Key | Value |
| --- | ----- |
| 0 | 0 |
| 10p | .1 |
| 25p | .25 |
| 50p | .5 |
| 75p | .75 |
| 90p | .9 |
| 100p | 1 |
| default | .75 |

### `transformOrigin`

| Key | Value |
| --- | ----- |
| center | center |
| top | top |
| top-right | top right |
| right | right |
| bottom-right | bottom right |
| bottom | bottom |
| bottom-left | bottom left |
| left | left |
| top-left | top left |

### `transitionDelay`

| Key | Value |
| --- | ----- |
| 0 | 0s |
| 1 | 1s |
| 2 | 2s |
| 5 | 5s |
| 10 | 10s |
| default | 0s |
| 01 | 100ms |
| 02 | 200ms |
| 03 | 300ms |
| 05 | 500ms |
| 07 | 700ms |

### `transitionDuration`

| Key | Value |
| --- | ----- |
| 0 | 0s |
| 1 | 1s |
| 2 | 2s |
| 5 | 5s |
| 10 | 10s |
| 12 | 12s |
| 30 | 30s |
| 45 | 45s |
| 60 | 60s |
| default | 500ms |
| 01 | 100ms |
| 02 | 200ms |
| 03 | 300ms |
| 05 | 500ms |
| 07 | 700ms |

### `transitionProperty`

| Key | Value |
| --- | ----- |
| none | none |
| all | all |
| colors | background-color, border-color, color, fill, stroke, text-decoration-color |
| dimensions | min-height, height, max-height, min-width, width, max-width |
| opacity | opacity |
| shadow | box-shadow, text-shadow |
| transform | transform |

### `transitionTimingFunction`

| Key | Value |
| --- | ----- |
| default | cubic-bezier(0.4, 0, 0.2, 1) |
| in | cubic-bezier(0.4, 0, 1, 1) |
| linear | linear |
| out | cubic-bezier(0, 0, 0.2, 1) |
| in-out | cubic-bezier(0.4, 0, 0.2, 1) |

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
| 25ch | 25ch |
| 50ch | 50ch |
| 65ch | 65ch |
| 75ch | 75ch |
| 100ch | 100ch |
| prose | 65ch |

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

| Type | Variants |
| --- | ----- |
| backgroundColor | responsive, hover, focus, focus-within, conditionals |
| backgroundOpacity | responsive, hover, focus, focus-within |
| display | responsive, hover, focus, conditionals |
| height | responsive, hover |
| position | responsive, hover |
| width | responsive, hover |
| zIndex | responsive, hover |
| animationAndTransition | hover, focus |
| boxShadow | responsive, hover, focus |
| opacity | responsive, hover, focus, focus-within, conditionals |
| flexbox | responsive |
| grayscale | hover, focus, focus-within |
| lineHeight | responsive |
| misc | responsive, hover, focus |
| textColor | responsive, hover, focus, focus-within, conditionals |
| textDecoration | responsive, hover, focus |

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