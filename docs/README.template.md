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

{{themes}}

## Variants

The following variants are updated compared to the default Tailwind config.
Mostly, it enables the `hover_` modifier.

{{variants}}

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
